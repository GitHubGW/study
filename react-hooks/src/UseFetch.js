import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://aws.random.cat/meow";

const useFetch = () => {
  // console.log("useFetch");

  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const callUrl = async () => {
    // console.log("callUrl");

    try {
      const {
        data: { file },
      } = await axios.get(API_URL);

      // console.log(file);
      setFile(file);
    } catch (error) {
      console.log("Error", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    callUrl();
  }, []);

  return { file, error, loading };
};

function UseFetch() {
  const { file, error, loading } = useFetch();
  console.log("file", file);
  console.log("error", error);
  console.log("loading", loading);

  return (
    <div>
      <h1>useFetch</h1>
      {/* {loading && <div>Loading...</div>} */}
      {/* {!loading && error && <div>Error: {error}</div>} */}
      {/* {!loading && file && <img src={file} alt="cat" width="200" />} */}

      {loading ? <div>Loading...</div> : ""}
      {!loading && error ? <div>Error: {error}</div> : <div>No Error</div>}
      {!loading && file ? <img src={file} alt="cat" width="200" /> : <div>No File</div>}
    </div>
  );
}

export default UseFetch;
