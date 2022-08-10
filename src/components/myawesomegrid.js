import React   from 'react'
import { Grid, Input, Select } from 'react-spreadsheet-grid'

const rows = [
    { id: 'user1', name: 'John Doe', age: 44, positionId: 'position1' },
];

const somePositions = [{id: 100, name: 'Bus Driver'} , {id: 100, name: 'Doctor'} , {id: 100, name: 'Tax Inspector'} , {id: 100, name: 'House Painter'}];

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
          title: () => 'Age',
          value: (row, { focus }) => {
              return (
                  <Input
                    value={row.age}
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
