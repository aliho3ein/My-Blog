import { useContext, useEffect, useState } from "react";
import BlogContext from "../Context/BlogContext";
import instance from "../Api/BlogApi";

function SingleItem() {
  const Context = useContext(BlogContext);

  const Key = Context.state.thisItem;

  const [article, setArticle] = useState({
    title: "",
    description: "",
    view: 0,
    like: 0,
    img: "",
    modify: "",
  });

  useEffect(() => {
    instance.get(`/articleList/${Key}.json`).then((response) => {
      setArticle(response.data);
    });
  }, []);

  /* Back To Home */
  let backToMain = () => {
    Context.despatch({ type: "CloseArticle", payload: {} });
  };

  /* Like Single Item */
  let likeItem = () => {
    article.like++;
    instance.put(`articleList/${Key}.json`, article).then(() => {
      article.key = Key;
      Context.despatch({
        type: "changeArticle",
        payload: { newItem: article, key: Key },
      });
    });
  };

  return (
    <div className="singleItem">
      <i className="fa fa-arrow-left" onClick={backToMain}></i>
      <div
        className="headItem"
        style={{ backgroundImage: "url(" + article.img }}
      ></div>
      <h2>{article.title}</h2>
      <p>{article.description}</p>
      <div className="detailItem">
        <span title="View"> {article.view}</span>
        <span title="Modify Date"> {article.modify}</span>
        <span title="Like" onClick={likeItem}>
          {article.like}
        </span>
      </div>
    </div>
  );
}

export default SingleItem;
