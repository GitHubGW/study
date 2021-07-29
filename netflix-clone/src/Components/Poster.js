import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";
import noPoster from "../assets/noPoster.png";

const Container = styled.div``;

const PosterContainer = styled.div``;

const Image = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  height: 200px;
`;

const Rating = styled.div``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <PosterContainer>
          <Image imageUrl={imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : noPoster}></Image>
          <Rating rating={rating}>⭐{rating}</Rating>
          <Title>{title.length > 15 ? `${title.substring(0, 15)}...` : title}</Title>
          <Year>{year}</Year>
        </PosterContainer>
      </Container>
    </Link>
  );
};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool,
};

export default Poster;
