import { useContext, useEffect } from "react";

/* Component */
import Blog from "./Blog";
/* Context */
import BlogContext from "../Context/BlogContext";
/* Api */
import instance from "../Api/BlogApi";

function MainArea() {
  const { state, despatch } = useContext(BlogContext);

  useEffect(() => {
    instance
      .get("/articleList.json")
      .then((response) => {
        let newItem = Object.entries(response.data).map(([key, item]) => {
          return { ...item, key };
        });
        despatch({ type: "initData", payload: { newItem } });
      })
      .catch((er) => console.log("Error while getting data from server"));
  }, []);

  let sideEffect;

  let Articles = state.article.map((article, index) => {
    sideEffect = !sideEffect;
    return (
      <BlogContext.Provider
        key={index}
        value={{
          items: article,
          side: sideEffect,
          despatch,
        }}
      >
        <Blog />
      </BlogContext.Provider>
    );
  });

  return <div className="blog">{Articles}</div>;
}

export default MainArea;
