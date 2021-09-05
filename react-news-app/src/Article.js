import PropTypes from "prop-types";

const Article = ({ author, title, description, urlToImage, publishedAt }) => {
  return (
    <div style={{ marginTop: "150px" }}>
      <img style={{ width: "600px" }} src={urlToImage && urlToImage} alt={title && title}></img>
      <h1>{title && title}</h1>
      <h3>{description && description}</h3>
      <h3>
        {author && author} / {publishedAt && publishedAt}
      </h3>
    </div>
  );
};

Article.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  urlToImage: PropTypes.string,
  publishedAt: PropTypes.string.isRequired,
};

export default Article;
