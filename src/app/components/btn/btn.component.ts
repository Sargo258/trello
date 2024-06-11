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

  get colors() {
    return {
      'bg-primary-600': this.color === 'primary',
      'hover:bg-primary-400': this.color === 'primary',
      'focus:ring-4-primary-300': this.color === 'primary',
      'bg-success-600': this.color === 'success',
      'hover:bg-success-400': this.color === 'success', 
      'focus:ring-success-300': this.color === 'success',
    };
  }
}
