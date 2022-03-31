import { Injectable } from '@angular/core';
import axios from 'axios';
import { photo } from 'src/app/types/typephoto';



@Injectable({
  providedIn: 'root'
})


export class ApifotosService {
  
  constructor() { }
  url = 'https://jsonplaceholder.typicode.com/photos'
  get(): Promise<photo[]> {
    return axios.get(this.url+'?_limit=10').then<photo[]>((photos) => {
      return photos.data;
    });
  }

  getId(id: number): Promise<photo> {
    return axios.get(this.url+"/"+id).then<photo>((result) => {
      return result.data;
    });
  }
}
