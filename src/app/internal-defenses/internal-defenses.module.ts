import { AppRoutingModule } from './../app-routing/app-routing.module';
import { LaserCannonComponent } from './laser-cannon/laser-cannon.component';
import { TurretComponent } from './turret/turret.component';
import { DeathSquareComponent } from './death-square/death-square.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ],
  exports: [
    DeathSquareComponent,
    TurretComponent,
    LaserCannonComponent
  ]
})
export class InternalDefensesModule { }
