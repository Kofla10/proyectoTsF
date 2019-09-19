import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface
import { Marketing } from '../../interfaces/marketing';

@Component({
  selector: 'app-marketing',
  templateUrl: './marketing.page.html',
  styleUrls: ['./marketing.page.scss'],
})
export class MarketingPage implements OnInit {

  form: FormGroup;
  marketing = new Marketing();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initMarketing();
  }

  initMarketing() {
    this.form = this.formbuilder.group({
      'idMarketing': [this.marketing.idMarketing, [Validators.required]],
      'comentario': [this.marketing.comentario, [Validators.required]],
      'calificacion': [this.marketing.calificacion, [Validators.required]]
    });
  }

}
