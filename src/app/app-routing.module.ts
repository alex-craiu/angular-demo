import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// no navTitles here, set it up in its own routing module
const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadChildren: 'app/home/home.module#HomeModule'},
    { path: 'articles', loadChildren: 'app/articles/articles.module#ArticlesModule'},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }