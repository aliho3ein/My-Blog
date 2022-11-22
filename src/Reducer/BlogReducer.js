function BlogRed(state, despatch) {
  let { newItem, key } = despatch.payload;
  switch (despatch.type) {
    case "OpenArticle":
      return { ...state, thisItem: key };
    case "CloseArticle":
      return { ...state, thisItem: "" };
    case "changeArticle":
      let chArticle = state.article.filter((item) => item.key !== key);
      let ordItem = [...chArticle, newItem];
      return { ...state, article: ordItem.sort(compare) };
    default:
      /* get Items */
      return { ...state, article: newItem };
  }
}
export default BlogRed;

/*================= Sort the List =======================*/
function compare(a, b) {
  if (a.key < b.key) {
    return -1;
  }
  if (a.key > b.key) {
    return 1;
  }
  return 0;
}
