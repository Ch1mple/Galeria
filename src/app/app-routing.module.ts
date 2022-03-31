import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { DetallesfotoComponent } from './components/detallesfoto/detallesfoto.component';
import { FotosComponent } from './components/fotos/fotos.component';
import { TodosComponent } from './components/todos/todos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';


const routes: Routes = [
  { path: 'comentarios', component: ComentariosComponent },
  { path: 'fotos', component: FotosComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'usuarios', component: UsuariosComponent},
  { path: 'detallesfoto/:id', component: DetallesfotoComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
