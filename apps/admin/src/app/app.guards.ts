import { Injectable } from '@angular/core'
import { CanActivate } from '@angular/router'

import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'

import { UiService } from '@colmena/admin-ui'


@Injectable()
export class UserLoggedIn implements CanActivate {

  constructor(
    private store: Store<any>,
  ) {}

  public canActivate(): Observable<boolean> {
    return this.store
      .select('auth')
      .map((res: any) => res.loggedIn)
      .take(1)
  }
}
