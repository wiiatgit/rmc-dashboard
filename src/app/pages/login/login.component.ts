import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { first } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/state/app.state';

@Component({
  selector: 'rmc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  emailCtrl: FormControl;
  passwordCtrl: FormControl;
  returnUrl: string;
  loading: boolean;
  error: string;
  passwordMinLength = {value: 4};

  constructor(
    private fb: FormBuilder,
    private loginServices: LoginService,
    private router: Router,
    private route: ActivatedRoute,
    private store: Store<IAppState>,
    private ref: ChangeDetectorRef
  ) {

    this.emailCtrl = new FormControl('', [Validators.required, Validators.email]);
    this.passwordCtrl = new FormControl('', [Validators.required, Validators.minLength(this.passwordMinLength.value)]);

    this.loginForm = this.fb.group({
        email: this.emailCtrl,
        password: this.passwordCtrl
    });
  }

  ngOnInit() {
    // reset error
    this.error = '';
    // reset login status
    this.loginServices.logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    if (!this.loginForm.invalid) {
      this.loading = true;
      this.error = '';
      this.loginServices.login(this.emailCtrl.value, this.passwordCtrl.value)
          .pipe(first())
          .subscribe(
            () => {
              this.loading = false;
              this.router.navigate([this.returnUrl]);
            }, (errorMessage: string) => {
              this.loading = false;
              this.error = errorMessage;
              this.ref.detectChanges();
            })
          ;
    }
  }
}
