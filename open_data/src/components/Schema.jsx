import React from "react";

const Schema = ({ properties }) => {
  return (
    <>
      <h2 className="text-center">Schema</h2>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Key</th>
            <th scope="col">Title</th>
            <th scope="col">Type</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(properties).map(([key, value]) => (
            <tr key={key}>
              <td>{key}</td>
              <td>{value.title}</td>
              <td>{value.type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Schema;
