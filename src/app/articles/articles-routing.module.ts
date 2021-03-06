import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { BananasComponent } from './bananas/bananas.component';
import { WatermelonComponent } from './watermelon/watermelon.component';

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent,
        data: { navTitle: 'Articles' },
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'bananas' },
            { path: 'bananas', component: BananasComponent, data: { navTitle: 'Bananas'}},
            { path: 'watermelon', component: WatermelonComponent, data: { navTitle: 'Watermelon'}}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }

export const routedComponents = [ArticlesComponent, BananasComponent, WatermelonComponent];