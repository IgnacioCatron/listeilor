import React from 'react';

type ItemListComponentProps = {
    items: string[];
    onRemoveItem: (index: number) => void;
};

const ItemListComponent: React.FC<ItemListComponentProps> = ({ items, onRemoveItem }) => {
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
