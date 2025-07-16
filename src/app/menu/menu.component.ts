import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent implements OnInit{
  showMenu: boolean = true;
  menu: any = [{name: 'html', id: 1, route: '/html', isActive: true},
  {name: 'css', id: 2, route: '/css', isActive: true},
  {name: 'javascript', id: 3, route: '/javascript', isActive: true}
  ]
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

   selectModule(module: string) {
    this.router.navigate([`/${module}/introduction`]);
  }
}
