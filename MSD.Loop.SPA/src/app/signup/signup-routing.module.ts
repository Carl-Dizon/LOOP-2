import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './signup.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Routes = [
    {
        path: '', component: SignupComponent
    },
    {
        path: 'error', component: ErrorPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SignupRoutingModule {
}
