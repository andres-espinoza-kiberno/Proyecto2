import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
slogan: string ='iquibusdam aspernatur illum quis!'
source: string="./shop.jpg"

getslogan(){
  return 'This is a new slogan for this web application'
}
}
