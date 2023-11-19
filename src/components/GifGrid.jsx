/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { getGifs } from "../helpers/GetGifs";
import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

// const getGifs = async (category) => {
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=bOyeLvleYcA0xdhlEzQa7OUCR1eTAf7S&q=${encodeURI(category)}&limit=20`;

//   const resp = await fetch(url);

//   const {data} = await resp.json();

//   const gifs = data.map(({id, title, images}) => ({
//     id,
//     title,
//     url: images?.downsized_medium.url
//   }));

//   console.log(gifs);
// }

export const GifGrid = ({category}) => {
  
  const { images, isLoading } = useFetchGifs(category);

  console.log({images, isLoading});

  return (
    <>
        <h3>{category}</h3>

        {
          // Formas de operadores logicos: Si isLoading es true va a renderizar en h2
          // isLoading ? ( <h2>Cargando...</h2> ) : null
          isLoading && (<h2>Cargando...</h2>)
        }

        <div className="card-grid">
          {
              images.map((image) => (
                  <GifItem key={image.id} {... image} />
              ))
          }
        </div>
    </>
  )
}
