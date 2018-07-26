import { Injectable } from '@angular/core';
import {sampleMovies} from "../../sample-movies"
interface Movie {
    id: number,
    title: string,
    poster: string,
    synopsis: string,
    genres: Array<string>,
    year: number,
    director: string,
    actors: Array<string>,
    hours?: Array<string>,
    room?: number

}

@Injectable()
export class CinemaService {
    moviesArray: Array<Movie> = sampleMovies

    constructor() {}
    getMovies() {
        return this.moviesArray
    }
    getMovie(id) {
        return this.moviesArray.filter(e => e.id == id)[0]
    }


      

}

    
  
