"useState"
"use client"
import { useState, useEffect } from 'react';

const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const [globalCounter, setGlobalCounter] = useState(0);

  const incrementGlobalCounter = () => {
    setGlobalCounter(globalCounter + 1);
  };

  useEffect(() => {
    console.log('Component mounted or updated');
  }, [items]);

  const addItem = () => {
    if (newItem.trim() === '') return;
    setItems([...items, { id: Date.now(), value: newItem }]);
    setNewItem('');
  };

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const startEdit = (item) => {
    setEditItem(item);
    setEditValue(item.value);
  };

  const saveEdit = () => {
    setItems(items.map(item => item.id === editItem.id ? { ...item, value: editValue } : item));
    setEditItem(null);
    setEditValue('');
  };

  const filteredItems = items.filter(item =>
    item.value.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>CRUD App</h1>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Add new item"
          style={{ padding: '10px', marginRight: '10px', width: '300px' }}
        />
        <button onClick={addItem} style={{ padding: '10px 20px' }}>Add</button>
      </div>
      <div style={{ marginBottom: '20px', textAlign: 'center' }}>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search items"
          style={{ padding: '10px', width: '300px' }}
        />
      </div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <button onClick={incrementGlobalCounter} style={{ padding: '10px 20px' }}>Increment Global Counter</button>
        <p>Global Counter: {globalCounter}</p>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Value</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map(item => (
            <tr key={item.id}>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>{item.id}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                {editItem && editItem.id === item.id ? (
                  <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    style={{ padding: '5px', width: '90%' }}
                  />
                ) : (
                  item.value
                )}
              </td>
              <td style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'center' }}>
                {editItem && editItem.id === item.id ? (
                  <button onClick={saveEdit} style={{ marginRight: '10px' }}>Save</button>
                ) : (
                  <button onClick={() => startEdit(item)} style={{ marginRight: '10px' }}>Edit</button>
                )}
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CrudApp;
