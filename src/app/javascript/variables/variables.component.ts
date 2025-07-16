import { Component } from '@angular/core';

@Component({
  selector: 'app-variables',
  standalone: false,
  templateUrl: './variables.component.html',
  styleUrl: './variables.component.scss'
})
export class VariablesComponent {

    output: string = 'Click the button to see result.';

  runVariableDemo(): void {
    let name = "Murari";
    const age = 24;
    var status = "Learning JavaScript";
    this.output = `${name} is ${age} years old and is ${status}`;
  }
}


