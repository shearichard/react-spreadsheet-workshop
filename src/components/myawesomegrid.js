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
                  onChange={onFieldChange(row.id, 'age')}
                />
            );
        }
      }, 
      {
        title: () => 'Position',
        value: (row, { focus }) => {
            return (
                <Select
                  selectedId={row.positionId}
                  isOpen={focus}
                  items={somePositions}
                  onChange={onFieldChange(row.id, 'positionId')}
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
    rowData[rowId][field] = value
    console.log("oFC firing START LOGGING")
    console.log(rowId)
    console.log(field)
    console.log(value)
    console.log(rowData)
    console.log(rows)
    console.log([].concat(rowData))
    console.log("oFC firing FINISH LOGGING")
    setRows([].concat(rowData))
  }
  //
  //
  return (
    <Grid
      columns={columns}
      rows={rows}
      getRowKey={row => row.id}
      focusOnSingleClick={true}
      isColumnsResizable={true}
      isScrollable={false}
    />
  )
}

export default MyAwesomeGrid
