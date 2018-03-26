import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { AuthInterceptorService } from './app-http-interceptor.service';
import {Subscription} from 'rxjs/Subscription';
import {SubjectService} from './set-data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  shallShow = false;
  subscription: Subscription;
  item: number;


  constructor(private _http: HttpClient, private _interceptor: AuthInterceptorService, private _subj:SubjectService) {}
  ngOnInit() {
    this.subscription = this._subj.navItem$
    .subscribe(item => {
      this.item = item;
      this.shallShow = item > 0;
      console.log(item);
    });
    this._http.request('GET', 'https://jsonplaceholder.typicode.com/posts/1').subscribe(
      (data) => {
        console.log(data);
        console.log(this._interceptor.counter);
    },
    (err) => {
      console.log(err);
    }
  );
  }

  sendNav() {
    this._subj.changeNav(5);
  }
}
