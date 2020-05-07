import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { MonPublicationComponent } from './publication/mon-publication.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppareilService} from './services/appareil.service';
import { MonAccueilComponent } from './accueil/accueil.component';
import {Routes} from '@angular/router/src/config';
import {RouterModule} from '@angular/router';
import {AuthService} from './services/Auth.service';
import { ContactComponent } from './contact/contact.component';
import { CeremoniesComponent } from './ceremonies/ceremonies.component';


const appRoutes: Routes = [
  { path: 'contact', component: ContactComponent},
  { path: 'publication', component: MonPublicationComponent},
  { path: '', component: MonAccueilComponent},
  { path: 'ceremonies', component: CeremoniesComponent},
  // { path: '', component: AppareilComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    MonAccueilComponent,
    MonPublicationComponent,
    ContactComponent,
    CeremoniesComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    AuthService
  ],
  bootstrap: [AppComponent, MonPublicationComponent,ContactComponent,CeremoniesComponent,MonAccueilComponent],

})
export class AppModule {




}
