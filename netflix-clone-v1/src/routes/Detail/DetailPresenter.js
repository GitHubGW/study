import PropTypes from "prop-types";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Loading from "components/Loading";
import Error from "components/Error";

const Container = styled.div``;

const Data = styled.h1``;

const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <Loading></Loading>
  ) : (
    <HelmetProvider>
      <Helmet>
        <title>{result?.original_title ? result?.original_title : result?.name} | Netflix</title>
      </Helmet>
      <Container>
        <Data>제목: {result?.original_title ? result?.original_title : result?.name}</Data>
        <Data>개봉일: {result?.release_date ? result?.release_date?.substring(0, 7) : result?.first_air_date?.substring(0, 7)}</Data>
        <Data>평점: {result?.popularity ? Math.floor(result?.popularity) : Math.floor(result?.vote_average)}</Data>
        <Data>시간: {result?.runtime && result?.runtime}분</Data>
        <Data>
          {result.genres.map((genre) => (
            <span key={genre.id}>{genre.name}•</span>
          ))}
        </Data>
      </Container>
      {error && <Error error={error}></Error>}
    </HelmetProvider>
  );
};

DetailPresenter.propTypes = {
  isMovie: PropTypes.bool,
  isTV: PropTypes.bool,
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
