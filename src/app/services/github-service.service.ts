import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { ErrorNotify } from './error-notify/error-notify-service';

@Injectable({
  providedIn: 'root'
})
export class GithubServiceService extends ErrorNotify{
  private readonly Url = 'https://api.github.com';  //base url

  constructor(private readonly http: HttpClient) { super();}

  //api method to call repositories
  getRepositories(query: string | null, language: string | null, stars: string | null): Observable<any> {
    if(query){ //call api only if main query is not null
      let searchQuery = `q=${query}`;
      if (language) searchQuery += `+language:${language}`; //language
      if (stars) searchQuery += `&stars=${stars}`;  //stars

      return this.http.get(`${this.Url}/search/repositories?${searchQuery}`).pipe(map(res => res),
       catchError(this.errorHandler)); //incase of error from api send to error base class
    }
    return EMPTY;
  }

  //api method to call commits
  getCommits(owner: string, repo: string): Observable<any> {
    let searchQuery = `q=repo:${owner}/${repo}+css`;
    return this.http.get(`${this.Url}/search/commits?${searchQuery}`).pipe(map(res => res),
      catchError(this.errorHandler)); //incase of error from api send to error base class
  }
}
