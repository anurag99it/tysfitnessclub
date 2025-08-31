import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  courses = [
    { name: 'Vinyasa Flow', description: 'Dynamic yoga with breath-synchronized movements.', price: '$30', instructor: 'Anika Sharma' },
    { name: 'Hatha Basics', description: 'Perfect for beginners, focusing on alignment and posture.', price: '$25', instructor: 'Raj Patel' },
    { name: 'Power Yoga', description: 'High-intensity session for strength and flexibility.', price: '$35', instructor: 'Liam Verma' },
    { name: 'Yin Yoga', description: 'Deep stretch, relax, and unwind your body and mind.', price: '$28', instructor: 'Maya Kapoor' }
  ];

  instructors = [
    { name: 'Anika Sharma', bio: 'Certified yoga instructor with 5+ years of teaching dynamic Vinyasa flows.', photo: 'assets/instructor1.jpg' },
    { name: 'Raj Patel', bio: 'Expert in Hatha yoga, helping beginners find their foundation.', photo: 'assets/instructor2.jpg' },
    { name: 'Liam Verma', bio: 'Power yoga guru, blending strength with mindful movements.', photo: 'assets/instructor3.jpg' }
  ];
}
