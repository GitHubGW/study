const NewsDetail = ({ location, history }) => {
  if (location.state) {
    const {
      state: { author, description, publishedAt, title, urlToImage },
    } = location;

    return (
      <>
        <h1>NewsDetail</h1>
        <img style={{ width: "400px" }} src={urlToImage && urlToImage} alt={title && title}></img>
        <h3>{title && title.slice(0, 43) + ".."}</h3>
        <h4>{description && description.slice(0, 100) + ".."}</h4>
        <h4>{author && author}</h4>
        <h4>{publishedAt && publishedAt}</h4>
      </>
    );
  } else if (location.state === undefined) {
    history.push("/");
    return null;
  }
};

export default NewsDetail;
