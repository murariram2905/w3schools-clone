import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-menu',
  standalone: false,
  templateUrl: './left-menu.component.html',
  styleUrl: './left-menu.component.scss'
})
export class LeftMenuComponent implements OnInit {
  @Input() menu: any;


  ngOnInit(): void {
    
  }

}
