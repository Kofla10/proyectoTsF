import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface
import { Marketing } from '../../model/marketing';
import { ConexionService } from '../../services/conexion.service';

// importamos angular fireStore

import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss'],
})
export class MarketingPage implements OnInit {

  formMarketing: FormGroup;
  marketing = new Marketing();

  constructor(
    private formbuilder: FormBuilder,
    private ser: ConexionService,
    private fire: AngularFirestore
  ) {
    this.ser.ListMarketing();
  }

  ngOnInit() {
    this.initMarketing();
  }

  initMarketing() {
    this.formMarketing = this.formbuilder.group({
      // 'marketing': [this.marketing.marketing, [Validators.required]],
      'comentario': [this.marketing.comentario, [Validators.required]],
      'calificacion': [this.marketing.calificacion, [Validators.required]]
    });
  }

  addMarketing() {
    if (this.formMarketing.invalid) {
      console.log('El formulario es invalido');
    } else {
      this.fire.collection('marketing').add(this.formMarketing.value).then(ref => {
        console.log('El id agregado es: ', ref.id);
      });
    }

  }

}
