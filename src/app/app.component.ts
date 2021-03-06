import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'angular-course-app';
  loadedFeature: string = ''

  constructor() {}

  recipesClicked() {
    this.loadedFeature = 'recipe'
  }

  shoppingListClicked() {
    this.loadedFeature = 'shopping list'
  }

}
