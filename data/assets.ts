export type Asset = {
  icon: string;
  name: string;
  price: number;
  percentageChangeOfPrice: number;
  totalValueLocked: number;
  popularPairings: Pick<Asset, "icon" | "name">[];
};

const assets: Asset[] = [
  {
    icon: "/assets/icons/BTC.svg",
    name: "Bitcoin (BTC)",
    price: 31812.8,
    percentageChangeOfPrice: +10,
    totalValueLocked: 60000,
    popularPairings: [
      { icon: "/assets/icons/SOL.svg", name: "Solana (SOL)" },
      { icon: "/assets/icons/ETH.svg", name: "Ethereum (ETH)" },
      { icon: "/assets/icons/BUSD.svg", name: "Binance USD (BUSD)" },
    ],
  },
  {
    icon: "/assets/icons/SOL.svg",
    name: "Solana (SOL)",
    price: 32.83,
    percentageChangeOfPrice: -12.32,
    totalValueLocked: 60000,
    popularPairings: [
      { icon: "/assets/icons/BTC.svg", name: "Bitcoin (BTC)" },
      { icon: "/assets/icons/ETH.svg", name: "Ethereum (ETH)" },
      { icon: "/assets/icons/BUSD.svg", name: "Binance USD (BUSD)" },
    ],
  },
  {
    icon: "/assets/icons/ETH.svg",
    name: "Ethereum (ETH)",
    price: 1466.45,
    percentageChangeOfPrice: -11.93,
    totalValueLocked: 60000,
    popularPairings: [
      { icon: "/assets/icons/SOL.svg", name: "Solana (SOL)" },
      { icon: "/assets/icons/BTC.svg", name: "Bitcoin (BTC)" },
      { icon: "/assets/icons/BUSD.svg", name: "Binance USD (BUSD)" },
    ],
  },
  {
    icon: "/assets/icons/BUSD.svg",
    name: "Binance USD (BUSD)",
    price: 1.0,
    percentageChangeOfPrice: +0.26,
    totalValueLocked: 60000,
    popularPairings: [
      { icon: "/assets/icons/SOL.svg", name: "Solana (SOL)" },
      { icon: "/assets/icons/ETH.svg", name: "Ethereum (ETH)" },
      { icon: "/assets/icons/BUSD.svg", name: "Binance USD (BUSD)" },
    ],
  },
  {
    icon: "/assets/icons/SHIB.svg",
    name: "Shiba Inu (SHIB)",
    price: 0.00000001948,
    percentageChangeOfPrice: -8.1,
    totalValueLocked: 60000,
    popularPairings: [
      { icon: "/assets/icons/SOL.svg", name: "Solana (SOL)" },
      { icon: "/assets/icons/ETH.svg", name: "Ethereum (ETH)" },
      { icon: "/assets/icons/BUSD.svg", name: "Binance USD (BUSD)" },
    ],
  },
];

export default assets;
