import React from "react";
import Table from "react-bootstrap/Table";

function TableList({ data }) {
  return (
    <Table striped>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.title}</td>
              <td>{item.author}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableList;
