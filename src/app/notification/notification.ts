import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  standalone: false,
  template: '<div class="alert alert-success notification-div" [hidden]="displayNotification"><p>This website uses cookies to provide................</p></div>',
  styles: ['.notification-div{margin:10px 0px; padding: 0px 20px;  text-align:center;display:flex; justify-content:center; align-items: center; height: 40px }','p{font-size: 16px; margin: 0; padding: 0;}']})
export class Notification {

displayNotification: boolean = false;
}
//background-color:#FAD7A0;