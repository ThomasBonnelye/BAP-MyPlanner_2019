import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PrestationNouveautesPage } from './prestation-nouveautes';

@NgModule({
  declarations: [
    PrestationNouveautesPage,
  ],
  imports: [
    IonicPageModule.forChild(PrestationNouveautesPage),
  ],
})
export class PrestationNouveautesPageModule {}
