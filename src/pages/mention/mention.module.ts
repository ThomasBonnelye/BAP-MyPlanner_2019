import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MentionPage } from './mention';

@NgModule({
  declarations: [
    MentionPage,
  ],
  imports: [
    IonicPageModule.forChild(MentionPage),
  ],
})
export class MentionPageModule {}
