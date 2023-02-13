import { NextPage } from "next";
import { useEffect, useState, useReducer } from "react";
import Breadcrumb from "../../../components/Breadcrumb";
import Button from "./../../../components/Button";
import BasicTab from "../../../components/Products/BasicTab";
import CustomizeTab from "./../../../components/Products/CustomizeTab";
import PreviewTab from "../../../components/Products/PreviewTab";
import { productsData } from "../../api/pdts";
import clientPromise from "../../../lib/mongodb";
import { useRouter } from "next/router";
import { useAccount } from "wagmi";
import absoluteUrl from "next-absolute-url";
import lighthouse from "@lighthouse-web3/sdk";
import { NFTStorage } from "nft.storage";

type Product = () => {
  title: string;
  description: string;
  category: string;
  price: number;
  file: File;
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
  const [{ data: accountData, loading: accountLoading }] = useAccount();
  const tabItems = ["Basic", "Customize", "Preview"];
  const [activeTab, setActiveTab] = useState<number>(0);
  const [product, setProduct] = useState<Product | undefined>();
  const [name, setName] = useState<string | undefined>();
  const [category, setCategory] = useState<Category | undefined>();
  const [price, setPrice] = useState<number | undefined>();
  const [description, setDescription] = useState<string | undefined>();
  const [file, setFile] = useState<File | undefined>();
  const [tags, setTags] = useState<string[]>([]);
  const hooks = {
    product: product,
    setProduct: setProduct,
    name: name,
    setName: setName,
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
  };

  useEffect(() => {
    setProduct(() => {
      return {
        title: name as string,
        category: category as unknown as string,
        price: price as number,
        description: description as string,
        file: file as File,
        tags: tags as string[],
        status: "Published",
      };
    });
  }, [name, category, price, description, file, tags]);

  // add post to db
  const addPost = async (product: Product) => {
    // pushing stuff to lighthouse

    // const dataURI = await lighthouse.upload(
    //   product,
    //   process.env.LIGHTHOUSE_API_KEY
    // );

    // const token =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGU2RDJDQjM0MzBFZDQyZDU0RjE5YzMzOTQ2Mjk3NURjQjdEQUEyOTUiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTY3NjI5NDAxODk3NywibmFtZSI6IkV0aEZvckFsbCJ9.saPkV4VHq3n_l92VWVIXwutmlwRJ4hO1Ebd8DnVo25s";

    // // pushing stuff to nft.storage
    // const storage = new NFTStorage({ token });

    // console.log(`storing file(s) `);
    // const cid = await storage.storeDirectory(product.file);
    // console.log({ cid });

    // const status = await storage.status(cid);
    // console.log(status);

    // pushing stuff to mongodb
    const { origin } = absoluteUrl();
    let res = await fetch(`${origin}/api/products`, {
      method: "POST",
      body: JSON.stringify({ ...product, author: accountData!.address }),
    });
    let json = await res.json();
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
    </div>
  );
};

export default CreateProduct;
