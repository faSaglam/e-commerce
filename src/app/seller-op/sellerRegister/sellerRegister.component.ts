import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
  FormGroup,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterSeller } from 'src/models/registerSeller';
import { SellerAuthService } from 'src/services/sellerAuth.service';

@Component({
  selector: 'app-sellerRegister',
  templateUrl: './sellerRegister.component.html',
  styleUrls: ['./sellerRegister.component.css'],
})
export class SellerRegisterComponent implements OnInit {
  constructor(
    private sellerAuthService: SellerAuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}
  registerSeller!: RegisterSeller;
  registerForm!: FormGroup;

  ngOnInit() {
    this.saveSellerForm();
  }

  saveSellerForm() {
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
      this.registerSeller = Object.assign({}, this.registerForm?.value);
      this.sellerAuthService.register(this.registerSeller);
    } else alert('Please fill the form completely ');
  }
}
