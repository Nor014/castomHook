import React from 'react';
import './App.css';
import useJsonFetch from './useJsonFetch';

function Data() {
  let fetch = useJsonFetch('http://localhost:7070/data ');
  return (
    <>
      {fetch.isLoading && <p>Идет загрузка</p>}
      {fetch.data && <p>{fetch.data.status}</p>}
    </>
  )
}

function Error() {
  let fetch = useJsonFetch('http://localhost:7070/error');
  return (
    <>
      {fetch.isLoading && <p>Идет загрузка</p>}
      {fetch.error && <p>{fetch.error.message}</p>}
    </>
  )
}

function Load() {
  let fetch = useJsonFetch('http://localhost:7070/loading ');

  return fetch.isLoading
    ? <div className='loader'>
      <div className='loader__inner'></div>
    </div>
    : <p>Загрузка завершена</p>
}

function App() {
  return (
    <div className="App">
      <Data />
      <Error />
      <Load />
    </div>
  );
}

export default App;

