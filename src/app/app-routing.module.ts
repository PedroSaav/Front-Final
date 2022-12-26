import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './componentes/paginas/about/about.component';
import { BlogComponent } from './componentes/paginas/blog/blog.component';
import { MainComponent } from './componentes/paginas/main/main.component';
import { ContactComponent } from './componentes/paginas/contact/contact.component';
import { formularioComponent } from './componentes/paginas/formulario/formulario.component';
import { CrearFormComponent } from './componentes/paginas/crearform/crearform.component';


const routes: Routes = [
    { path: 'main', component: MainComponent },
    { path: '', component: MainComponent },
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'formulario', component: formularioComponent },
    { path: 'crearform', component: CrearFormComponent },
    { path: 'editar-producto/:id', component: CrearFormComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'main' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule]
})

export class AppRoutingModule { }