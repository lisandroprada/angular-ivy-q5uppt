import { Component, VERSION } from '@angular/core';

import { DATA } from './datos';

interface Data {
  color: string;
  forma: string;
  id: number;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  data: Data[] = DATA;
  searchText: string;
}
