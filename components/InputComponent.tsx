import React, { useState } from 'react';

type InputComponentProps = {
    onAddItem: (item: string) => void;
};

const InputComponent: React.FC<InputComponentProps> = ({ onAddItem }) => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');

    const handleAddItem = () => {
        if (inputValue.trim() === '') {
            setError('El elemento no puede estar vacío.');
            return;
        }
        setError('');
        onAddItem(inputValue.trim());
        setInputValue('');
    };

    return (
        <div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Añadir nuevo ítem"
            />
            <button onClick={handleAddItem}>Agregar</button>
        </div>
    );
};

export default InputComponent;
