/* Card effect */
import Aos from "aos";
import "aos/dist/aos.css";
import { useContext } from "react";
/* Api */
import instance from "../Api/BlogApi";
/* Context */
import BlogContext from "../Context/BlogContext";

function Blog() {
  let Context = useContext(BlogContext);
  let { title, description, img, view, like, key, modify } = Context.items;

  /* Fade Effect Side */
  let side;
  Context.side ? (side = "fade-right") : (side = "fade-left");

  /* Description Preview */
  let des = description.slice(0, 50);

  /* ReadMore and Like */
  let more = (type, key) => {
    type === "like" ? ++like : ++view;

    let newItem = {
      description,
      img,
      title,
      like,
      view,
      modify,
    };

    instance.put(`articleList/${key}.json`, newItem).then(() => {
      newItem.key = key;
      Context.despatch({
        type: "changeArticle",
        payload: { newItem, key },
      });
    });

    if (type === "view") {
      Context.despatch({
        type: "OpenArticle",
        payload: { key },
      });
    }
  };

  return (
    <div data-aos={side} className="blog-preView">
      <div className="preImg" style={{ backgroundImage: "url(" + img }}></div>
      <div className="preInfo">
        <span>{title}</span>
        <p>{des} ...</p>
        <div className="preDetail">
          <span className="preDetail-view" title="View">
            {view}
          </span>
          <span className="preDetail-view" title="Modify Time">
            {modify}
          </span>
          <span
            className="preDetail-like"
            title="Like"
            onClick={() => more("like", key)}
          >
            {like}
          </span>
          <span className="readMore" onClick={() => more("view", key)}>
            Read more
          </span>
        </div>
      </div>
    </div>
  );
}

export default Blog;

window.addEventListener("DOMContentLoaded", () => {
  Aos.init();
});
