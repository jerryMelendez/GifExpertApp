import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifs";

/* eslint-disable no-unused-vars */
export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const newImages = await getGifs(category);
      setImages(newImages);
      setIsLoading();
    }
    
    useEffect(() => {

      // getGifs(category).then(newImages => setImages(newImages));

      getImages();

    }, []);
  
    return {
        images,
        isLoading
    }

}
