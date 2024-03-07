import { Icon } from "@mui/material";
import { CryptoCurrency } from "./types";

export const currencies: CryptoCurrency[] = [
  {
    symbol: "DOGE",
    name: "Dogecoin",
    icon: <Icon component="img" src="/icons/doge.svg" alt="Dogecoin" />,
  },
  {
    symbol:"BTC",
    name: "Bitcoin",
    icon: <Icon component="img" src="/icons/bitcoin-btc-logo.svg" alt="Bitcoin" />,
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    icon: <Icon component="img" src="/icons/ethereum-eth-logo.svg" alt="Ethereum" />,
  }
];
