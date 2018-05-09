import { TieFighterComponent } from './tie-fighter/tie-fighter.component';
import { StarDestroyerComponent } from './star-destroyer/star-destroyer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StarDestroyerComponent,
    TieFighterComponent
  ],
  exports: [
    StarDestroyerComponent,
    TieFighterComponent
  ]
})
export class ExternalDefensesModule { }
