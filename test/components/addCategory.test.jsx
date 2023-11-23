/* eslint-disable no-undef */
import { fireEvent, render } from "@testing-library/react";
import { AddCategory } from "../../src//components/addCategory";
import { screen } from '@testing-library/react'


describe('Pruebas en addCategory', () => { 
    
    test('Debe de cambiar el valor en la caja de texto ', () => { 
        // 1. Simular el inputChange
        // 2. Simular el submit
        // 3. setCategories se debe de haber llamado
        // 4. el valor del input debe de estar ''

        render(<AddCategory onNewCategory={() => {}} />);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: 'Saitama'}});

        screen.debug();
     })

 });