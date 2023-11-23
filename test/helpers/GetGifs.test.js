/* eslint-disable no-undef */
import { getGifs } from '../../src/helpers/GetGifs.js';

describe('Pruebas en GetGifs', () => { 
    
    test('debe de retornar un arreglo de gifs', async() => {
        
        const gifs = await getGifs('One Punch');

        // console.log(gifs);

        // Comprobar que el arreglo de gifs no este vacio
        expect(gifs.length).toBeGreaterThan(0);

        // Comprobar que el arreglo de gifs tenga la siguiente estructura
        expect(gifs[0]).toEqual({id: expect.any(String), title: expect.any(String), url: expect.any(String)});
    })

})