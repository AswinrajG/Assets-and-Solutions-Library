import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatVideoModule } from 'mat-video';

import { TruncateModule } from '@yellowspot/ng-truncate';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';

import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { BoxComponent } from './Modules/box/box.component';
import { AssetDetailsComponent } from './asset-details/asset-details.component';
import { EmailAutomationComponent } from './email-automation/email-automation.component';
import { SslAssetComponent } from './ssl-asset/ssl-asset.component';
import { EmployeeHelpdeskComponent } from './employee-helpdesk/employee-helpdesk.component';
import { KycDigitisationComponent } from './kyc-digitisation/kyc-digitisation.component';
import { ContractDigitizationComponent } from './contract-digitization/contract-digitization.component';
import { InvoiceDigitizationComponent } from './invoice-digitization/invoice-digitization.component';
import { SsiDigitizationComponent } from './ssi-digitization/ssi-digitization.component';
import { EmailInterpretationComponent } from './email-interpretation/email-interpretation.component';
import { ConnectedScmComponent } from './connected-scm/connected-scm.component';
import { EyOpschainComponent } from './ey-opschain/ey-opschain.component';
import { LoyaltySolutionComponent } from './loyalty-solution/loyalty-solution.component';
import { AssetTrackingComponent } from './asset-tracking/asset-tracking.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    NavbarComponent,
    HeaderComponent,
    BoxComponent,
    AssetDetailsComponent,
    EmailAutomationComponent,
    SslAssetComponent,
    EmployeeHelpdeskComponent,
    KycDigitisationComponent,
    ContractDigitizationComponent,
    InvoiceDigitizationComponent,
    SsiDigitizationComponent,
    EmailInterpretationComponent,
    ConnectedScmComponent,
    EyOpschainComponent,
    LoyaltySolutionComponent,
    AssetTrackingComponent
  ],
  imports: [
    BrowserModule,
    TruncateModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatExpansionModule,
    MatButtonModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatVideoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
