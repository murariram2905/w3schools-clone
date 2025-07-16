import { Component } from '@angular/core';

@Component({
  selector: 'app-loops',
  standalone: false,
  templateUrl: './loops.component.html',
  styleUrl: './loops.component.scss'
})
export class LoopsComponent {

  output: string = 'Click the button to run loop examples.';

  runLoops(): void {
    let result = '<strong>For Loop:</strong><br>';
    for (let i = 1; i <= 5; i++) {
      result += `i = ${i}<br>`;
    }

    result += '<br><strong>While Loop:</strong><br>';
    let j = 1;
    while (j <= 3) {
      result += `j = ${j}<br>`;
      j++;
    }

    result += '<br><strong>For...of Loop:</strong><br>';
    const fruits = ['Apple', 'Banana', 'Mango'];
    for (const fruit of fruits) {
      result += `Fruit: ${fruit}<br>`;
    }

    this.output = result;
  }

}
