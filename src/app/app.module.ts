import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatToolbarModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatTableModule, MatFormFieldControl, MatSelect, MatCheckbox, MatCheckboxModule } from '@angular/material'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './services/auth.service';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventIndexComponent } from './components/event/event-index/event-index.component';
import { EventsService } from './services/events.service';
import { EventCreateComponent } from './components/event/event-create/event-create.component';
import { EventDetailComponent } from './components/event/event-detail/event-detail.component';
import { EventEditComponent } from './components/event/event-edit/event-edit.component';
import { EventDeleteComponent } from './components/event/event-delete/event-delete.component';
import { WelcomeComponent } from './components/homepage/welcome.component';
import { AuthGuard } from './guards/auth.guard';
import { PersonCreateComponent } from './components/person/person-create/person-create.component';
import { PersonDeleteComponent } from './components/person/person-delete/person-delete.component';
import { PersonDetailComponent } from './components/person/person-detail/person-detail.component';
import { PersonEditComponent } from './components/person/person-edit/person-edit.component';
import { PersonIndexComponent } from './components/person/person-index/person-index.component';
import { PersonService } from './services/person.service';

const routes = [
  { path: '', component: WelcomeComponent},
  { path: 'register', component: RegistrationComponent },
  { path: 'login', component: LoginComponent},
  { path: 'person',canActivate: [AuthGuard],children: [
    { path: '', component: PersonIndexComponent},
    { path: 'create', component: PersonCreateComponent},
    { path: 'detail/:id', component: PersonDetailComponent},
    { path: 'edit/:id', component: PersonEditComponent},
    { path: 'delete/:id', component: PersonDeleteComponent}
    ]},
  { 
    path: 'events' ,canActivate: [AuthGuard],children: [
    { path: '', component: EventIndexComponent},
    { path: 'create', component: EventCreateComponent},
    { path: 'detail/:id', component: EventDetailComponent},
    { path: 'edit/:id', component: EventEditComponent},
    { path: 'delete/:id', component: EventDeleteComponent}
    ]
  },
  { path: '**', component: RegistrationComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    RegistrationComponent,
    LoginComponent,
    EventIndexComponent,
    EventCreateComponent,
    EventDetailComponent,
    EventEditComponent,
    EventDeleteComponent,
    PersonCreateComponent,
    PersonDeleteComponent,
    PersonDetailComponent,
    PersonEditComponent,
    PersonIndexComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatButtonModule,
    
    // MatSelect,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthService,
    EventsService,
    PersonService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
