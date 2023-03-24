import React from "react";
import Layout from "./Layout";
import Banner from "../components/banner";
import Bookcatalogue from "../components/bookcatalogue";

function Home() {
  return (
    <Layout>
      <Banner></Banner>
      <Bookcatalogue></Bookcatalogue>
    </Layout>
  );
}

export default Home;
