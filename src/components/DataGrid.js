import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import '../styles/dataGrid.css'



//function to style each cell of the record
const common = (cellValues) => {
    return (
        <div
            style={{
                color: "black",
                fontSize: '.8rem',
                width: '100%',
                textAlign: "center"
            }}
        >
            {cellValues.value}
        </div>
    );
}


//column definitions starts
const columns = [
    {
        field: 'id',
        headerName: 'Country',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        flex: 4
    },
    {
        field: 'tconfirmed',
        headerName: 'Total Confirmed',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        sortable: false,
        flex: 1
    },
    {
        field: 'trecovered',
        headerName: 'Total Recovered',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        sortable: false,
        flex: 1
    },
    {
        field: 'tdeaths',
        headerName: 'Total Deaths',
        type: 'number',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        sortable: false,
        flex: 1
    },
    {
        field: 'nconfirmed',
        headerName: 'New Confirmed',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        flex: 1
    },
    {
        field: 'newrecovered',
        headerName: 'New Recovered',
        type: 'number',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        sortable: false,
        flex: 1
    },
    {
        field: 'newdeaths',
        headerName: 'New Deaths',
        type: 'number',
        headerAlign: 'center',
        headerClassName: 'super-app-theme--header',
        renderCell: common,
        sortable: false,
        flex: 1
    }
];

//column definitions ends


export default function DataTable() {
    const covidData = useSelector(state => state.covidData)
    const isDataLoaded = useSelector(state => state.isDataLoaded)
    const rows = [

    ];

    isDataLoaded && covidData.Data.Countries.forEach(function (eachData) {
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
        <div style={{ height: 400, width: '100%' }}>
            <div style={{ display: 'flex', height: '100%', justifyContent: 'center', alignItems: 'center' }}>

                <DataGrid
                    rowHeight={30}
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
                            backgroundColor: 'yellow',
                            color:'blue',
                            fontSize:'.9rem',
                            
                            wordWrap:'break-word'
                        },
                    }}
                />

            </div>
        </div>
    );
}