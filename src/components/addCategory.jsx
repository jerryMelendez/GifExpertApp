/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"

export const AddCategory = ({setCategories}) => {
    // eslint-disable-next-line react/prop-types
    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();

        console.log(inputValue.trim().length);
        // evitar que un input vacio se agregue al arreglo
        if(inputValue.trim().length < 1) {
            return;
        }

        // Setear los valores de las categorias desde el componente hijo al componente padre
        // props.setCategories([inputValue, ...props.categories]);
        setCategories(cat => [inputValue, ...cat]);

        setInputValue('');
        
    }

    return (
        <form onSubmit={event => onSubmit(event)}>
            <input type="text" 
            placeholder="Buscar Gif" 
            value={inputValue}
            onChange={event => onInputChange(event)}
            />
        </form>
        
    )
}