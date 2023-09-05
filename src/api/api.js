import axios from "axios";

const apiKey = 'f36f23edf6e10fd2ddcf939916b1f67a'

const instanse = axios.create({
    baseURL : 'https://api.themoviedb.org/3'
});


export const filmsAPI = {
    getGenres(){
       return instanse.get(`/genre/movie/list?api_key=${apiKey}&language=en-US`)
    },
    getMoviByPage(pageNumber){
        return instanse.get(`/discover/movie?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
    },
    getOneMovie(id){
        return instanse.get(`/movie/${id}?api_key=${apiKey}&language=en-US`)
    }
}