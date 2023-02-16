import { ThirdwebStorage } from "@thirdweb-dev/storage";
import { NextPage } from "next";
import absoluteUrl from "next-absolute-url";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import Breadcrumb from "../../../components/Breadcrumb";
import BasicTab from "../../../components/Products/BasicTab";
import PreviewTab from "../../../components/Products/PreviewTab";
import Button from "./../../../components/Button";
import CustomizeTab from "./../../../components/Products/CustomizeTab";
import HamsterLoader from "../../../components/HamsterLoader";
import { FACTORY_CONTRACT_ABI, MANTLE_FACTORY_CONTRACT_ADDRESS } from "../../../constants";
import { error } from "console";

type Product = () => {
  title: string;
  description: string;
  category: string;
  price: number;
  file: string;
  tags: string[];
};

enum Category {
  "Course or Tutorial",
  "Software Credits",
  "E book",
  "Newsletter",
  "PodCast",
  "Audiobook",
  "Membership",
  "Physical Good",
  "Service",
  "Royalty",
  "Other",
}

const CreateProduct: NextPage = () => {
  const router = useRouter();
  const { address } = useAccount()
  const tabItems = ["Basic", "Customize", "Preview"];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [product, setProduct] = useState<Product | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [cover, setCover] = useState<string | undefined>()
  const [category, setCategory] = useState<Category | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [file, setFile] = useState<string | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [tokenId, setTokenId] = useState('')
  
  const { config } = usePrepareContractWrite({
    address: MANTLE_FACTORY_CONTRACT_ADDRESS,
    abi: FACTORY_CONTRACT_ABI,
    functionName: 'createCourse',
    args: [tokenId, 10, 1000, '0x7219cdFBe59113DEa898B1bd15e0fE373c8471FB'],
    enabled: Boolean(tokenId),
  })
  const { write } = useContractWrite(config)

  const hooks = {
    product: product,
    setProduct: setProduct,
    name: name,
    setName: setName,
    cover: cover,
    setCover: setCover,
    category: category,
    setCategory: setCategory,
    price: price,
    setPrice: setPrice,
    description: description,
    setDescription: setDescription,
    file: file,
    setFile: setFile,
    tags: tags,
    setTags: setTags,
    setLoading: setLoading
  };

  useEffect(() => {
    setProduct(() => {
      return {
        title: name as string,
        cover: cover as string,
        category: category as unknown as string,
        price: price as number,
        description: description as string,
        file: file as string,
        tags: tags as string[],
        status: "Published",
      };
    });
  }, [name, cover, category, price, description, file, tags]);

  const uploading = async (e: any) => {
    const storage = new ThirdwebStorage();
    const url = await storage.upload(e);
    return url;
    console.log(url);
  };

  // add post to db
  const addPost = async (product: Product) => {
    setLoading(true);
    // pushing stuff to mongodb
    const { origin } = absoluteUrl();
    let res = await fetch(`${origin}/api/products`, {
      method: "POST",
      body: JSON.stringify({ ...product, author: address, createdAt: new Date() }),
    });
    let json = await res.json();
    let tokenURI = await uploading(product);
    setTokenId(tokenURI);
    try{
      write?.()
    } catch(e) {
      console.log(e);
    }
    setLoading(false);
    setProduct(undefined);
    router.replace("/products");
    console.log("added post", json);
  };

  return (
    <div className="w-full h-full flex flex-col justify-start items-start px-10 relative">
      <div className="w-full h-fit flex flex-col justify-start gap-10 items-center sticky top-6 z-20">
        <h1 className="w-full text-5xl">
          Awesome ! Create your Product here...
        </h1>
        <div className="w-full h-fit flex justify-between">
          <Breadcrumb
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            tabItems={tabItems}
          />
          <div className="w-full h-full flex justify-end items-center gap-3">
            <Button
              color="error"
              onClick={() => activeTab && setActiveTab(activeTab - 1)}
            >
              Back
            </Button>
            <Button
              onClick={() =>
                activeTab < tabItems.length - 1
                  ? setActiveTab(activeTab + 1)
                  : addPost(product!)
              }
            >
              {activeTab === tabItems.length - 1 ? "Publish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-4/6 flex flex-col justify-around items-center mt-12">
        {activeTab === 0 && <BasicTab hooks={hooks} />}
        {activeTab === 1 && <CustomizeTab hooks={hooks} />}
        {activeTab === 2 && <PreviewTab hooks={hooks} />}
      </div>
      {loading &&
        <div className="w-1/3 h-1/3 flex justify-center items-center absolute top-1/3 left-1/3 z-10">
          <HamsterLoader loaderTitle='Uploading to IPFS' />
        </div>}
    </div>
  );
};

export default CreateProduct;
