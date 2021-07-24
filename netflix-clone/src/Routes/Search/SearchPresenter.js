import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div``;

const Form = styled.form``;

const Input = styled.input`
  border: none;
  outline: none;
  font-size: 25px;
`;

const SearchPresenter = ({ movieResult, tvResult, searchTerm, error, loading, handleSubmit, updateTerm }) => {
  console.log(movieResult, tvResult, searchTerm, error, loading, handleSubmit, updateTerm);

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Search Movies or TV" value={searchTerm} onChange={updateTerm}></Input>
      </Form>
      {loading ? (
        <Loader></Loader>
      ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title="Movies Result">
              {movieResult.map((movie) => (
                <span key={movie.id}>{movie.title}</span>
              ))}
            </Section>
          )}
          {tvResult && tvResult.length > 0 && (
            <Section title="TV Result">
              {tvResult.map((tv) => (
                <span key={tv.id}>{tv.name}</span>
              ))}
            </Section>
          )}
        </>
      )}
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
