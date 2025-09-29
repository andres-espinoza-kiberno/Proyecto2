import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css'
})
export class Search {

searchValue: string= '';

changeSearchValue(eventData: any){
  console.log(<HTMLInputElement>eventData.target.value)
}

}
