import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ButtonComponent } from './components/button/button.component';
import { ClientComponent } from './components/client/clients.component';
import { ServiceComponent } from './components/service/service.component';
import { StarsComponent } from './components/stars/stars.component';
import { HandsComponent } from './components/hands/hands.component';
import { AboutComponent } from './components/about/about.component';
import { CasesComponent } from './components/cases/cases.component';
import { ReviewComponent } from './components/review/review.component';
import { FaqComponent } from './components/faq/faq.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { AppComponent } from './app.component';
import { HomePage } from './pages/home/home.component';
import { AboutPage } from './pages/about/about.component';
import { ServicePage } from './pages/services/services.component';
import { ProcessItemComponent } from './components/process-item/process-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    ButtonComponent,
    ClientComponent,
    ServiceComponent,
    StarsComponent,
    HandsComponent,
    AboutComponent,
    CasesComponent,
    ReviewComponent,
    FaqComponent,
    AccordionComponent,
    ContactComponent,
    ErrorComponent,
    FooterComponent,
    HomePage,
    AboutPage,
    ServicePage,
    ProcessItemComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
