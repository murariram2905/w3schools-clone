import { Component } from '@angular/core';

@Component({
  selector: 'app-data-types',
  standalone: false,
  templateUrl: './data-types.component.html',
  styleUrl: './data-types.component.scss'
})
export class DataTypesComponent {

    output: string = 'Click the button to see data types.';

  showDataTypes(): void {
    const name = "Murari";        // string
    const age = 24;               // number
    const isStudent = true;       // boolean
    const cars = ["BMW", "Tata"]; // array
    const person = { firstName: "John", lastName: "Doe" }; // object
    const nothing = null;         // null
    let notDefined;               // undefined

    this.output =
      `String: ${name}<br>` +
      `Number: ${age}<br>` +
      `Boolean: ${isStudent}<br>` +
      `Array: ${cars.join(', ')}<br>` +
      `Object: ${person.firstName} ${person.lastName}<br>` +
      `Null: ${nothing}<br>` +
      `Undefined: ${notDefined}`;
  }

}
