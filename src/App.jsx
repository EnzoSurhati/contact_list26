import React, { useState } from 'react';
import ContactList from './Components/ContactList';
import SelectedContact from './Components/SelectedContact';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);

  return (
    <div>
      {selectedContactId ? (
        <SelectedContact selectedContactId={selectedContactId} />
      ) : (
        <ContactList setSelectedContactId={setSelectedContactId} />
      )}
    </div>
  );
}

export default App;