// 
const key = '0df3772e005f1f93dda3fbb5f52771e1'

const requests = {

    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, // worked
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, // worked
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`, // worked
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`, // worked
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`, // worked

}

export default requests;



// // gopika
// const API_KEY = '9d5fb9edb1ac5e6c54488d56c150a172';

// const requests = {
//     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
//     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
//     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
//     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
//     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
//     fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
//     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
//     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
// };

// export default requests;


// // tutorial
// const key = 'e30c3c86e2f40fd337574dc7455c9621'

// const requests = {
// requestPopular: 'https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1',
// requestTopRated: 'https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1',
// requestTrending: 'https://api.themoviedb.orh/3/movie/popular?api_key=${key}&language=en-US&page=2'
// }
// export default requests