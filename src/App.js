import React from "react";
import NewsCard from "./components/NewsCard";
import { data } from "./data";

function App() {
  return (
    <div>
      {data?.map(singleNews => {
        return <NewsCard key={singleNews.id} data={singleNews} />;
      })}
    </div>
  );
}

export default App;
