import { useEffect, useRef } from "react";

function MainNav() {
  const navEffect = useRef(null);

  useEffect(() => {
    navEffect.current.addEventListener("click", toggleNav);
  }, []);

  return (
    <nav className="navigation" ref={navEffect}>
      <span className="btnBurg burger"></span>
      <div className="navLine">
        <a className="nav-item" href="#myHeader" data-con="&nbsp;Home">
          &nbsp;Home
        </a>
        <a className="nav-item" href="#myBlog" data-con="&nbsp;Article">
          &nbsp;Article
        </a>
        <a className="nav-item" href="#myAbout" data-con="&nbsp;About">
          &nbsp;About
        </a>
        <a className="nav-item" href="#myWork" data-con="&nbsp;Work">
          &nbsp;Work
        </a>
        <a className="nav-item" href="#myFooter" data-con="&nbsp;Social">
          &nbsp;Social
        </a>
      </div>
    </nav>
  );
}

export default MainNav;

/* Nav Effect */
function toggleNav() {
  let burger = document.querySelector(".btnBurg");
  let navLine = document.querySelector(".navLine");
  let navItem = document.querySelectorAll("a.nav-item");

  burger.classList.toggle("navOpen");
  burger.classList.toggle("burger");
  navLine.classList.toggle("activeLine");
  navItem.forEach((item) => {
    item.classList.toggle("navItem");
  });
}
