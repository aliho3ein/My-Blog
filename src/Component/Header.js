import React, { useEffect } from "react";
/* anime.js Text Effect  */
import anime from "animejs/lib/anime.es.js";
/* Component Nav */
import MainNav from "./Nav";
/*  */
import { useRef } from "react";

function MainHeader() {
  const headerStart = useRef(null);

  useEffect(() => {
    headerStart.current.addEventListener(
      "click",
      textEffect(),
      bcImageEffect()
    );
  }, []);

  return (
    <header ref={headerStart} id="myHeader">
      <MainNav />
      <div id="headBackImage"></div>
      <div className="coverHead"></div>
      <h1 className="ml4">
        <span className="letters letters-1">Welcome</span>
        <span className="letters letters-2">To </span>
        <span className="letters letters-3">My Blog !</span>
      </h1>
    </header>
  );
}

export default MainHeader;

function textEffect() {
  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 800;
  ml4.durationOut = 600;
  ml4.delay = 500;

  anime
    .timeline({ loop: true })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4",
      opacity: 0,
      duration: 500,
      delay: 500,
    });
}

function bcImageEffect() {
  const img = document.getElementById("headBackImage");
  window.addEventListener("scroll", async (e) => {
    const top = await Math.floor(window.scrollY / 2); //
    img.style.transform = `translateY(${top}px)`;
  });
}
