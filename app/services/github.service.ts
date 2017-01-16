import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
  private username:string;
  private client_id = '6b5790fa7317dcd9576a';
  private client_secret = '    ffe2036eeb06288c2c59300256cebc145c7f87b3';


  constructor(private _http: Http) {
    console.log('GitHub service ready');
    this.username = 'bjkropff';
  }

  getUser(){
    return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
      .map(res => res.json());

  }
}
