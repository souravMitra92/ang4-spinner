import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';





@Injectable()
export class SubjectService {

  private _navItemSource = new BehaviorSubject<number>(0);
  navItem$ = this._navItemSource.asObservable();
changeNav(number) {
    this._navItemSource.next(number);
  }
  setFlagValue(number) {
    this._navItemSource.next(number);
  }
  constructor() {
  }
}
