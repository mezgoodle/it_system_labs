import React from "react";

const DataTable = ({ data }) => {
  return (
    <>
      <h2 className="text-center">First ten objects</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">OVD</th>
            <th scope="col">D_SERIES</th>
            <th scope="col">D_NUMBER</th>
            <th scope="col">D_TYPE</th>
            <th scope="col">D_STATUS</th>
            <th scope="col">THEFT_DATA</th>
            <th scope="col">INSERT_DATE</th>
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
