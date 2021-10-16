import { Component, OnInit } from '@angular/core';
import { SosService } from '../services/sos.service';
import {FormControl, NgForm, Validators} from '@angular/forms';

export interface SOS {
  sos_id: number;
  sos_pos_x: number;
  sos_pos_y: number;
  sos_pos_zip: number;
  description: string;
}

const ELEMENT_DATA: SOS[] = [
  {sos_id: 1, sos_pos_x: 1, sos_pos_y: 1, sos_pos_zip: 20723, description: '1'},
  {sos_id: 2, sos_pos_x: 2, sos_pos_y: 2, sos_pos_zip: 20723, description: '1'},
  {sos_id: 3, sos_pos_x: 3, sos_pos_y: 3, sos_pos_zip: 20723, description: '1'},
  {sos_id: 4, sos_pos_x: 4, sos_pos_y: 4, sos_pos_zip: 20723, description: '1'},
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public sosService: SosService) { }

  displayedColumns: string[] = ['sos_id', 'sos_pos_x', 'sos_pos_y', 'sos_pos_zip', 'description', 'delete'];
  dataSource = ELEMENT_DATA;
  sosFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  ngOnInit(): void {
    this.sosService.getAllSos().subscribe((res:any)=>{
      this.dataSource = res.data.rows
    })
  }

  addSos() {
    this.sosService.addSos(10, 10, 22124, 'I need water!').subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

  deleteSos(id: number) {
    this.sosService.deleteSos(id).subscribe((res:any)=>{
      this.ngOnInit();
    })
  }

}