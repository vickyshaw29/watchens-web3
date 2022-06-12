import React, { useState } from "react";
import { Grid } from "@mui/material";
import { CustomButton } from "../../atoms";
import HomepageStyles from "./HomepageStyles";
import { useTheme, useMediaQuery } from "@mui/material";
import { Dashboard } from "..";
import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import walletConnectModule from "@web3-onboard/walletconnect";

const MAINNET_RPC_URL =
  "https://mainnet.infura.io/v3/4a18407e3f194a2c86291103e12e6e27";
const injected = injectedModule();
const walletConnect = walletConnectModule();
const onboard = Onboard({
  wallets: [injected, walletConnect],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
  ],
  appMetadata: {
    name: "My App",
    icon: "/img/logo.svg",
    description: "My app using Onboard",
  },
  accountCenter: {
    desktop: {
      position: "bottomRight",
      enabled: true,
      minimal: true,
    },
    mobile: {
      position: "topRight",
      enabled: true,
      minimal: true,
    },
  },
});

const HomePage = () => {
  const styles = HomepageStyles();
  const theme = useTheme();
  const [userWallet, setUserWallet] = useState<any>();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const md = useMediaQuery(theme.breakpoints.down("lg"));
  const handleClick = async () => {
    const wallets = await onboard.connectWallet();
    setUserWallet(wallets);
  };
  return (
    <Grid container>
      {!userWallet?.length ? (
        <Grid
          item
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ minHeight: "100vh" }}
        >
          <Grid item>
            <img src="/img/logo.svg" alt="logo" />
          </Grid>
          <Grid item sx={{ mt: 4 }}>
            <CustomButton
              buttonName="Connect Wallet"
              variant="contained"
              style={sm ? { minWidth: "80vw" } : { minWidth: "30vw" }}
              onClick={handleClick}
            />
          </Grid>
        </Grid>
      ) : (
        <Grid
          item
          container
          sx={{ pl: !md ? "18rem" : "1rem", pr: !md ? "12rem" : "1rem" }}
        >
          <Dashboard userWallet={userWallet}/>
        </Grid>
      )}
    </Grid>
  );
};

export default HomePage;
