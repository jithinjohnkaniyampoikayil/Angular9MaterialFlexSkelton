import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,private authenticationService : AuthenticationService,private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  get f() { return this.loginForm.controls; }

  onSubmit(){
    this.submitted=true;
    if (this.loginForm.invalid) {
      return;
    }
    debugger;
    this.authenticationService.login(this.f.username.value,this.f.password.value)
        .pipe(first())
        .subscribe(
          data => { debugger;
            this.router.navigate([this.returnUrl]);
        },
        error => { debugger;
           /*  this.alertService.error(error);
            this.loading = false; */
        });

  }


}
