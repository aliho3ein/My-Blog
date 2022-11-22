import { useContext } from "react";
import CMSContext from "../../Context/CmsContext";

function SendData() {
  const context = useContext(CMSContext);

  return context.show ? (
    <div className="manageArea">
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
      <button className="cmsBtn" id="articlePost">
        Post
      </button>
      {/* <button className="cmsBtn" id="articleEdit">
      Edit
    </button> */}
    </div>
  ) : null;
}

export default SendData;

function toggleArea() {
  document.querySelector(".manageArea").classList.toggle("none");
}
