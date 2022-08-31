import type { NextPage } from "next";
import Head from "next/head";
import ActivityIcon from "../components/icons/Activity";
import TrendingAssetCard from "../components/TrendingAssetCard";
import assets from "../data/assets";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-[#14172B] p-8 xl:px-20 xl:py-28">
      <Head>
        <title>Relative Frontend Challenge</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="inline-flex items-center">
        <ActivityIcon />
        <h1 className="ml-4 text-accent/90">Trending Assets</h1>
      </header>

      <main className="mt-10">
        <ul className="3xl:grid-cols-5 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {assets.map((asset) => (
            <TrendingAssetCard key={asset.name} asset={asset} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Home;
