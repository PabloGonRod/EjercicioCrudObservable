import { Component, OnInit } from '@angular/core';
import { SuperHeroServiceService } from './super-hero-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SuperHeroes';

  hero$: Observable<any[]>

  constructor(private heroService: SuperHeroServiceService) {

  }


  ngOnInit(): void {
    this.hero$ = this.heroService.getPosts()
  }

}
