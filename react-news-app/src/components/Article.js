import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Article = ({ author, title, description, urlToImage, publishedAt }) => {
  return (
    <>
      <Link
        to={{
          pathname: `/news-detail/${title}`,
          state: { author, title, description, urlToImage, publishedAt },
        }}
      >
        <div style={{ marginTop: "100px" }}>
          <img style={{ width: "400px" }} src={urlToImage && urlToImage} alt={title && title}></img>
          <h3>{title && title.slice(0, 43) + ".."}</h3>
        </div>
      </Link>
    </>
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
