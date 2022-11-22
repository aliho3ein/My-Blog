function MainNav() {
  return (
    <nav className="navigation">
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
        <a className="nav-item" href="#myFooter" data-con="&nbsp;Social">
          &nbsp;Social
        </a>
      </div>
    </nav>
  );
}

export default MainNav;

window.addEventListener("DOMContentLoaded", () => {
  Navigation();
});

function Navigation() {
  let burger = document.querySelector(".btnBurg");
  let navLine = document.querySelector(".navLine");
  let navItem = document.querySelectorAll("a.nav-item");

  document.querySelector(".navigation").addEventListener("click", () => {
    burger.classList.toggle("navOpen");
    burger.classList.toggle("burger");
    navLine.classList.toggle("activeLine");
    navItem.forEach((item) => {
      item.classList.toggle("navItem");
    });
  });
}
