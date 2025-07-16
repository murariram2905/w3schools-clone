import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  standalone: false,
  templateUrl: './javascript.component.html',
  styleUrl: './javascript.component.scss'
})
export class JavascriptComponent implements OnInit {
  jsMenu: any = [{name: 'JS Introduction', route: '/javascript/introduction'},
                  {name: 'JS Statements', route: '/javascript/statements'},
                  {name: 'JS Syntax', route: '/javascript/syntax'},
                  {name: 'JS Comments', route: '/javascript/comments'},
                  {name: 'JS Variables', route: '/javascript/variables'},
                  {name: 'JS Datatypes', route: '/javascript/datatypes'},
                  {name: 'JS Functions', route: '/javascript/functions'},
                  {name: 'JS Objects', route: '/javascript/objects'},
                  {name: 'JS Loops', route: '/javascript/loops'}
  ]
ngOnInit(): void {
  
}
}
