import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { SideVerticalNavbarComponent } from './side-vertical-navbar/side-vertical-navbar.component';
import { TopHorizontalNavbarComponent } from './top-horizontal-navbar/top-horizontal-navbar.component';
import { TabsHorizontalComponent } from './tabs-horizontal/tabs-horizontal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsModule } from 'ngx-bootstrap/tabs';

@NgModule({
  declarations: [
    AppComponent,
    DashboardLayoutComponent,
    SideVerticalNavbarComponent,
    TopHorizontalNavbarComponent,
    TabsHorizontalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
    TabsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
