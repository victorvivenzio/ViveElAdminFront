import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  public router: any;
  constructor( private _router: Router ) {
    this.router = _router;
  }
  ngOnInit() {
  }
}
