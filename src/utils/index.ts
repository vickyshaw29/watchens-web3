import { ethers } from "ethers";
export const shortenAddress = (address: string) =>
  `${address.slice(0, 5)}...${address.slice(address.length - 4)}`;

  //Provider URL should be in a .env file but since its just an assignment hardcoding  it
  export const provider = new ethers.providers.JsonRpcProvider(
    "https://rinkeby.infura.io/v3/4a18407e3f194a2c86291103e12e6e27"
  );