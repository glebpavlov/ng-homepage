import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { delay, interval, merge, of, pairwise, share, shareReplay, Subject, switchMap, takeWhile } from "rxjs";
import { map, tap } from "rxjs/operators";

import { AuthFacade } from '../store/auth.facade';

@Component({
  selector: 'nh-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  readonly loginForm = new UntypedFormGroup({
    username: new UntypedFormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
    password: new UntypedFormControl('', {
      validators: [Validators.required, Validators.minLength(3)],
    }),
  });
  lastEndLoadingTime$ = new Subject<Date>();
  nextTrySeconds$ = this.lastEndLoadingTime$.pipe(
    switchMap((endDate: Date) => interval(1000).pipe(
      map(() => parseInt(String(((+new Date()) - (+endDate)) / 1000))),
      map(secondsPassed => this.nextTryAttemptSeconds - secondsPassed),
      takeWhile(secondsLeft => secondsLeft >= 0),
    ))
  );
  isLoading$ = this.authFacade.isLoadingLogin$.pipe(
    pairwise(),
    tap(([prevValue, currentValue]) => prevValue && !currentValue ? this.lastEndLoadingTime$.next(new Date()) : undefined),
    map(([prevValue, currentValue]) => currentValue),
  );
  showLoginError$ = this.authFacade.hasLoginError$
    .pipe(
      switchMap(isError => merge(of(isError), of(false).pipe(delay(this.errorMessageSeconds * 1000)))),
    );

  private nextTryAttemptSeconds: number = 60;
  private errorMessageSeconds: number = 5;
  constructor(private authFacade: AuthFacade) {
  }

  submit() {
    const { username, password } = this.loginForm.value;
    this.authFacade.login(username, password);
  }
}
