import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-html-introduction',
  standalone: false,
  templateUrl: './html-introduction.component.html',
  styleUrl: './html-introduction.component.scss'
})
export class HtmlIntroductionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Method to navigate to the next component (e.g., HTML Basics)
  goToNextLesson(): void {
    this.router.navigate(['/html/basics']); // Navigate to the 'html-basics' route
  }
}