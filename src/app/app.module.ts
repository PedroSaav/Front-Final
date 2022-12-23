import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// componentes
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { MainComponent } from './componentes/paginas/main/main.component';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactComponent } from './componentes/paginas/contact/contact.component';
import { CrearFormComponent } from './componentes/paginas/crearform/crearform.component';
import { formularioComponent } from './componentes/paginas/formulario/formulario.component';



import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    MainComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    CrearFormComponent,
    formularioComponent
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
