import SingleWork from "./singleWork";

export default function MyWork() {
  let works = [
    {
      id: 1,
      title: "Piano",
      img: "https://cdn-resources.ableton.com/resources/filer_thumbnails/public/2012/12/11/grand-piano.png__600x600_q85_crop_subsampling-2_upscale.jpg",
      link: "https://aliho3ein.github.io/piano-rc/",
      view: 10,
    },
    {
      id: 2,
      title: "Typo Graphic",
      img: "https://o.quizlet.com/Vx-hj5fkzNKqNrS5aQWL1A_b.jpg",
      link: "https://aliho3ein.github.io/taypography-rc/",
      view: 25,
    },
    {
      id: 3,
      title: "Snake Game",
      img: "https://store-images.s-microsoft.com/image/apps.55246.14034569832530521.d4b41593-da05-4dc0-bf68-8d92c037643b.f9ebb996-4f9e-4d72-8e44-664287b94db9",
      link: "https://aliho3ein.github.io/snake-rc/",
      view: 14,
    },
    {
      id: 4,
      title: "3d Card",
      img: "https://www.creativefabrica.com/wp-content/uploads/2020/11/13/Playing-Cards-Mockups-v4-14-Views-Graphics-6595679-2-580x387.jpg",
      link: "https://aliho3ein.github.io/3D-Cart/",
      view: 12,
    },
    {
      id: 5,
      title: "3d Cube",
      img: "https://media.istockphoto.com/id/513740254/vector/black-3d-cube.jpg?s=612x612&w=0&k=20&c=5bBsonA8P2jSva_VumFC_yaBuY87n6jrBInzJ6TpN54=",
      link: "https://aliho3ein.github.io/3D-Cube/",
      view: 32,
    },
    {
      id: 6,
      title: "Timer",
      img: "https://www.udacity.com/blog/wp-content/uploads/2021/09/Timer_Blog-768x513.jpeg",
      link: "https://aliho3ein.github.io/timer-rc/",
      view: 18,
    },
    {
      id: 7,
      title: "ToDo List",
      img: "https://media.istockphoto.com/id/1285308242/de/foto/so-erstellen-sie-listentext-auf-dem-notizblock.jpg?s=612x612&w=0&k=20&c=jhJ_4oBvuPITzhpwlfRSaW4pS3ZUQy_bu1sF4Snm0Go=",
      link: "https://main--aufgaben-list.netlify.app/",
      view: 158,
    },
    {
      id: 8,
      title: "Pizzaria",
      img: "https://sunika.co.za/images/South_Africas_top_selling_take-away_foods_in_2021.jpg",
      link: "https://pizzaria-de.netlify.app/",
      view: 308,
    },
  ];

  let allWork = works.map((item, index) => {
    return <SingleWork key={index} value={item} />;
  });

  return <div id="myWork">{allWork}</div>;
}
