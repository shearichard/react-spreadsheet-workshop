//import { Input, Select } from 'react-spreadsheet-grid'

const somePositions = [
    {id: 'position1', name: 'Bus Driver'} , 
    {id: 'position2', name: 'Doctor'} , 
    {id: 'position3', name: 'Tax Inspector'} , 
    {id: 'position4', name: 'House Painter'}
];
const rowData = [
    { id: 'user1', name: 'Jane Lee', age: 22, positionId: 'position1' },
    { id: 'user2', name: 'John Smith', age: 33, positionId: 'position1' },
    { id: 'user3', name: 'Ranjit Singh', age: 44, positionId: 'position1' },
    { id: 'user4', name: 'Annabelle Fuentes', age: 55, positionId: 'position1' },
];

/*
const initColumns = () => {
    return [
    {
      title: () => 'Name',
      value: (row, { focus }) => {
          return (
              <Input
                value={row.name}
                focus={focus}
                onChange={onFieldChange(row.id, 'firstName')}
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
*/
//export { initColumns, rowData } 
export { rowData, somePositions } 
