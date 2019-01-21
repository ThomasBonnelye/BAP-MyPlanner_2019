import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentionLegalesPage } from ' ./mention-legales';

@NgModule({
  declarations: [
    MentionLegalesPage,
  ],
  imports: [
    IonicPageModule.forChild(MentionLegalesPage),
  ],
})
export class MentionLegalesPageModule {}
