import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { ProduitDetailComponent } from './pages/produit-detail/produit-detail.component';
import { HeroComponent } from './shared/hero/hero.component';
import { ModalComponent } from './shared/modal/modal.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TemoignageComponent } from './pages/temoignage/temoignage.component';
import { TemoignageFormComponent } from './shared/temoignage-form/temoignage-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    AcceuilComponent,
    ProduitDetailComponent,
    HeroComponent,
    ModalComponent,
    AproposComponent,
    ContactComponent,
    NotfoundComponent,
    TemoignageComponent,
    TemoignageFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
