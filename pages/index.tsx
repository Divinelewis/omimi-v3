import type { NextPage } from "next";
import Head from "next/head";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Ticker from "../components/Ticker";
import Divider from "../components/Divider";
import Experience from "../components/Experience";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Omimi — KOL Writer &amp; Content Strategist</title>
        <meta
          name="description"
          content="KOL Writer and Content Strategist. Sharp narratives, deep research, compelling content that moves communities."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Omimi — KOL Writer & Content Strategist"
        />
        <meta
          property="og:description"
          content="Crafting sharp narratives and deep research that drives community growth."
        />
        <link rel="icon" href="/logos/favicon.ico" />
      </Head>

      <Nav />
      <Hero />
      <Ticker />
      <Divider />
      <Experience />
      <Divider />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
