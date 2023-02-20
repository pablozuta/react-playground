import React from 'react'
import fakeData from '../datas/students.json'
import { useTable } from 'react-table'
import './react-table.css'

function ReactTable() {
    // almacenamos los datos de fakeData en la variable data
    const data = React.useMemo(() => fakeData, []);
    // creamos un array de objetos 
    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: "id",
            },
            {
                Header: "Nombre",
                accessor: "first_name",
            },
            {
                Header: "Apellido",
                accessor: "last_name",
            },
            {
                Header: "Email",
                accessor: "email",
            },
            {
                Header: "Genero",
                accessor: "gender",
            },
            {
                Header: "Universidad",
                accessor: "university",
            },
        ],
        []
    );

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        useTable({ columns, data });

    return (
        <div className="App">
            <center><h2>REACT TABLE</h2></center>

            <div className="container">
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th {...column.getHeaderProps()}>
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map((row) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td {...cell.getCellProps()}> {cell.render("Cell")} </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}



export default ReactTable