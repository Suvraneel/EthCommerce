import { ethers } from "ethers";
import {
  FACTORY_CONTRACT_ABI,
  MANTLE_FACTORY_CONTRACT_ADDRESS,
  HARSH_ABI,
} from "../constants/index";
import { useNetwork } from "wagmi";

export const callContract = async (title, description, price, image) => {
  if (ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    console.log("provider", provider);
    const signer = provider.getSigner();
    console.log("signer", signer);
    const contract = new ethers.Contract(
      // Polygon: 0x441d78a685da0dA6623363965Ab0AaF499Ba42dc
      // Mantle: 0x039a8561e235cf960bfed66aad74441e3594abb4
      "0xC651cda1575c6da36C43751cAaC30f757b96f8eC",
      HARSH_ABI,
      signer
    );
    console.log("contract", contract);

    try {
      console.log("FINGERS CROSSED");
      const tx = await contract.createCourse(
        "SOMETHING",
        100,
        10000,
        "SOMETHING"
      );
      console.log("tx", tx);
      const receipt = await tx.wait();
      console.log(receipt);
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log("Please install MetaMask!");
  }
};
