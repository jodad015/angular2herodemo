import { Injectable }    from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';

@Injectable()
export class HeroService{
    
    private heroesUrl = 'app/heroes';
    
    constructor(private http: Http){}
    
      getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data)
               .catch(this.handleError);
  }

    getHero(id: number){
        return this.getHeroes().then(heroes => heroes.filter(hero => hero.id === id)[0]);
    }
    
    // add a new hero
    private post(hero: Hero): Promise<Hero> {
        let headers = new Headers({'Content-Type': 'application/json'});
            
            return this.http
            .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
            .toPromise()
            .then(res => res.json().data)
            .catch(this.handleError);
        
    }
    
    // update hero
    private put(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = '${this.heroesUrl}/${hero.id}';
        
        return this.http.put(url, JSON.stringify(hero), {headers: headers})
        .toPromise()
        .then(() => hero)
        .catch(this.handleError);
    }
    
    // delete hero
    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        
        let url = '${this.heroesUrl}/${hero.id}';
        
        return this.http.delete(url, headers)
        .toPromise()
        .catch(this.handleError);
    }
    
    //save method, combination of put and post
    save(hero: Hero): Promise<Hero>{
        if(hero.id){
            return this.put(hero);
        }
        return this.post(hero);
    }
    
    private handleError(error: any){
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}