import { useContext, useEffect } from "react";
import CMSContext from "./../../Context/CmsContext";
import Article from "./Article";
import instance from "./../../Api/BlogApi";

function List() {
  let { state, despatch, ManageAction } = useContext(CMSContext);

  useEffect(() => {
    instance
      .get("/articleList.json")
      .then((e) => {
        let newItem = Object.entries(e.data).map(([key, data]) => {
          return { ...data, key };
        });

        despatch({
          type: "initData",
          payload: { newItem },
        });
      })
      .catch((e) => console.log("Error"));
  }, []);

  let Items = state.article.map((item, index) => {
    return <Article key={index} item={item} ManageAction={ManageAction} />;
  });

  return <div id="manageItemArea"> {Items} </div>;
}

export default List;
