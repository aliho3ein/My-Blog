function cmsReducer(state, despatch) {
  let { type } = despatch;
  let { newItem, key } = despatch.payload;
  switch (type) {
    case "addItem":
      return { ...state, article: [...state.article, newItem] };
    case "delete-Item":
      let newState = state.article.filter((item) => item.key !== key);
      return { ...state, article: newState };
    case "initData":
      return { ...state, article: newItem };
    case "editItem":
      let editItem = state.article.filter((item) => item.key !== key);
      let updateArticle = [...editItem, newItem];
      return { ...state, article: updateArticle.sort(compare) };
    default:
      return { ...state, article: newItem };
  }
}

export default cmsReducer;

function compare(a, b) {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
}
