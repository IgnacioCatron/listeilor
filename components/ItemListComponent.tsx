// components/ItemListComponent.tsx
import React from 'react';

const ItemListComponent = ({ items, onRemoveItem }) => {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>
                    {item}
                    <button onClick={() => onRemoveItem(index)}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default ItemListComponent;
