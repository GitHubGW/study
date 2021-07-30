import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Message from "Components/Message";
import Poster from "Components/Poster";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 25px;
`;

const SearchPresenter = ({
  movieResult,
  tvResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm,
}) => {
  // console.log(movieResult, tvResult, searchTerm, error, loading, handleSubmit, updateTerm);

  return (
    <Container>
      <Helmet>
        <title>Netflix - Search</title>
      </Helmet>

      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Movies or TV"
          value={searchTerm}
          onChange={updateTerm}
        ></Input>
      </Form>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title="Movies Result">
              {movieResult.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  rating={movie.vote_average}
                  year={
                    movie.release_date && movie.release_date.substring(0, 4)
                  }
                  isMovie={true}
                ></Poster>
              ))}
            </Section>
          )}
          {tvResult && tvResult.length > 0 && (
            <Section title="TV Result">
              {tvResult.map((tv) => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  imageUrl={tv.poster_path}
                  title={tv.name}
                  rating={tv.vote_average}
                  year={tv.first_air_date && tv.first_air_date.substring(0, 4)}
                  isMovie={false}
                ></Poster>
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message text={error}></Message>}
      {movieResult &&
        tvResult &&
        movieResult.length === 0 &&
        tvResult.length === 0 && <Message text="Nothing Found"></Message>}
    </Container>
  );
};

SearchPresenter.propTypes = {
  movieResult: PropTypes.array,
  tvResult: PropTypes.array,
  error: PropTypes.string,
  searchTerm: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired,
};

export default SearchPresenter;
