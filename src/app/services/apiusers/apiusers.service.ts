import { Injectable } from '@angular/core';
import axios from 'axios';
import { photo } from 'src/app/types/typephoto';



@Injectable({
  providedIn: 'root'
})


export class ApifotosService {
  
  constructor() { }
  url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
  get(): Promise<photo[]> {
    return axios.get(this.url).then<photo[]>((photos) => {
      console.log(photos.data)
      return photos.data;
    });
  }
}
