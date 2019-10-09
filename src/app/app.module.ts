import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'; // importamos el http pero ya no es necesario
import { AngularFireModule } from '@angular/fire'; // importamos libreria de angular
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConexionService } from './services/conexion.service'; // importamos el servicio para injectarlo
// import Swal from 'sweetalert2'; // importamos sweetalert2 para las alertas

// el apikey para la conexion con firebase
export const firebaseConfig = {
  apiKey: "AIzaSyDgp_HFU7IfpVrBu1GJuzWQbzg1FHPmicY",
  authDomain: "tesis-e1b37.firebaseapp.com",
  databaseURL: "https://tesis-e1b37.firebaseio.com",
  projectId: "tesis-e1b37",
  storageBucket: "tesis-e1b37.appspot.com",
  messagingSenderId: "258910574877",
  appId: "1:258910574877:web:7544b554320d51b60f29f4"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    HttpClientModule
  ],
  providers: [
    ConexionService,
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// enlace de documentacion de angular
// https://github.com/angular/angularfire2/blob/master/docs/install-and-setup.md

