import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { DashboardComponent} from '../dashboard/dashboard.component'
import { AssetDetailsComponent} from "../asset-details/asset-details.component";
import { EmailAutomationComponent} from "../email-automation/email-automation.component";
import { SslAssetComponent} from "../ssl-asset/ssl-asset.component";
import { EmployeeHelpdeskComponent} from "../employee-helpdesk/employee-helpdesk.component";
import { LoginComponent} from "../login/login.component";


const routes: Routes = [
  { path:'',redirectTo: '/login', pathMatch: 'full' },
  { path:"login",component:LoginComponent},
  { path:"home", component: HomeComponent },
  { path:"dashboard", component: DashboardComponent},
  { path:"asset/:id", component:AssetDetailsComponent },
  { path:"enesa", component:EmailAutomationComponent },
  { path:"ssl", component:SslAssetComponent },
  { path:"employeeHelpdesk", component:EmployeeHelpdeskComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
