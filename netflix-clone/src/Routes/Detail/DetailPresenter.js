import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import noPoster from "../../assets/noPoster.png";

const Container = styled.div``;

const BlurImage = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  height: 100vh;
`;

const Content = styled.div``;

const Cover = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  height: 200px;
`;

const Data = styled.div`
  background: url(${(props) => props.poster_path});
`;

const Item = styled.div``;

const DetailPresenter = ({ result, error, loading }) => {
  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <BlurImage imageUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.backdrop_path}` : noPoster}></BlurImage>
      <Content>
        <Cover imageUrl={result.backdrop_path ? `https://image.tmdb.org/t/p/original${result.poster_path}` : noPoster}></Cover>
        <Data></Data>
      </Content>
    </Container>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default DetailPresenter;
