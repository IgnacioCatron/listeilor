// components/ShareComponent.tsx
import React from 'react';

const ShareComponent = ({ items }) => {
    const generateShareText = () => {
        if (items.length === 0) return "No hay elementos en la lista.";
        return `Lista de Items:\n${items.map((item, index) => `${index + 1}. ${item}`).join('\n')}`;
    };

    const handleWhatsAppShare = () => {
        const text = generateShareText();
        const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <div>
            <button onClick={handleWhatsAppShare}>Compartir en WhatsApp</button>
        </div>
    );
};

export default ShareComponent;
