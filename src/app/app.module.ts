import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {ContactListComponent} from './contact/contact-list/contact-list.component';
import {ContactService} from './contact/services/contact.service';
import {ContactHttpService} from './contact/services/contact-http.service';
import {HttpClientModule} from '@angular/common/http';
import {ContactDetailComponent} from './contact/contact-detail/contact-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialComponentsModule} from './ui/material-components/material-components.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import {AvatarModule} from 'ng2-avatar';
import {TextToColorPipe} from './contact/pipes/text-to-color.pipe';
import {NgPipesModule} from 'ngx-pipes';
import {ToolbarService} from './UI/toolbar.service';
import { LoginComponent } from './user/login/login.component';
import {AuthenticationService} from './user/services/authentication.service';
import {TokenService} from './user/services/token.service';
import {ToolbarComponent} from './UI/toolbar/toolbar.component';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';
import { ErrorDialogComponent } from './UI/error-dialog/error-dialog.component';
import {DialogService} from './UI/services/dialog.service';


const appRoutes: Routes = [
  {path: 'contacts', component: ContactListComponent},
  {path: 'contacts/new', component: ContactDetailComponent},
  {path: 'contacts/:id', component: ContactDetailComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailComponent,
    TextToColorPipe,
    ToolbarComponent,
    LoginComponent,
    ErrorDialogComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MaterialComponentsModule,
    FlexLayoutModule,
    AvatarModule.forRoot(),
    NgPipesModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [
    ContactService,
    ContactHttpService,
    ToolbarService,
    AuthenticationService,
    TokenService,
    DialogService

  ],
  entryComponents: [
    ErrorDialogComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {
}

