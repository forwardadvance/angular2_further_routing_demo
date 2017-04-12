import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {CatComponent} from './cat/cat.component'
import {InsectComponent} from './insect/insect.component'
import {AntComponent} from './ant/ant.component'

const routes: Routes = [
  { 
    path: '',
    children: []
  },
  { 
    path: 'insect',
    component: InsectComponent,
    children: [
      { 
        path: 'ant',
        component: AntComponent,
      },
    ]
  },

  { 
    path: 'cat/:cat_name',
    component: CatComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
