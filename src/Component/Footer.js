function FooterArea() {
  return (
    <footer id="myFooter">
      <div className="footerAbout">
        <span>über mich</span>
        <p>
          I am a hard working, honest individual. I am a good timekeeper, always
          willing to learn new skills. I am friendly, helpful and polite, have a
          good sense of humour. I am able to work independently in busy
          environments and also within a team setting. I am outgoing and
          tactful, and able to listen effectively when solving problems. I am a
          punctual and motivated individual who is able to work in a busy
          environment and produce high standards of work. I am an excellent team
          worker and am able to take instructions from all levels and build up
          good working relationships with all colleagues. I am flexible,
          reliable and possess excellent time keeping skills.
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
