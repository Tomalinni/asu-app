import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { from } from 'rxjs';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './view/header/header.component';
import { FooterComponent } from './view/footer/footer.component';
import { DocumentsComponent } from './documents/documents.component';
import { PhotosComponent } from './photos/photos.component';
import { SigninComponent } from './signin/signin.component';
import { ShareholdersComponent } from './shareholders/shareholders.component';
import { ShopsComponent } from './shops/shops.component';
import { ProductionComponent } from './production/production.component';


const appRoutes: Routes = [
      { path: '', component: MainComponent },
      { path: 'vacancies', component: VacancyComponent},
      { path: 'contacts', component: ContactsComponent},
      { path: 'documents', component: DocumentsComponent},
      { path: 'photos', component: PhotosComponent},
      { path: 'signin', component: SigninComponent},
      { path: 'shareholders', component: ShareholdersComponent},
      { path: 'shops', component: ShopsComponent},
      { path: 'production', component: ProductionComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    VacancyComponent,
    MainComponent,
    HeaderComponent,
    FooterComponent,
    DocumentsComponent,
    PhotosComponent,
    SigninComponent,
    ShareholdersComponent,
    ShopsComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule, 
    RouterModule.forRoot(appRoutes),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
