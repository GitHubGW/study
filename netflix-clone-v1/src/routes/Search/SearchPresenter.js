const SearchPresenter = ({ movieResult, tvResult, word, error, loading, handleSubmit }) => {
  console.log("SearchPresenter", movieResult, tvResult, word, error, loading);

  return (
    <div>
      <form>
        <input></input>
        <button onClick={handleSubmit}>Search</button>
      </form>
    </div>
  );
};

export default SearchPresenter;
