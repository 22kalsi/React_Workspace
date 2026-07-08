import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllContacts } from '../store';

const ViewContact = () => {
  // 🟢 Get contacts from the store
  const contacts = useSelector(selectAllContacts);

  return (
    <div style={{ padding: '20px' }}>
      <h2>📇 Contact List</h2>
      {contacts.length === 0 ? (
        <p>No contacts yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {contacts.map((contact) => (
            <li
              key={contact.id}
              style={{
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '12px',
                marginBottom: '10px',
                background: '#fafafa'
              }}
            >
              <strong>{contact.name}</strong> – {contact.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewContact;