# Proyecto con Errores

## Fragmentos antes/después del código

### Fragmento 1: useEffect desordenado
> **Problema:** No tiene un propósito claro más allá de un `console.log`.
```typescript
useEffect(() => {
  console.log('Component mounted or updated');
}, [items]);
```

### Fragmento 2: Componente demasiado largo
> **Problema:** Debería dividirse en componentes más pequeños.
```typescript
const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  // ...existing code...
};
```

### Fragmento 3: Lógica repetida
> **Problema:** Validación de entrada podría abstraerse en una función reutilizable.
```typescript
const addItem = () => {
  if (newItem.trim() === '') return;
  setItems([...items, { id: Date.now(), value: newItem }]);
  setNewItem('');
};
```

## Explicación de qué problema resolviste
Miranda Eugenia Colorado Arróniz:
texto aqui

Alejandro Kong Montoya:
texto aqui

Estefania Antonio Villaseca:
texto aqui

Sofia Zugasti:
texto aqui

## Reflexión final por cada miembro
Miranda Eugenia Colorado Arróniz:
texto aqui

Alejandro Kong Montoya:
texto aqui

Estefania Antonio Villaseca:
texto aqui

Sofia Zugasti:
texto aqui