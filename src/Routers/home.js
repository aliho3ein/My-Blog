import { useReducer } from "react";

/* Reducer */
import BlogRed from "../Reducer/BlogReducer";

/* Context */
import BlogContext from "./../Context/BlogContext";

/* Styles */
import "./../style/main.css";

/* Components */
import MainHeader from "./../Component/Header";
import MainArea from "./../Component/MainArea";
import FooterArea from "./../Component/Footer";
import AboutArea from "./../Component/About";
import SingleItem from "../Component/singleItem";
import MyWork from "../Component/MyWork";

function Home() {
  const [state, despatch] = useReducer(BlogRed, {
    article: [],
    thisItem: "",
  });

  return (
    <>
      <MainHeader />
      <BlogContext.Provider value={{ state, despatch }}>
        <main id="myBlog">
          {state.thisItem === "" ? <MainArea /> : <SingleItem />}
          <AboutArea />
          <MyWork />
        </main>
      </BlogContext.Provider>
      <FooterArea />
    </>
  );
}

export default Home;
