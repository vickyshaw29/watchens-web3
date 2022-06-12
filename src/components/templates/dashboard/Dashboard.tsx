import React, { useEffect, useState } from "react";
import {
  Grid,
  Paper,
  Avatar,
  Hidden,
} from "@mui/material";
import { Header } from "../../molecules";
import { useTheme, useMediaQuery } from "@mui/material";
import { CustomButton } from "../../atoms";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DashboardStyles from "./DashboardStyles";
import { useMoralisWeb3Api } from "react-moralis";
import { shortenAddress,provider } from "../../../utils";

const Dashboard = ({ userWallet }: any) => {
  const theme = useTheme();
  const styles = DashboardStyles();
  const Web3Api = useMoralisWeb3Api();
  const [ens, setEns] = useState<string | null>("");
  const md = useMediaQuery(theme.breakpoints.down("md"));
  const [allNfts, setAllNfts] = useState<any>([]);


  //Here we can make the address dynamic to fetch the nft for any user 
  //I have just taken a random address so that you can see some nfts live

  const fetchNFTs = async () => {
    // get polygon NFTs for address
    const options = {
      chain: "rinkeby",
      address: "0x6dc0c0be4c8b2dfe750156dc7d59faabfb5b923d",
    };
    //@ts-ignore
    const rinkebyNFTs = await Web3Api.account.getNFTs(options);
    setAllNfts(rinkebyNFTs?.result);
  };

  useEffect(() => {
    fetchNFTs();
  }, []);

  //checking if the user has ENS (address can be dynamic here)
  useEffect(() => {
    const checkENS = async () => {
      let foundEns = await provider.lookupAddress(
        "0x6dc0c0be4c8b2dfe750156dc7d59faabfb5b923d"
      );
      setEns(foundEns);
    };
    checkENS();
  }, []);
  return (
    <React.Fragment>
      <Header />
      <Grid container sx={{ mt: 11 }}>
        <Grid item container md={4} xs={4}>
          <Hidden mdUp >
            <div style={{ top: 55, position: "absolute",left:8 }}>
              <Grid container >
                <Grid item>
                  <span className={styles.title} style={{ fontSize: 14 }}>
                    {ens?.length && ens !== null ? ens : ""}
                  </span>
                </Grid>
                <Grid item sx={{ marginLeft: "auto", ml: 2 }}>
                  <span className={styles.title} style={{ fontSize: 14 }}>
                    {" "}
                    {shortenAddress(userWallet[0]?.accounts[0]?.address)}
                  </span>
                </Grid>
              </Grid>
            </div>
          </Hidden>
          <Grid item>
            <Avatar
              alt="Remy Sharp"
              src="/img/watchen.svg"
              sx={{
                width: !md ? "9.3rem" : "5.3rem",
                height: !md ? "9.3rem" : "5.3rem",
              }}
            />
          </Grid>
        </Grid>
        <Grid
          item
          container
          md={4}
          xs={8}
          alignItems="center"
          sx={{ mt: !md ? 3 : undefined }}
        >
          <Grid container direction="column">
            <Hidden mdDown>
              <Grid item>
                <Grid container>
                  {ens?.length && ens !== null
                    ? ens
                    : "" && (
                        <Grid item>
                          <span className={styles.title}>
                            {" "}
                            {ens?.length && ens !== null ? ens : ""}
                          </span>
                        </Grid>
                      )}
                  <Grid item sx={{ marginLeft: ens!==null?"auto":undefined, mr: 4 }}>
                    <span className={styles.title}>
                      {" "}
                      {shortenAddress(userWallet[0]?.accounts[0]?.address)}
                    </span>
                  </Grid>
                </Grid>
              </Grid>
            </Hidden>
            <Grid item sx={{ mt: 2 }}>
              <Grid container>
                <Grid item xs={4}>
                  <Grid container direction="column">
                    <Grid item>
                      <span
                        className={styles.title2}
                        style={{ marginLeft: 20 }}
                      >
                        13
                      </span>
                    </Grid>
                    <Grid item>
                      <span className={styles.title2}>assets</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4}>
                  <Grid container direction="column">
                    <Grid item>
                      <span
                        className={styles.title2}
                        style={{ marginLeft: 20 }}
                      >
                        133
                      </span>
                    </Grid>
                    <Grid item>
                      <span className={styles.title2}>followers</span>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container direction="column">
                    <Grid item>
                      <span
                        className={styles.title2}
                        style={{ marginLeft: 20 }}
                      >
                        1
                      </span>
                    </Grid>
                    <Grid item>
                      <span className={styles.title2}>following</span>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden smUp>
          <Grid item container direction="column" sx={{ mb: 2,ml:1 }}>
            <Grid item>
              <span className={styles.title2}>watchen</span>
            </Grid>
            <Grid item>
              <span className={styles.title2}>
                A network for NFT enthusiasts
              </span>
            </Grid>
          </Grid>
        </Hidden>
        <Grid item container md={4}>
          <Grid container>
            <Grid item xs={!md ? 12 : 6}>
              <CustomButton
                variant="contained"
                buttonName="Follow"
                style={{ width: !md ? "100%" : "90%", height: 50 }}
              />
            </Grid>
            <Grid item container xs={!md ? 12 : 6}>
              <Grid item xs={10}>
                <CustomButton
                  variant="outlined"
                  buttonName="Message"
                  startIcon={<EmailOutlinedIcon />}
                  style={{ minWidth: !md ? "100%" : "90%", height: 50 }}
                />
              </Grid>
              <Grid item xs={2}>
                <MoreVertIcon
                  style={{
                    border: "1px solid #D1D5DB",
                    padding: 9,
                    borderRadius: 6,
                    //   marginTop: md ? 6 : undefined,
                    marginLeft: !md ? 10 : undefined,
                    height: 30,
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Hidden mdDown>
          <Grid item container direction="column">
            <Grid item>
              <span className={styles.title2}>watchen</span>
            </Grid>
            <Grid item>
              <span className={styles.title2}>
                A network for NFT enthusiasts
              </span>
            </Grid>
          </Grid>
        </Hidden>
        <Grid item container sx={{ border: "1px solid #E5E7EB", mt: 4 }} />
        <Grid item container spacing={2}>
          {allNfts?.map((nft: any,index:number) => {
            let val = JSON.parse(nft?.metadata);
            return (
              val?.image?.length &&
              !val?.image?.includes("ipfs") && (
                <Grid item xs={4} sx={{ mt: 2 }} key={index}>
                  <Paper elevation={5} sx={{ minHeight: "100%", padding: 1 }}>
                    {
                      <img
                        src={val?.image}
                        alt="nft"
                        style={{
                          width: "100%",
                          minHeight: "100%",
                          maxHeight: 260,
                        }}
                      />
                    }
                  </Paper>
                </Grid>
              )
            );
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  );
};
export default Dashboard;
