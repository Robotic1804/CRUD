import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParenCComponent } from './paren-c/paren-c.component';
import { CaracteristicaEmpComponent } from './caracteristica-emp/caracteristica-emp.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectosCompComponent } from './proyectos-comp/proyectos-comp.component';
import { QuienesSomosCompComponent } from './quienes-somos-comp/quienes-somos-comp.component';
import { ContactoCompComponent } from './contacto-comp/contacto-comp.component';
import { RouterModule, Routes } from '@angular/router';
import { ActualizaComponenteComponent } from './actualiza-componente/actualiza-componente.component';
import { ErrorPersonalizadoComponent } from './error-personalizado/error-personalizado.component';
import { DataServices } from './data.services';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  
  { path: '', component: HomeComponentComponent },
  { path: 'proyectos', component: ProyectosCompComponent },
  { path: 'quienes', component: QuienesSomosCompComponent },
  { path: 'contacto', component: ContactoCompComponent },
  { path: 'actualiza/:id', component: ActualizaComponenteComponent },
  { path: '**', component: ErrorPersonalizadoComponent }

];


@NgModule({
  declarations: [
    AppComponent,
    ParenCComponent,
    CaracteristicaEmpComponent,
    HomeComponentComponent,
    ProyectosCompComponent,
    QuienesSomosCompComponent,
    ContactoCompComponent,
    ActualizaComponenteComponent,
    ErrorPersonalizadoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [ServicioEmpleadosService, EmpleadosService, DataServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
