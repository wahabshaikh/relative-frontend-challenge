import Image from "next/image";
import classNames from "classnames";
import { Asset } from "../data/assets";
import { formatPercentage, formatPrice } from "../utils";

interface TrendingAssetCardProps {
  asset: Asset;
}

const TrendingAssetCard = ({ asset }: TrendingAssetCardProps) => {
  return (
    <div className="relative pt-20 text-center">
      <div className="absolute inset-0 z-10 mx-auto inline-flex h-32 w-32 items-center justify-center rounded-full bg-[#14172B]">
        <div className="inline-flex h-[100px] w-[100px] items-center justify-center rounded-full bg-gradient-to-r from-[#626A881A]/10 to-[#2E31491A]/10">
          <Image src={asset.icon} alt={asset.name} height={50} width={50} />
        </div>
      </div>

      <div className="space-y-4 rounded-2xl bg-gradient-to-b from-[#626A881A]/10 to-[#2E31491A]/10 p-6 pt-16 backdrop-blur-[100px]">
        <h2 className="text-xs text-primary">{asset.name}</h2>

        <div className="flex flex-col-reverse">
          <h3 className="mt-2 text-xs text-secondary/90">Price</h3>
          <div className="relative flex h-10 w-full items-center justify-center rounded-full bg-[#14172B]">
            <p className="text-accent/90">{formatPrice(asset.price)}</p>
            <p
              className={classNames(
                "absolute top-3 right-3 text-xs",
                asset.percentageChangeOfPrice >= 0 ? "text-green" : "text-red"
              )}
            >
              {formatPercentage(asset.percentageChangeOfPrice)}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse">
          <h3 className="mt-2 text-xs text-secondary/90">TVL</h3>
          <div className="flex h-10 w-full items-center justify-center rounded-full bg-[#14172B]">
            <p className="text-accent/90">
              {formatPrice(asset.totalValueLocked, 0)}
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse">
          <h3 className="mt-2 text-xs text-secondary/90">Popular pairs</h3>
          <ul className="mx-auto inline-flex items-center justify-center space-x-2 rounded-full bg-[#14172B] px-3 pt-1.5">
            {asset.popularPairings.map((asset) => (
              <li key={asset.name}>
                <Image
                  src={asset.icon}
                  alt={asset.name}
                  height={22}
                  width={22}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TrendingAssetCard;
0;
