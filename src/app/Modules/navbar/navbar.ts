import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isMenuOpen: boolean = false;

  constructor() { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
