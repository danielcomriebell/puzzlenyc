import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit {
  splashActive:boolean=false;
  moveText:boolean=false;

  constructor( private cookieService: CookieService ) { }

  ngOnInit(): void {
    if(this.cookieService.get('five') === 'true'){
      this.splashActive = true;
      this.moveText = true;
    }
    else{
      this.splashActive = false;
      this.moveText = false;
    }
  }
  //
  // removeSplash(){
  //   // this.cookieService.set( 'somethingElse2', true );
  //   // this.splashActive = this.cookieService.get('somethingElse2');
  //   // console.log(this.splashActive);
  //   // this.splashActive = this.cookieService.get('Test');
  //   // console.log(this.cookieService.get('Test'));
  // }


  movetheText(){
    this.cookieService.set('five', 'true' );
    this.moveText = true;
    setTimeout(()=>{
      this.splashActive = true;
    }, 1000);
  }

}
