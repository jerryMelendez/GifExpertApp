import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GiftExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const onAddCategory = (newCategory) => {
        // agregar un nuevo elemento al arreglo usando el setCategories de useState y el operador spread de 
        //JS [...categories] para no perder los elementos anteriores y agregar el nuevo elemento al final del arreglo    
        // setCategories(cat => [...cat, 'category ' + (cat.length + 1)]);

        // console.log(newCategory);
        // setCategories(['category ' + (categories.length + 1), ...categories]);

        if (categories.includes(newCategory))  return;

        setCategories(cat => [newCategory, ...cat]);
    };

    return (
        <>
            {/* Titulo */}
            <h1>GiftExpertApp</h1>

            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} categories={categories}
                onNewCategory={event => onAddCategory(event)}
            />

            {/* Listado de Gif */}
            
            <ol>
                {categories.map(category => (
                    // return <li key={category}>{category}</li>
                    <GifGrid 
                        key={category}
                        category={category}
                     />
                ))}
            </ol>

            {/* Gif Item */}
        </>
    );
}