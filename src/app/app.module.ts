import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
// import { ValidationComponent } from './validation/validation.component';
import { RegistrationModule } from './registration/registration.module';
@NgModule({
  declarations: [
    AppComponent,
    // ValidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RegistrationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
