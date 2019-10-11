import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'producto',
    pathMatch: 'full'
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
    path: 'viewproductoscliente',
    loadChildren: './view/view-producto-cliente/view-producto-cliente.module#ViewProductoClientePageModule'
  },
  {
    path: 'viewpromocioncliente',
    loadChildren: './view/view-promocion-cliente/view-promocion-cliente.module#ViewPromocionClientePageModule'
  },
  {
    path: 'viewmenu',
    loadChildren: './view/view-menu/view-menu.module#ViewMenuPageModule'
  },
  {
    path: 'usuario',
    loadChildren: () => import('./pages/usuario/usuario.module').then(m => m.UsuarioPageModule)
  },
  {
    path: 'login',
    loadChildren: './auth/login/login.module#LoginPageModule'
  },
  { path: 'view-promocion-cliente', loadChildren: './view/view-promocion-cliente/view-promocion-cliente.module#ViewPromocionClientePageModule' },
  { path: 'view-producto-cliente', loadChildren: './view/view-producto-cliente/view-producto-cliente.module#ViewProductoClientePageModule' },
  { path: 'view-menu', loadChildren: './view/view-menu/view-menu.module#ViewMenuPageModule' },
  { path: 'view-card-promociones', loadChildren: './view/view-card-promociones/view-card-promociones.module#ViewCardPromocionesPageModule' },
  { path: 'view-card-producto', loadChildren: './view/view-card-producto/view-card-producto.module#ViewCardProductoPageModule' },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
