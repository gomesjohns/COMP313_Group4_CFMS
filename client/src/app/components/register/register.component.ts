import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from "../../models/user";
import { AccountService } from "../../services/account.service";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  message;
  errorMessage;

  // setup simple regex for white listed characters
  validCharacters = /[^\s\w,.:&\/()+%'`@-]/;

  constructor(private accountService: AccountService, private formBuilder: FormBuilder, private router: Router) {
    this.createForm();
  }


  createForm()
  {
    this.form= this.formBuilder.group // Create Angular 2 Form when component loads
    ({
      firstName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      lastName: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      email: ['',  Validators.compose([Validators.required, Validators.email])],
      passwords: this.formBuilder.group
      ({
        password: ['', Validators.required],
        confirmPass: ['', Validators.required]
      }, {validator: this.matchingPass('password', 'confirmPass')}),// Add custom validator to form for matching passwords
    })
  }

  //Register user
  registerUser()
  {
    const user = new User
    (
      this.form.value.firstName,
      this.form.value.lastName,
      this.form.value.email,
      this.form.value.passwords.password
    );

    this.accountService.register(user).subscribe(res =>
    {
      if (res.userId)
      {
        this.message= res.userId;
        this.form.reset();
      }
      if (res.error)
      {
        this.errorMessage= "Could not register user";
      }
    });
  }

  //Function to ensure passwords match
  matchingPass(password, confirm)
  {
    return (group: FormGroup) =>
    {
      if (group.controls[password].value === group.controls[confirm].value)
      {
        return null; // Return as a match
      }
      else
      {
        return {'matchingPass': true}; // Return as error: do not match
      }
    }
  }

  ngOnInit()
  {}

}
