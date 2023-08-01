import React from 'react';

const records = [
  { id: 1, name: 'John Doe', age: 30, email: 'john@example.com' },
  { id: 2, name: 'Jane Smith', age: 28, email: 'jane@example.com' },
  { id: 3, name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
  // Add more records here if needed
];

const RecordList = ({ records }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>
      {records.map(record => (
        <tr key={record.id}>
          <td>{record.id}</td>
          <td>{record.name}</td>
          <td>{record.age}</td>
          <td>{record.email}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

function App() {
  return (
    <div className="App">
      <h1>Record List</h1>
      <RecordList records={records} />
    </div>
  );
}

export default App;
