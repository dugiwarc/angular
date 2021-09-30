import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModsHomeComponentComponent } from './mods-home-component/mods-home-component.component';

const routes: Routes = [
  {
    path: '',
    component: ModsHomeComponentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModsRoutingModule {}
