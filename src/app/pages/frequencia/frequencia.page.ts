import { FrequenciaService } from './shared/frequencia.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frequencia',
  templateUrl: './frequencia.page.html',
  styleUrls: ['./frequencia.page.scss'],
})
export class FrequenciaPage implements OnInit {

  constructor(private frequenciaService: FrequenciaService) { }
   horario:string;

  ngOnInit() {

    this.frequenciaService.loadById(139).subscribe((res:any)=>{
        this.horario = res.horario;
    })
  }

}
