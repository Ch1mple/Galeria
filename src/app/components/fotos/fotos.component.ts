import { Component, OnInit } from '@angular/core';
import { ApifotosService } from 'src/app/services/apifotos/apifotos.service';
import { photo } from 'src/app/types/typephoto';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})



export class FotosComponent implements OnInit {

  photos: photo[]=[]
  constructor(private apifotosService: ApifotosService){
    this.getPhotos()
  }

  getPhotos() {
    this.apifotosService.get().then((resultado) => {
      this.photos = resultado;
    });
  }
  ngOnInit(): void {
  }

}
