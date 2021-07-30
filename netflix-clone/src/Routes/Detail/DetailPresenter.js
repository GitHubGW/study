import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Loader from "Components/Loader";
import Message from "Components/Message";
import noPoster from "../../assets/noPoster.png";

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
`;

const BlurImage = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  filter: blur(3px);
  opacity: 0.5;
`;

const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const Cover = styled.div`
  background: url(${(props) => props.imageUrl}) no-repeat center center;
  background-size: cover;
  width: 20%;
  height: 80%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div``;

const Item = styled.span``;

const Divider = styled.span``;

const Overview = styled.p`
  margin-top: 30px;
  line-height: 1.5;
`;

const DetailPresenter = ({ result, error, loading }) => {
  console.log(result, error, loading);

  return loading ? (
    <Loader></Loader>
  ) : (
    <Container>
      <Helmet>
        <title>Netflix - {result.title ? result.title : result.name}</title>
      </Helmet>
      <BlurImage
        imageUrl={
          result.backdrop_path
            ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
            : `https://image.tmdb.org/t/p/original${result.poster_path}`
        }
      ></BlurImage>
      <Content>
        <Cover
          imageUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : `https://image.tmdb.org/t/p/original${result.backdrop_path}`
          }
        ></Cover>
        <Data>
          <Title>{result.title ? result.title : result.name}</Title>
          <ItemContainer>
            <Item>
              {result.release_date
                ? result.release_date.substring(0, 4)
                : result.first_air_date.substring(0, 4)}
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.runtime ? result.runtime : result.episode_run_time}분
            </Item>
            <Divider>▪</Divider>
            <Item>
              {result.genres &&
                result.genres.map((genre, index) =>
                  result.genres.length - 1 === index
                    ? genre.name
                    : `${genre.name} / `
                )}
            </Item>
            <Divider>▪</Divider>
            <Item>⭐{result.vote_average && result.vote_average} / 10</Item>
          </ItemContainer>
          <Overview>{result.overview && result.overview}</Overview>
        </Data>
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
