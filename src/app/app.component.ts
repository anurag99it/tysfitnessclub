import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppComponent {
  courses = [
    { name: 'Vinyasa Flow', description: 'Dynamic yoga with breath-synchronized movements.', price: '$30', instructor: 'Anika Sharma' },
    { name: 'Hatha Basics', description: 'Perfect for beginners, focusing on alignment and posture.', price: '$25', instructor: 'Raj Patel' },
    { name: 'Power Yoga', description: 'High-intensity session for strength and flexibility.', price: '$35', instructor: 'Liam Verma' },
    { name: 'Yin Yoga', description: 'Deep stretch, relax, and unwind your body and mind.', price: '$28', instructor: 'Maya Kapoor' }
  ];
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
