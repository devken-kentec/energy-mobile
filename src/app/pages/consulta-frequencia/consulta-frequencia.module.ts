import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultaFrequenciaPageRoutingModule } from './consulta-frequencia-routing.module';

import { ConsultaFrequenciaPage } from './consulta-frequencia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultaFrequenciaPageRoutingModule
  ],
  declarations: [ConsultaFrequenciaPage]
})
export class ConsultaFrequenciaPageModule {}
