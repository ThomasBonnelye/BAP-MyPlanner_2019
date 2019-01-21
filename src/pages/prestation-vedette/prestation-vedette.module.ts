import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrestationVedettePage } from './prestation-vedette';

@NgModule({
  declarations: [
    PrestationVedettePage,
  ],
  imports: [
    IonicPageModule.forChild(PrestationVedettePage),
  ],
})
export class PrestationVedettePageModule {}
