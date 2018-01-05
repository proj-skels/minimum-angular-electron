import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';

// Import components

const routes: Routes = [
  // Setup path-to-component mappings
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: [],
  /**
   * NOTE:  This is important for allowing routing to work in Electron apps.
   */
  providers: [{provide: APP_BASE_HREF, useValue : '/' }]
})
export class AppRouterModule { }
