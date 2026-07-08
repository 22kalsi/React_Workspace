import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../store';

const AddContact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() === '' || email.trim() === '') return;

    // Create a new contact object
    const newContact = {
      id: Date.now(), // simple unique id (in real apps use a library)
      name: name.trim(),
      email: email.trim()
    };

    // 🔴 Dispatch the action to add the contact
    dispatch(addContact(newContact));

    // Clear the form
    setName('');
    setEmail('');
  };

  return (
    <div style={{ padding: '20px', borderBottom: '1px solid #ccc' }}>
      <h3>➕ Add New Contact</h3>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '10px' }}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ marginRight: '10px', padding: '8px' }}
          />
          <button type="submit" style={{ padding: '8px 16px' }}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddContact;