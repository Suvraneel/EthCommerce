import { useState } from "react";
import type { NextPage } from "next";
import { useAccount, useBalance } from "wagmi";
import { Button, Layout, Loader, WalletOptionsModal } from "../components";
import Quickstart from './quickstart/index';

const Home: NextPage = () => {

  return (
    <>
      <Quickstart/>
    </>
  );
};

export default Home;
