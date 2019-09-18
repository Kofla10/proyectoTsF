import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'usuario',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'categoria',
    loadChildren: './pages/categoria/categoria.module#CategoriaPageModule'
  },
  {
    path: 'detalle-producto',
    loadChildren: './pages/detalle-producto/detalle-producto.module#DetalleProductoPageModule'
  },
  {
    path: 'marketing',
    loadChildren: './pages/marketing/marketing.module#MarketingPageModule'
  },
  {
    path: 'pedido',
    loadChildren: './pages/pedido/pedido.module#PedidoPageModule'
  },
  {
    path: 'producto',
    loadChildren: './pages/producto/producto.module#ProductoPageModule'
  },
  {
    path: 'promocion',
    loadChildren: './pages/promocion/promocion.module#PromocionPageModule'
  },
  {
    path: 'trazabilidad',
    loadChildren: './pages/trazabilidad/trazabilidad.module#TrazabilidadPageModule'
  },
  {
    path: 'usuario',
    loadChildren: './pages/usuario/usuario.module#UsuarioPageModule'
  },
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginPageModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
