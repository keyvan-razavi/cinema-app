import React from "react";

const Seats = () => {
  const rowsOfRoom = 8;
  const columnsOfRoom = 10;
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  let tr = document.createElement("tr");
  let td = document.createElement("td");

  const createTable = () => {
    for (let row = 0; row < rowsOfRoom; row++) {
      tr = document.createElement("tr");
      for (let cell = 0; cell < columnsOfRoom; cell++) {
        td = document.createElement("td");
        tr.appendChild(td);
        td.innerHTML = row * 10 + cell + 1;
      }
      tbody.appendChild(tr);
    }
    table.appendChild(tbody);
  };
  createTable();

  console.log(table);

  return <>{table}</>;
};

export default Seats;
