function FooterArea() {
  return (
    <footer id="myFooter">
      <div className="footerAbout">
        <span>über mich</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          commodi cumque corporis aperiam rerum accusantium non sequi natus,
          voluptatibus earum hic dolore repellendus fugit temporibus repudiandae
          excepturi facilis? Qui, ipsum nulla inventore aspernatur nisi cumque
          excepturi facilis? Qui, ipsum nulla inventore aspernatur nisi cumque
          voluptatem sint error est vel voluptas Eligendi. excepturi facilis?
          Qui, ipsum nulla inventore aspernatur nisi cumque
        </p>
      </div>
      <div className="footerMap"></div>
      <span className="copyArea">copyright 2022 &copy; aliho3ei</span>
      <div className="footerContact">
        <a
          href="https://github.com/aliho3ein"
          rel="noreferrer"
          target="_blank"
          title="Github"
          className="fa-brands fa-square-github"
        ></a>
        <a
          href="https://de.linkedin.com/"
          target="_blank"
          title="Linkedin"
          className="fa-brands fa-linkedin"
        ></a>
        <a
          href="https://twitter.com/?lang=de"
          target="_blank"
          title="Twitter"
          className="fa-brands fa-square-twitter"
        ></a>
        <a
          href="https://www.instagram.com/aliho3.ein/?hl=de"
          target="_blank"
          title="Instagram"
          className="fa-brands fa-instagram"
        ></a>
      </div>
    </footer>
  );
}

export default FooterArea;
