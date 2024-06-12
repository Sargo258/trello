import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent implements OnInit {

  @Input() typeBtn: 'button' | 'reset' | 'submit' = 'button';
  @Input() color = 'primary';


  constructor() {}

  ngOnInit(): void {
  }

  //gray-light
  get colors() {
    return {
      'text-white': this.color === 'success' || this.color === 'primary' || this.color === 'red',
      'text-gray-700': this.color === 'red',
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-400': this.color === 'primary',
      'focus:ring-4-primary-300': this.color === 'primary',
      'bg-success-600': this.color === 'success',
      'hover:bg-success-400': this.color === 'success', 
      'focus:ring-success-300': this.color === 'success',
      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red', 
      'focus:ring-red-300': this.color === 'red',
      'bg-gray-300': this.color === 'gray-light',
      'hover:bg-gray-500': this.color === 'gray-light', 
      'focus:ring-gray-50': this.color === 'gray-light',
    };
  }
}
