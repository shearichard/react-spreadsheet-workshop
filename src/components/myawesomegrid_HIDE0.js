import React from 'react'
import { useState } from 'react';
import { Input, Select, Grid } from 'react-spreadsheet-grid'
//import { initColumns, rowData } from '../DataInitializationUtilities'
import { rowData, somePositions } from '../DataInitializationUtilities'

const MyAwesomeGrid = () => {
  /////////////////////////////////////////////////////////////
  const initColumns = () => {
      return [
      {
        title: () => 'Name',
        value: (row, { focus }) => {
            return (
                <Input
                  value={row.name}
                  focus={focus}
                  onChange={onFieldChange(row.id, 'name')}
                />
            );
        }
      }, 
      {
        title: () => 'Age',
        value: (row, { focus }) => {
            return (
                <Input
                  value={row.age}
                  focus={focus}
                />
            );
        }
      }, 
      {
        title: () => 'Position',
        value: (row, { focus }) => {
            return (
                <Select
                  value={row.positionId}
                  isOpen={focus}
                  items={somePositions}
                />
            );
        }
      }
    ]
  }
  /////////////////////////////////////////////////////////////
  const [rows, setRows] = useState(rowData)
  // eslint-disable-next-line
  const [columns, setColumns] = useState(initColumns()) 
  //
  const onFieldChange = (rowId, field) => (value) => {
    console.log("oFC firing START LOGGING")
    console.log(rowId)
    console.log(field)
    console.log(value)
    console.log(rowData)
    console.log("oFC firing FINISH LOGGING")
    rowData[rowId][field] = value
    setRows([].concat(rowData))
  }
  //
  //
  return (
    <Grid
      columns={columns}
      rows={rows}
      getRowKey={row => row.id}
      focusOnSingleClick={false}
    />
  )
}

export default MyAwesomeGrid
