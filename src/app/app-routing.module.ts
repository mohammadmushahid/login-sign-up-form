import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignComponent } from './sign/sign.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ManageEmployeesComponent } from './manage-employees/manage-employees.component';
import { NewFormComponent } from './new-form/new-form.component';
import { ApiIntegrationComponent } from './api-integration/api-integration.component';

const routes: Routes = [
  {
    path: 'sign' , component: SignComponent
  },
  {
    path: 'sign-up' , component: SignUpComponent
  },
  {
    path: 'manage-employees', component: ManageEmployeesComponent
  },
  {
    path: 'new-form', component: NewFormComponent
  },
  {
    path: 'api-integration', component: ApiIntegrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
