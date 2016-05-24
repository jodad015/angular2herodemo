import {Component, Input, Output, OnInit, EventEmitter} from '@angular/core';
import {Hero} from './hero';
import {RouteParams} from '@angular/router-deprecated';
import {HeroService} from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit{
    @Input() hero: Hero;
    
    error: any;
    navigated = false;
    constructor(
        private heroService: HeroService,
        private routeParams: RouteParams){}
    ngOnInit(){
        if (this.routeParams.get('id') !== null){
            let id = +this.routeParams.get('id');
            this.navigated = true;
            this.heroService.getHero(id).then(hero => this.hero = hero);
        } else {
            this.navigated = false;
            this.hero = new Hero();
        }
    }
    goBack(){
        window.history.back();
    }
    
    save(){
        this.heroService.save(this.hero).then(hero => {this.hero = hero;
        this.goBack();
        })
        .catch(error => this.error = error);
    }
}