import React, { useState } from 'react'
import { Grid, Input, Select } from 'react-spreadsheet-grid'

const rows = [
    { id: 'user1', name: 'John Doe', positionId: 'position1' },
];
const somePositions = [
    {id: 'position1', name: 'Bus Driver'} , 
    {id: 'position2', name: 'Doctor'} , 
    {id: 'position3', name: 'Tax Inspector'} , 
    {id: 'position4', name: 'House Painter'}
];

const MyAwesomeGrid = () => {
  return (
    <Grid
      columns={[
        {
          title: () => 'Name',
          value: (row, { focus }) => {
              return (
                  <Input
                    value={row.name}
                    focus={focus}
                  />
              );
          }
        }, {
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
      ]}
      rows={rows}
      getRowKey={row => row.id}
    />
  )
}
export default MyAwesomeGrid
