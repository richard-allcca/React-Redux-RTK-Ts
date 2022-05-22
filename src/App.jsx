import React from 'react';
import './App.css';
import { AddContact } from './component/AddContact';
import { ContactDetail } from './component/ContactDetail';
import { useContactsQuery } from './services/contactsApi';

function App() {
  const { data, error, isLoading, isFetching, isSuccess } = useContactsQuery();
  // console.log(data);
  return (
    <div className="App">
      <h1>React Redux Toolkit RTK Query Tutorial</h1>
      {isLoading && <h2>...Loading</h2>}
      {isFetching && <h2>...isFetching</h2>}
      {error && <h2>Something went wrong</h2>}
      {isSuccess && (
        <div>
          {data?.map(contact => {
            return <div className="data" key={contact.id}>
              <span>{contact.name}</span>
              <span><ContactDetail id={contact.id} /></span>
            </div>
          })}
        </div>
      )}
      <div><AddContact /></div>
    </div>
  );
}

export default App;
