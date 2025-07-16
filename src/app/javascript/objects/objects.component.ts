import { Component } from '@angular/core';

@Component({
  selector: 'app-objects',
  standalone: false,
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.scss'
})
export class ObjectsComponent {

    output: string = 'Click the button to show object data.';

  showObject(): void {
    const person = {
      firstName: 'Ramakrishna',
      lastName: 'Murari',
      age: 24,
      fullName(): string {
        return this.firstName + ' ' + this.lastName;
      }
    };

    this.output = `
      Name: ${person.fullName()}<br>
      Age: ${person.age}
    `;
  }

}
