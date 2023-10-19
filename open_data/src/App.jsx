import { useEffect, useState } from "react";

import Error from "./components/Error";
import Schema from "./components/Schema";
import DataTable from "./components/DataTable";
import StatusBarChart from "./components/StatusBarChart";
import TypeBarChart from "./components/TypeBarChart";
import SeriesBarChart from "./components/SeriesBarChart";
import OVDBarChart from "./components/OVDBarChart";
import DateLineChart from "./components/DateLineChart";

import schema_data from "./data/schema.json";
import json_data from "./data/data.json";

function App() {
  const [data, setData] = useState([]);
  const [properties, setProperties] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [range, setRange] = useState(10);

  useEffect(() => {
    fetchSchema();
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    if (json_data.length === 0) {
      setError({ message: "No data" });
      return;
    }
    setData(json_data);
    setIsLoading(false);
  };

  const fetchSchema = () => {
    setIsLoading(true);
    if (schema_data.items.properties.length === 0) {
      setError({ message: "No schema" });
      return;
    }
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
      <div className="h2 text-center">
        Інформація про викрадені/втрачені/недійсні паспорти громадянина України
        для виїзду за кордон
      </div>
      <Schema properties={properties} />
      <hr />
      <p className="h3">Length of data: {data.length}</p>
      <hr />
      <DataTable data={data.slice(0, 10)} />
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center h4">Статус документу</p>
            <StatusBarChart data={data} />
          </div>
          <div className="col">
            <p className="text-center h4">Тип документу</p>
            <TypeBarChart data={data} />
          </div>
          <div className="col">
            <p className="text-center h4">Серія документу</p>
            <SeriesBarChart data={data} />
          </div>
          <div className="col">
            <p className="text-center h4">Назва підрозділу</p>
            <OVDBarChart data={data} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <p className="text-center h4">
              К-сть днів між датою заяви та датою внесення
            </p>
            <DateLineChart data={data.slice(0, range)} />
          </div>
          <div className="col">
            <p className="text-center h4">
              Введіть максимальну кількість данних
            </p>
            <input
              type="text"
              className="form-control"
              placeholder="Enter range"
              value={range}
              onChange={(e) => setRange(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
