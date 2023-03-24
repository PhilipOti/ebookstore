import React, { useState } from "react";
import TableList from "../components/tableList";
import { books } from "../data/books";
import Layout from "./Layout";

function SearchPage() {
  const [query, setQuery] = useState("");

  const keys = ["title", "author"];

  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };

  return (
    <Layout>
      <div className="app pt-5">
        <div className="search_input">
          <input
            type="text"
            className="search form-control"
            placeholder="search..."
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <TableList data={search(books)} />
      </div>
    </Layout>
  );
}

export default SearchPage;
