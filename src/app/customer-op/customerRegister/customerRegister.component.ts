import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';

import { RegisterCustomer } from 'src/models/registerCustomer';
import { CustromerAuthService } from 'src/services/custromerAuth.service';

@Component({
  selector: 'app-customerRegister',
  templateUrl: './customerRegister.component.html',
  styleUrls: ['./customerRegister.component.css'],
  providers: [CustromerAuthService],
})
export class CustomerRegisterComponent implements OnInit {
  constructor(
    private customerAuthService: CustromerAuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  registerCustomer!: RegisterCustomer;
  registerForm!: FormGroup;

  ngOnInit() {
    this.saveCustomerForm();
  }

  saveCustomerForm() {
    this.registerForm = this.formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      userName: [
        '',
        Validators.compose([Validators.required, Validators.minLength(4)]),
      ],
      password: [
        '',
        Validators.compose([Validators.required, Validators.minLength(6)]),
      ],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      address: ['', Validators.required],
      payment: ['', Validators.required],
    });
  }
  add() {
    if (this.registerForm.valid) {
      this.registerCustomer = Object.assign({}, this.registerForm?.value);
      this.customerAuthService.register(this.registerCustomer);
    } else alert('Please fill the form completely ');
  }
}
