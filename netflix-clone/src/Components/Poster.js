import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const PosterContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.div``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({ id, imageUrl, title, rating, year, isMovie }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
      <Container>
        <PosterContainer>
          <Image imageUrl={imageUrl}></Image>
          <Rating rating={rating}>⭐{rating}</Rating>
          <Title>{title}</Title>
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
