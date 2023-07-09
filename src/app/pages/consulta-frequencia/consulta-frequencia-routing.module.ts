import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultaFrequenciaPage } from './consulta-frequencia.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultaFrequenciaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultaFrequenciaPageRoutingModule {}
