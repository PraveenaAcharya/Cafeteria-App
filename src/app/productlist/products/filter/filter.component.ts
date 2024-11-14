import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.css'
})
export class FilterComponent {

  @Input()
  all: number =0;
  @Input()
  inStock:number =0;
  @Input()
  OutStock:number=0;

  @Output()
  selectedFilterRadioButtonChange : EventEmitter<string> = new EventEmitter<string>();

  selectedFilterRadioButton : string ='All';
  //raising custom event
  onSelectedFilterRadioButtonChange(){
    this.selectedFilterRadioButtonChange.emit(this.selectedFilterRadioButton);

  }
}
