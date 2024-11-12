import React, { useState, useEffect } from 'react';

export default function SelectedContact({ selectedContactId }) {
  const [contact, setContact] = useState(null);

  useEffect(() => {
    async function fetchContact() {
      try {
        const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`);
        const result = await response.json();
        setContact(result);
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    }
  
    if (selectedContactId) {
      fetchContact();
    }
  }, [selectedContactId]);

  return (
    <div>
      {contact ? (
        <div>
          <h2>{contact.name}</h2>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}