import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  standalone: false,
  templateUrl: './css.component.html',
  styleUrl: './css.component.scss'
})
export class CssComponent implements OnInit {

  cssMenu: any = [{name: 'CSS Introduction', route: '/css/introduction'},
                  {name: 'CSS Selectors', route: '/css/selectors'},
                  {name: 'CSS Comments', route: '/css/comments'},
                  {name: 'CSS Box Model', route: '/css/boxmodel'},
                  {name: 'CSS Errors', route: '/css/errors'},
                  {name: 'CSS Colors', route: '/css/colors'},
                  {name: 'CSS Tables', route: '/css/tables'},
                  {name: 'CSS Lists', route: '/css/lists'},
                  {name: 'CSS Float', route: '/css/float'},
                  {name: 'CSS Position', route: '/css/position'},
                  {name: 'CSS Display', route: '/css/display'},
    
  ]
  ngOnInit(): void {
    
  }
}
