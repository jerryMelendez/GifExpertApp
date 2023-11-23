/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */

import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";
import { screen } from '@testing-library/react'


describe('Pruebas en el componente', () => {

    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';   

    test('debe de hacer match con el snapshot', () => {
        // render(<GifItem title={title} url={url} />);
        const {container} = render(<GifItem url = {url} title={title}/>);
        
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el url y el alt indicados', () => {
        render(<GifItem url = {url} title={title}/>);
        
        // console.log(screen.getByRole('img').src);
        // console.log(screen.getByRole('img').alt);

        // expect(screen.getByRole('img').src).toBe(url);
        // expect(screen.getByRole('img').alt).toBe(title);

        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);
    });

    test('debe mostrar un titulo en el componente', () => {
        render(<GifItem url = {url} title={title}/>);

        // Comprobar que existe un elemento con el texto indicado en el componente renderizado
        expect(screen.getByText(title)).toBeTruthy();
    }
    );
});