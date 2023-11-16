import React, { useState } from 'react';
import { AddCategory } from './components/addCategory';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const onAddCategory = () => {
        // agregar un nuevo elemento al arreglo usando el setCategories de useState y el operador spread de 
        //JS [...categories] para no perder los elementos anteriores y agregar el nuevo elemento al final del arreglo    
        
        // setCategories(cat => [...cat, 'category ' + (cat.length + 1)]);

        setCategories(['category ' + (categories.length + 1), ...categories]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input */}
            <AddCategory setCategories={setCategories} categories={categories}/>

            {/* Listado de Gif */}
            
            <ol>
                {categories.map(category => {
                    return <li key={' '+ (Math.floor(Math.random() * 100000) + 1)}>{category}</li>
                })}
            </ol>

            {/* Gif Item */}
        </>
    );
}