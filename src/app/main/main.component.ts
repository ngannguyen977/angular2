import { Component, OnInit } from '@angular/core';
import { AuthenService } from '../core/services/authen.service';
import { UrlConstants } from '../core/common/url.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private _authenService: AuthenService, private _router:Router) { }

  ngOnInit() {
    let loggedIn = this._authenService.isUserAuthenticated();
    if(loggedIn == false){
      this._router.navigate([UrlConstants.LOGIN])
    }
  }

}
