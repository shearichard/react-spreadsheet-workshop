import React from 'react'
import { useState } from 'react';
import { Grid } from 'react-spreadsheet-grid'
import { initColumns, rowData } from '../DataInitializationUtilities'

const MyAwesomeGrid = () => {
  // eslint-disable-next-line
  const [columns, setColumns] = useState(initColumns()) 

  return (
    <Grid
      columns={columns}
      rows={rowData}
      getRowKey={row => row.id}
    />
  )
}

export default MyAwesomeGrid
