import { Component, ElementRef, EventEmitter,Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  @Output()
  searchTextChange : EventEmitter<string> = new EventEmitter<string>();
  searchText : string = '';

//previously we were paasing searchinput as arguemnt in click function now with the help of view child we can access elelment of html
  @ViewChild('searchInput') searchInputEle : ElementRef
  // , {static:true} -- second arguement

  onNameChange(){ // Corrected method signature
    this.searchText = this.searchInputEle.nativeElement.value;
    this.searchTextChange.emit(this.searchText)
  }
  // onSearchTextChange(){
   
  // }

}
