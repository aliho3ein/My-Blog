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
          voluptatem sint error est vel voluptas Eligendi.
        </p>
      </div>
      <div className="footerMap">
        <span>copyright 2022 &copy; aliho3ei</span>
      </div>
      <div className="footerContact">
        <a
          href="https://github.com/aliho3ein"
          rel="noopener"
          target="_blank"
          title="Github"
          class="fa-brands fa-square-github"
        ></a>
        <a
          href="https://de.linkedin.com/"
          target="_blank"
          title="Linkedin"
          class="fa-brands fa-linkedin"
        ></a>
        <a
          href="https://twitter.com/?lang=de"
          target="_blank"
          title="Twitter"
          class="fa-brands fa-square-twitter"
        ></a>
        <a
          href="https://www.instagram.com/aliho3.ein/?hl=de"
          target="_blank"
          title="Instagram"
          class="fa-brands fa-instagram"
        ></a>
      </div>
    </footer>
  );
}

export default FooterArea;
