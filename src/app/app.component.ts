import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'recipe';

  onNavigate(feature) {
    //console.log('new header view = ' + newHeaderView);
    this.loadedFeature = feature;
  }
}
