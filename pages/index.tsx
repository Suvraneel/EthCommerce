import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";

const Home: NextPage = () => {

  return (
    <>
      <h1>Welcome to GumRoad</h1>
    </>
  );
};

export default Home;
