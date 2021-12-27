import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
  { field: 'id', headerName: 'Country', minWidth: 150 },
  { field: 'firstName', headerName: 'Total Confirmed', minWidth: 150 },
  { field: 'lastName', headerName: 'Total Recovered', minWidth: 150 },
  {
    field: 'age',
    headerName: 'Total Deaths',
    type: 'number',
    minWidth: 150
  },
  {
    field: 'fullName',
    headerName: 'New Confirmed',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    minWidth: 150,
    valueGetter: (params) =>
      `${params.getValue(params.id, 'firstName') || ''} ${
        params.getValue(params.id, 'lastName') || ''
      }`,
  },
  {
    field: 'newrecovered',
    headerName: 'New Recovered',
    type: 'number',
    minWidth: 150,
  },
  {
    field: 'newdeaths',
    headerName: 'New Deaths',
    type: 'number',
    minWidth: 150,
  }
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        
      />
    </div>
  );
}