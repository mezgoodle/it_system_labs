import axios from "axios";
import { useEffect, useState } from "react";

import Error from "./components/Error";
import Schema from "./components/Schema";

function App() {
  const [data, setData] = useState([]);
  const [schema, setSchema] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchema();
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  const fetchSchema = () => {
    axios
      .get(
        "https://data.gov.ua/dataset/5c6c156f-21ee-42cd-8da3-dcde6828be97/resource/bb0c13f5-3a1e-4976-864d-6a534e6a4284/view/acd77f90-7a39-43a3-b94d-3ed058fab4b0"
      )
      .then((response) => {
        setSchema(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        setIsLoading(false);
      });
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <Error error_message={error.message} />;
  }

  return (
    <>
      <div className="h1 text-center">Open Data project</div>
      <Schema data={schema} />
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
