import { Component } from '@angular/core';

@Component({
  selector: 'app-functions',
  standalone: false,
  templateUrl: './functions.component.html',
  styleUrl: './functions.component.scss'
})
export class FunctionsComponent {

    output: string = 'Click the button to run the function.';

  greetUser(): void {
    const name = "Murari";
    const greeting = this.sayHello(name);
    this.output = greeting;
  }

  sayHello(userName: string): string {
    return `Hello, ${userName}! Welcome to JavaScript functions.`;
  }

}
