import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from '../home/home.component';
import { DashboardComponent} from '../dashboard/dashboard.component'
import { AssetDetailsComponent} from "../asset-details/asset-details.component";
import { EmailAutomationComponent} from "../email-automation/email-automation.component";
import { SslAssetComponent} from "../ssl-asset/ssl-asset.component";
import { EmployeeHelpdeskComponent} from "../employee-helpdesk/employee-helpdesk.component";
import { KycDigitisationComponent} from "../kyc-digitisation/kyc-digitisation.component";
import { ContractDigitizationComponent} from "../contract-digitization/contract-digitization.component";
import { InvoiceDigitizationComponent} from "../invoice-digitization/invoice-digitization.component";
import { SsiDigitizationComponent} from "../ssi-digitization/ssi-digitization.component";
import { EmailInterpretationComponent} from "../email-interpretation/email-interpretation.component";
import { ConnectedScmComponent} from "../connected-scm/connected-scm.component";
import { EyOpschainComponent} from "../ey-opschain/ey-opschain.component";
import { LoyaltySolutionComponent } from '../loyalty-solution/loyalty-solution.component';
import { AssetTrackingComponent } from '../asset-tracking/asset-tracking.component';

const routes: Routes = [
  { path:'',redirectTo: '/home', pathMatch: 'full' },
  { path:"home", component: HomeComponent },
  { path:"dashboard", component: DashboardComponent},
  { path:"asset/:id", component:AssetDetailsComponent },
  { path:"enesa", component:EmailAutomationComponent },
  { path:"ssl", component:SslAssetComponent },
  { path:"employeeHelpdesk", component:EmployeeHelpdeskComponent },
  { path:"kycdigitisation", component:KycDigitisationComponent },
  { path:"contractdigitisation", component:ContractDigitizationComponent },
  { path:"invoicedigitisation", component:InvoiceDigitizationComponent },
  { path:"ssi", component:SsiDigitizationComponent },
  { path:"emailinterpretation", component:EmailInterpretationComponent },
  { path:"connectedscm", component:ConnectedScmComponent },
  { path:"opschain", component:EyOpschainComponent },
  { path:"loyaltysolution", component:LoyaltySolutionComponent },
  { path:"assettracking", component:AssetTrackingComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
