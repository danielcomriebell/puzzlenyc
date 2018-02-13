import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SplashComponent } from './splash/splash.component';
import { PhilosophyComponent } from './philosophy/philosophy.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { SelectedTransactionsComponent } from './selected-transactions/selected-transactions.component';
import { MenuComponent } from './menu/menu.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { OverviewComponent } from './overview/overview.component';
import { FooterLogoComponent } from './footer-logo/footer-logo.component';
import { MobileLogoComponent } from './mobile-logo/mobile-logo.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    SplashComponent,
    PhilosophyComponent,
    TeamComponent,
    ContactComponent,
    SelectedTransactionsComponent,
    MenuComponent,
    OverviewComponent,
    FooterLogoComponent,
    MobileLogoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'philosophy', component: PhilosophyComponent},
      {path: 'team', component: TeamComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'selected-transactions', component: SelectedTransactionsComponent},
      {path: 'overview', component: OverviewComponent},
      {path: '', redirectTo:'overview', pathMatch:'full'},
    ])
  ],
  providers: [CookieService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
