import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html',
  standalone: false,
  templateUrl: './html.component.html',
  styleUrl: './html.component.scss'
})
export class HtmlComponent implements OnInit {
    htmlMenu: any = [{name: 'HTML Introduction', route: '/html/introduction'},
                    {name: 'HTML Basics', route: '/html/basics'},
                    {name: 'HTML Elements', route: '/html/elements'},
                    {name: 'HTML Attributes', route: '/html/attributes'},
                    {name: 'HTML Headings', route: '/html/headings'},
                    {name: 'HTML Paragraphs', route: '/html/paragraphs'},
                    {name: 'HTML Comments', route: '/html/comments'},
                    {name: 'HTML Colors', route: '/html/colors'},
                    {name: 'HTML Links', route: '/html/links'},
                    {name: 'HTML Block & Inline', route: '/html/blocl-inline'},
                    {name: 'HTML Div', route: '/html/div'}
                  
                  
                                    
                  ];
 
 
  ngOnInit(): void {
    
  }

}
