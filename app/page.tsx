// app/page.tsx
"use client";

import React, { useReducer, useEffect } from 'react';
import InputComponent from '../components/InputComponent';
import ItemListComponent from '../components/ItemListComponent';
import ShareComponent from '../components/ShareComponent';
import styles from '../styles/Home.module.css';

const initialState = {
    items: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const newItems = [...state.items, action.payload];
            localStorage.setItem('items', JSON.stringify(newItems));
            return { ...state, items: newItems };
        case 'REMOVE_ITEM':
            const filteredItems = state.items.filter((_, i) => i !== action.payload);
            localStorage.setItem('items', JSON.stringify(filteredItems));
            return { ...state, items: filteredItems };
        case 'LOAD_ITEMS':
            return { ...state, items: action.payload };
        default:
            return state;
    }
};

const Home = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const savedItems = JSON.parse(localStorage.getItem('items')) || [];
        dispatch({ type: 'LOAD_ITEMS', payload: savedItems });
    }, []);

    const handleAddItem = (item) => {
        dispatch({ type: 'ADD_ITEM', payload: item });
    };

    const handleRemoveItem = (index) => {
        dispatch({ type: 'REMOVE_ITEM', payload: index });
    };

    return (
        <div className={styles.container}>
            <h1>Lista de Items</h1>
            <InputComponent onAddItem={handleAddItem} />
            <ItemListComponent items={state.items} onRemoveItem={handleRemoveItem} />
            <ShareComponent items={state.items} />

        </div>
    );
};

export default Home;
