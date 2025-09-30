import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  template: `
  <div class="alert alert-success notification-div" [hidden]="displayNotification">
    <p>This website uses cookies to provide................</p>
    <div class="=close"><button class="btn btn-danger" (click)="closeNotification()">X</button></div>
  </div>`,
  styles: [`.notification-div{margin:10px 0px; padding: 0px 20px;  text-align:center;display:flex; justify-content:center; align-items: center; height: 40px }','p{font-size: 16px; margin: 0; padding: 0;}, .close{float:right; margin-top: -15px;}`]})
export class Notification {

displayNotification: boolean = false;
closeNotification(){
  this.displayNotification = true;
}
}
//background-color:#FAD7A0;