function Article(props) {
  let { item, ManageAction } = props;

  /* Delete and edit Article */
  let manage = (action) => {
    ManageAction(action, item.key);
  };

  return (
    <div className="articleItem">
      <span className="dateArea">{item.modify}</span>

      <img src={item.img} alt={item.title} />
      <p>
        <span>{item.title}</span>
        {item.description}
      </p>
      <div className="infoArea">
        <span>View : {item.view}</span>
        <span>Like : {item.like}</span>

        <button className="edItem manBtns" onClick={() => manage("edit")}>
          Edit
        </button>
        <button className="delItem manBtns" onClick={() => manage("delete")}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Article;
