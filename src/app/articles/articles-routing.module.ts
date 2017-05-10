import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles.component';
import { BananasComponent } from './bananas/bananas.component';
import { WatermelonComponent } from './watermelon/watermelon.component';

const routes: Routes = [
    {
        path: '',
        component: ArticlesComponent,
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'bananas' },
            { path: 'bananas', component: BananasComponent},
            { path: 'watermelon', component: WatermelonComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ArticlesRoutingModule { }

export const routedComponents = [ArticlesComponent, BananasComponent, WatermelonComponent];