
// import React, { useEffect, useState } from 'react';
// import requests from '../Request';
// import axios from 'axios';

// function MainComponent() {
//     const [movies, setMovies] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.get(requests.requestPopular);
//                 setMovies(response.data.results); // Corrected to `results`
//                 setLoading(false);
//             } catch (error) {
//                 setError(error);
//                 setLoading(false);
//             }
//         };

//         fetchData();
//     }, []);

//     useEffect(() => {
//         console.log(movies);
//     }, [movies]);

//     if (loading) {
//         return <div>Loading...</div>;
//     }

//     if (error) {
//         return <div>Error: {error.message}</div>;
//     }

//     const truncateString =(str,num)=>{
//       if(str?.length>num){
//         return str.slice(0,num)+'...';
//       }else{
//         return str;
//       }
//     }

//     return (
//         <div className='w-full h-[550px] text-white'>
//             <div className='w-full h-full '>
//                 <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
//                 {movie && (
//                     <>
//                         <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
//                         <div className='absolute w-full top-[20%] p-4 md:p-8'>
//                             <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
//                             <div className='my-4'>
//                                 <button className='border bg-gray-300 text-black border-grey-300 py-2 px-5'>Play</button>
//                                 <button className='border text-white border-grey-300 py-2 px-5 ml-4'>Watch Later</button>
//                             </div>
//                             <p className='text-grey-400 text-sm'>Released: {movie.release_date}</p>
//                             {/* Uncomment and implement truncateString if needed */}
//                             <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200'>{truncateString(movie?.overview, 150)}</p>
//                         </div>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default MainComponent;


import React, { useEffect, useState } from 'react';
import requests from '../Request';
import axios from 'axios';


function MainComponent() {

   
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const movie = movies.length > 0 ? movies[Math.floor(Math.random() * movies.length)] : null;


    useEffect(()=>{
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(requests.requestPopular);
                setMovies(response.data.results); // Corrected to `results`
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        console.log(movies);
    }, [movies]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const truncateString = (str, num) => {
      if (str?.length > num) {
        return str.slice(0, num) + '...';
      } else {
        return str;
      }
    }

    return (
        <div className='w-full h-[550px] text-white'>
            <div className='w-full h-full'>
                <div className='absolute w-full h-[550px] bg-gradient-to-r from-black'></div>
                {movie && (
                    <>
                        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} alt={movie.title} />
                        <div className='absolute w-full top-[20%] p-4 md:p-8'>
                            <h1 className='text-3xl md:text-5xl font-bold'>{movie.title}</h1>
                            <div className='my-4'>
                                <button className='border bg-gray-300 text-black border-grey-300 py-2 px-5'>Play</button>
                                <button className='border text-white border-grey-300 py-2 px-5 ml-4'>Watch Later</button>
                            </div>
                            <p className='text-grey-400 text-sm'>Released: {movie.release_date}</p>
                            <p className='w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-grey-200'>{truncateString(movie?.overview, 150)}</p>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}

export default MainComponent;
