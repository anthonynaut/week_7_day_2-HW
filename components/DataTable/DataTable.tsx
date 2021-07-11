import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    // {
    //   field: 'fullName',
    //   headerName: 'Full name',
    //   description: 'This column has a value getter and is not sortable.',
    //   sortable: false,
    //   width: 160,
    //   valueGetter: (params: GridValueGetterParams) =>
    //     `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    // },
  ];

  const rows = [
    { id: 1, lastName: 'McLaren', firstName: 'Malcolm G.', age: 64 },
    { id: 2, lastName: 'Billig', firstName: 'Jeremy D.', age:  38},
    { id: 3, lastName: 'Sobti', firstName: 'Lakshya ', age:  46},
    { id: 4, lastName: 'Brangaccio', firstName: 'Donna M.', age:  undefined},
    { id: 5, lastName: 'Khan', firstName: 'Gul B.', age:  undefined},
    { id: 6, lastName: 'McLaren', firstName: 'David W.', age:  undefined},
    { id: 7, lastName: 'Lucke', firstName: 'Annette', age:  undefined},
    { id: 8, lastName: 'McCarthy', firstName: 'William J.', age:  undefined},
    { id: 9, lastName: 'Moss-Heitlager', firstName: 'Denisa', age: undefined},
  ];


  export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '100%' }}>
          <h2>Cars In Inventory</h2>
          <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
        </div>
      );
}
