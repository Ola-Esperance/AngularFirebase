import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './pages/acceuil/acceuil.component';
import { AproposComponent } from './pages/apropos/apropos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProduitDetailComponent } from './pages/produit-detail/produit-detail.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { TemoignageComponent } from './pages/temoignage/temoignage.component';
import { TemoignageFormComponent } from './shared/temoignage-form/temoignage-form.component';

const routes: Routes = [
  
  {
    path:'', component:AcceuilComponent
  },
  {
    path:'produit_detail', component:ProduitDetailComponent
  },
  {
    path:'apropos', component:AproposComponent
  },
  {
    path:'temoignage', component:TemoignageComponent
  },
  {
    path:'temoignage_form', component:TemoignageFormComponent
  },
  {
    path:'contact', component:ContactComponent
  },
  {
    path:'notfound', component:NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
