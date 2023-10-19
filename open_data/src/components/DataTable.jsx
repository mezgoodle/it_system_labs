import React from "react";

const DataTable = ({ data }) => {
  return (
    <>
      <h3 className="text-center">First ten objects</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} scope="col">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.ID}>
              <td>{item.ID}</td>
              <td>{item.OVD}</td>
              <td>{item.D_SERIES}</td>
              <td>{item.D_NUMBER}</td>
              <td>{item.D_TYPE}</td>
              <td>{item.D_STATUS}</td>
              <td>{item.THEFT_DATA}</td>
              <td>{item.INSERT_DATE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
