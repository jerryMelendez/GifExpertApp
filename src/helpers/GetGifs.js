
// export const getGifs = async (category) => {
//   const apiKey = 'bOyeLvleYcA0xdhlEzQa7OUCR1eTAf7S&q';
//   const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;

//   try {
//     const response = await fetch(url);
//     const { data } = await response.json();

//     const gifs = data.map((gif) => {
//       return {
//         id: gif.id,
//         title: gif.title,
//         url: gif.images.downsized_medium.url,
//       };
//     });

//     return gifs;
//   } catch (error) {
//     console.error('Error fetching gifs:', error);
//     return [];
//   }
// };

export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=bOyeLvleYcA0xdhlEzQa7OUCR1eTAf7S&q=${encodeURI(category)}&limit=10`;

    const resp = await fetch(url);

    const {data} = await resp.json();

    const gifs = data.map(({id, title, images}) => ({
      id,
      title,
      url: images?.downsized_medium.url
    }));

    return gifs;
  }