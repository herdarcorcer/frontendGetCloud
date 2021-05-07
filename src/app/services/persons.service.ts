import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { person } from '../interfaces/person';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  API_ENDPOINT = 'http://homestead.test/api';

  constructor(private httpClient: HttpClient) { }

  get(){
    return this.httpClient.get(this.API_ENDPOINT+'/candidates');
  }

  save(candidate:person){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.API_ENDPOINT+'/candidates', candidate, {headers});
  }

  getId(id){
    return this.httpClient.get(this.API_ENDPOINT+'/candidates/'+id);
  }

  put(candidate:person, id){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.put(this.API_ENDPOINT+'/candidates/'+id, candidate, {headers});
  }

  delete(id){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.API_ENDPOINT+'/candidates/'+id);
  }
}
