// const key = import.meta.env.API_KEY

// const key = import.meta.env.VITE_API_KEY;

// const key ='0df3772e005f1f93dda3fbb5f52771e1'

const key = '0df3772e005f1f93dda3fbb5f52771e1'
const requests = {

    requestPopular:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`, // worked
    requestTopRated:`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`, // worked
    requestTrending:`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`, // worked
    requestHorror:`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`, // worked
    requestUpcoming:`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`, // worked

}






// const requests = {
//     requestPopular: `/api/movie/popular?api_key=${key}&language=en-US&page=1`,
//     requestTopRated: `/api/movie/top_rated?api_key=${key}&language=en-US&page=1`,
//     requestTrending: `/api/movie/popular?api_key=${key}&language=en-US&page=2`,
//     requestHorror: `/api/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
//     requestUpcoming: `/api/movie/upcoming?api_key=${key}&language=en-US&page=1`,
// };

export default requests;


