import Head from "next/head";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { useAccount, useBalance } from "wagmi";
import { Button, MenuDropdown, WalletOptionsModal } from "..";
import Sidebar from "../Sidebar";
interface Props {
  children: ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const [{ data: accountData, loading }, disconnect] = useAccount({
    fetchEns: true,
  });
  const [{ data: balanceData, loading: balanceLoading }] = useBalance({
    addressOrName: accountData?.address,
    watch: true,
  });

  const renderLabel = () => {
    if (accountData?.ens) {
      return (
        <>
          <div className="relative w-8 h-8 mr-2">
            {accountData.ens.avatar ? (
              <Image
                src={accountData?.ens.avatar}
                alt="ENS Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            ) : (
              <Image
                src="/images/black-gradient.png"
                alt="ENS Avatar"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            )}
          </div>
          <span className="truncate max-w-[100px]">
            {accountData.ens?.name}
          </span>
        </>
      );
    }

    return (
      <span className="truncate max-w-[150px]">{accountData?.address}</span>
    );
  };

  const renderButton = () => {
    if (accountData) {
      return (
        <MenuDropdown
          label={renderLabel()}
          options={[{ label: "Disconnect", onClick: disconnect }]}
        />
      );
    }

    return (
      <Button
        loading={loading || showWalletOptions}
        onClick={() => setShowWalletOptions(true)}
      >
        Connect
      </Button>
    );
  };

  return (
    <div className="w-screen h-screen">
      <Head>
        <title>NextJS wagmi</title>
        <meta name="description" content="NextJS and wagmi template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <WalletOptionsModal
        open={showWalletOptions}
        setOpen={setShowWalletOptions}
      />
      
      <div className="absolute w-full z-50">
        <div className="flex items-center justify-end px-10 py-5">
          {renderButton()}
        </div>
      </div>

      <div className='w-full h-full flex flex-row justify-start items-center relative overflow-x-hidden'>
        <Sidebar/>
        {children}
      </div>
    </div>
  );
}
