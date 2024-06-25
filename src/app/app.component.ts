import { Component } from '@angular/core';
import { HeaderComponent } from './header/Header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
