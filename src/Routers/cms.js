import "./../style/cms/main.css";
import { useReducer, useState } from "react";
/* Reducer */
import cmsReducer from "./../Reducer/CmsReducer";
/* Context */
import CMSContext from "./../Context/CmsContext";
/* Component */
import List from "../Component/cmsComponent/listArticle";
/* Api */
import instance from "../Api/BlogApi";
/* Variable */
let View, Like, Key, Modify;

function CMS() {
  /* Reducer */
  const [state, despatch] = useReducer(cmsReducer, {
    article: [],
    showArticle: true,
  });

  /* Create Item */
  const [EditPost, setType] = useState();
  let postOpen = () => {
    setType(false);
    toggleArea();
  };

  /* Delete and Edit Item */
  let ManageAction = (action, key) => {
    switch (action) {
      case "edit":
        setType(true);
        toggleArea();
        getThisData(key);
        break;
      default:
        /* Delete */
        instance
          .delete(`/articleList/${key}.json`)
          .then((response) => {
            despatch({ type: "delete-Item", payload: { key } });
          })
          .catch(() => console.warn("Error on Delete Item"));
        break;
    }
  };

  /* Create  and Edit  Article */
  let postItem = (type) => {
    let newItem = getDataFromManager(type);
    if (type === "edit") {
      instance
        .put(`/articleList/${Key}.json`, newItem)
        .then((e) => {
          despatch({ type: "editItem", payload: { newItem, key: Key } });
          toggleArea();
          console.log("Data is Successfully Edited");
        })
        .catch((e) => console.log("error by editing"));
    } else if (type === "init") {
      instance
        .post("/articleList.json", newItem)
        .then((response) => {
          let name = response.data.name;
          newItem = { ...newItem, key: name };
          despatch({ type: "addItem", payload: { newItem } });
          toggleArea();
          console.log("Data is Successfully posted");
        })
        .catch((e) => console.warn("Error by Post Article"));
    }
  };

  return (
    <>
      <div id="manageNav">
        <button className="article manBtn none" onClick={postOpen}>
          New Article
        </button>
        <button className="user manBtn none">add User</button>
        <button className="login manBtn" onClick={userLogIn}>
          LogIn
        </button>
      </div>
      <main id="ManageContainer">
        <div className="manageArea none">
          <div className="popArea">
            <i className="fa fa-xmark" onClick={toggleArea}></i>
            <label htmlFor="title">Title</label>
            <input id="title" className="cmsInput title" type="text" />
            <label htmlFor="des">Description</label>
            <textarea
              id="des"
              name=""
              className="cmsInput description"
              cols="30"
              rows="10"
            ></textarea>
            <label htmlFor="cmsImg">Image Link</label>
            <input id="cmsImg" className="cmsInput img" type="text" />
            {!EditPost ? (
              <button
                className="cmsBtn"
                id="articlePost"
                onClick={() => postItem("init")}
              >
                Post
              </button>
            ) : (
              <button
                className="cmsBtn articleEdit"
                onClick={() => postItem("edit")}
              >
                Edit
              </button>
            )}
          </div>
        </div>
        <CMSContext.Provider
          value={{ state, despatch, ManageAction: ManageAction }}
        >
          <List />
        </CMSContext.Provider>
      </main>
    </>
  );
}

export default CMS;

/* Login User */
function userLogIn() {
  let navBtn = document.querySelectorAll(".manBtn");
  navBtn.forEach((element) => {
    element.classList.toggle("none");
  });
}

/* send/edit area open/close */
function toggleArea() {
  document.getElementById("title").value = "";
  document.getElementById("des").value = "";
  document.getElementById("cmsImg").value = "";
  document.querySelector(".manageArea").classList.toggle("none");
}

/* Get data from DB for Edit Article */
function getThisData(key) {
  instance
    .get(`/articleList/${key}.json`)
    .then((response) => {
      let { title, description, img, like, view, modify } = response.data;
      document.getElementById("title").value = title;
      document.getElementById("des").value = description;
      document.getElementById("cmsImg").value = img;
      Like = like;
      View = view;
      Key = key;
      Modify = modify;
    })
    .catch((er) => console.warn("Error by getting Data for edit"));
}

/* Get Data From Form */
function getDataFromManager(type) {
  if (type === "init") {
    View = 0;
    Like = 0;
    Modify = new Date().toDateString();
  }

  let newItem = {
    title: document.getElementById("title").value,
    description: document.getElementById("des").value,
    img: document.getElementById("cmsImg").value,
    view: View,
    like: Like,
    modify: Modify,
  };

  return newItem;
}
