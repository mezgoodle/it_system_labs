import { useEffect, useState } from "react";

import Error from "./components/Error";
import Schema from "./components/Schema";
import DataTable from "./components/DataTable";

import schema_data from "./data/schema.json";
import json_data from "./data/data.json";

function App() {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchSchema();
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    setData(json_data);
    setIsLoading(false);
  };

  const fetchSchema = () => {
    setIsLoading(true);
    setProperties(schema_data.items.properties);
    setIsLoading(false);
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
      <Schema properties={properties} />
      <DataTable data={data.slice(0, 10)} />
    </>
  );
}

export default App;
