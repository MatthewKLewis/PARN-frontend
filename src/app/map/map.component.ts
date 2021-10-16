import { Component, OnInit } from '@angular/core';
import { SosService } from '../services/sos.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(public sosService: SosService) { }

  ngOnInit(): void {
    this.sosService.getAllSos().subscribe((res:any)=>{
      console.log(res.data.rows)
    })
  }

}
