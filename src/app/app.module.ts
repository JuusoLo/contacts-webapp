import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { ContactListComponent } from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/Services/contact.service';
import {HttpClientModule} from '@angular/common/http';
import { ContactDetailComponent } from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './UI/material-components/material-components.module';


const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: '', redirectTo: '/contacts', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
