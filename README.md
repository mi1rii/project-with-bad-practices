## Fragmentos antes/después del código

### Fragmento 1: useEffect desordenado
Antes:
> **Problema:** No tiene un propósito claro más allá de un `console.log`.
```typescript
useEffect(() => {
  console.log('Component mounted or updated');
}, [items]);
```
> **Correción:** texto aqui
```typescript
codigo aqui
```

### Fragmento 2: Componente demasiado largo
> **Problema:** Debería dividirse en componentes más pequeños.
```typescript
const CrudApp = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState(null);
  const [editValue, setEditValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [globalCounter, setGlobalCounter] = useState(0);
  // ...existing code...
};
```
> **Correción:** texto aqui
```typescript
codigo aqui
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
> **Correción:** texto aqui
```typescript
codigo aqui
```

### Fragmento 4: Manejo incorrecto del estado
> **Problema:** Se utiliza un estado global para algo que podría ser local.
```typescript
const [globalCounter, setGlobalCounter] = useState(0);

const incrementGlobalCounter = () => {
  setGlobalCounter(globalCounter + 1);
};
```
> **Correción:** texto aqui
```typescript
codigo aqui
```

### Fragmento 5: Filtro implementado directamente en el renderizado
> **Problema:** Podría optimizarse para evitar cálculos innecesarios en cada renderizado.
```typescript
const filteredItems = items.filter(item =>
  item.value.toLowerCase().includes(searchQuery.toLowerCase())
);
```
> **Correción:** texto aqui
```typescript
codigo aqui
```

## Explicación de qué problema resolviste

### Miranda Eugenia Colorado Arróniz:
texto aqui

### Alejandro Kong Montoya:
texto aqui

### Estefania Antonio Villaseca:
texto aqui

### Sofia Zugasti:
texto aqui

## Reflexión final por cada miembro

### Miranda Eugenia Colorado Arróniz:
texto aqui

### Alejandro Kong Montoya:
texto aqui

### Estefania Antonio Villaseca:
texto aqui

### Sofia Zugasti:
texto aqui