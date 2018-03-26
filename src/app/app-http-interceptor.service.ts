import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse
} from '@angular/common/http';
import 'rxjs/add/operator/do';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/catch';
import { Subject } from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {SubjectService} from './set-data.service';




@Injectable()
export class AuthInterceptorService {

  counter = 0;
  shallShow = false;
  constructor(private _subj: SubjectService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.indexOf('.typicode.com') !== -1) {
      this.counter++;
      this._subj.setFlagValue(this.counter);
      console.log('show', this.counter, req);

      return next
          .handle(req)
          .do(event => {
              console.log('detecting event ', event);
              if (event instanceof HttpResponse) {
                this.counter--;
                this._subj.setFlagValue(this.counter);
                console.log('detecting http response');
                console.log('hide', this.counter);
              }
          });
    }
  }
}
