import {Component, OnInit} from '@angular/core';
import {Hero} from './hero';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';
import {Router} from '@angular/router-deprecated';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    styleUrls: ['app/heroes.component.css']
    
})
export class HeroesComponent implements OnInit {
    title = 'Tour of NG Heroes';
    heroes: Hero[];
    selectedHero: Hero;
    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    
    getHeroes(){
        this.heroservice.getHeroes().then(heroes => this.heroes = heroes);
    }
    
    ngOnInit(){
        this.getHeroes();
    }
    
     constructor(
        private router: Router,
        private heroservice: HeroService){}
        
    gotoDetail(){
        this.router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }
 }
 
 