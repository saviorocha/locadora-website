import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  opened = false;
  btnText: string = "navigate_next";
  
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    this.opened = !this.opened;
    // console.log(this.opened);
    this.btnText = 
      this.btnText == 'navigate_next' 
        ? 'navigate_before' 
        : 'navigate_next';
  }

}
