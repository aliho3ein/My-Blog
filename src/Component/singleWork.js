export default function SingleWork(props) {
  let { title, img, link, view } = props.value;

  return (
    <div className="work" data-aos="flip-down">
      <div
        className="work-img"
        style={{ backgroundImage: `url(${img})` }}
      ></div>
      <a href={link} target="_blank" rel="noreferrer" className="work-title">
        {title}
      </a>
      <span className="work-view">{view}</span>
    </div>
  );
}
