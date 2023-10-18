import React from "react";

const Schema = ({ data }) => {
  const properties = data.properties;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Key</th>
          <th scope="col">Title</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(properties).map(([key, value]) => (
          <tr key={key}>
            <td>{key}</td>
            <td>{value.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Schema;
