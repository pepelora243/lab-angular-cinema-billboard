import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CinemaService } from '../service/CinemaService';


@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})


export class MyMovieComponentComponent implements OnInit {
  movieId:number
  movie:object

  constructor(private aRoute: ActivatedRoute, public mS: CinemaService) { }

  ngOnInit() {
    this.aRoute.params.subscribe((params) => {
      this.movieId = Number(params['id'])
      this.movie = this.mS.getMovie(this.movieId)
    });
  }


}
