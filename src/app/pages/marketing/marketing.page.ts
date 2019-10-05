import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface
import { Marketing } from '../../model/marketing';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss'],
})
export class MarketingPage implements OnInit {

  form: FormGroup;
  marketing = new Marketing();

  constructor(private formbuilder: FormBuilder, private ser: ConexionService) {
    this.ser.ListMarketing();
   }

  ngOnInit() {
    this.initMarketing();
  }

  initMarketing() {
    this.form = this.formbuilder.group({
      // 'marketing': [this.marketing.marketing, [Validators.required]],
      'comentario': [this.marketing.comentario, [Validators.required]],
      'calificacion': [this.marketing.calificacion, [Validators.required]]
    });
  }

}
