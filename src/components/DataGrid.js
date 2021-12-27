import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import '../styles/dataGrid.css'

const common =(cellValues) => {
    return (
      <div
        style={{
          color: "blue",
          fontSize: 15,
          width: "100%",
          textAlign: "center"
        }}
      >
        {cellValues.value}
      </div>
    );
  }

const columns = [
    { field: 'id', headerName: 'Country', minWidth: 150, headerAlign: 'center',headerClassName: 'super-app-theme--header',
    renderCell: common },
    { field: 'tconfirmed', headerName: 'Total Confirmed', minWidth: 150, headerAlign: 'center', headerClassName: 'super-app-theme--header',
    renderCell: common},
    { field: 'trecovered', headerName: 'Total Recovered', minWidth: 150, headerAlign: 'center', headerClassName: 'super-app-theme--header',
    renderCell: common},
    {
        field: 'tdeaths',
        headerName: 'Total Deaths',
        type: 'number',
        minWidth: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common
    },
    {
        field: 'nconfirmed',
        headerName: 'New Confirmed',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        minWidth: 150, headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common
    },
    {
        field: 'newrecovered',
        headerName: 'New Recovered',
        type: 'number',
        minWidth: 180,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell:common
    },
    {
        field: 'newdeaths',
        headerName: 'New Deaths',
        type: 'number',
        minWidth: 150,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common
    }
];




export default function DataTable() {
    const covidData = useSelector(state => state.covidData)
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const rows = [

    ];
   
    isDataLoaded&& covidData.Data.Countries.forEach(function(eachData) {
        let row = {
            id: eachData.Country,
            tconfirmed: eachData.TotalConfirmed,
            trecovered: eachData.TotalRecovered,
            tdeaths: eachData.TotalDeaths,
            nconfirmed: eachData.NewConfirmed,
            newrecovered: eachData.NewRecovered,
            newdeaths: eachData.NewDeaths
        }
        rows.push(row);
    });

    return (
        <div style={{ height: 400, width: '100%', textAlign: 'center',margin:'auto' }}>
            <DataGrid
                rowHeight={60}
                rows={rows}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
                sx={{
                    boxShadow: 7,
                    border: 2,
                    borderColor: 'primary.light',
                    '& .MuiDataGrid-cell:hover': {
                        color: 'primary.main',
                   
                    },
                    '& .super-app-theme--header': {
                        backgroundColor: 'rgba(255, 7, 0, 0.55)',
                      },
                }}
            />
        </div>
    );
}