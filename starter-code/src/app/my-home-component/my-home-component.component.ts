import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../service/CinemaService';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  moviesArray: Array<Object> = this.CM.getMovies()
  constructor(public CM:CinemaService) { }

  ngOnInit() {
   
  }


}
