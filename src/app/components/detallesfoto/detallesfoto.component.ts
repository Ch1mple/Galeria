import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApifotosService } from 'src/app/services/apifotos/apifotos.service';
import { photo } from 'src/app/types/typephoto';

@Component({
  selector: 'app-detallesfoto',
  templateUrl: './detallesfoto.component.html',
  styleUrls: ['./detallesfoto.component.css']
})
export class DetallesfotoComponent implements OnInit {
  photo:photo={
    albumId: 0,
    id: 0,
    title: '',
    url: '',
    thumbnailUrl: ''
  }
  constructor(private route: ActivatedRoute,
    private apifotosService: ApifotosService  ) { }

  ngOnInit(): void {
    this.getDetalles();
  }
  
  getDetalles(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.apifotosService.getId(id).then((result=> {
      console.log(result)
      this.photo=result
    }))
      
  }
}
