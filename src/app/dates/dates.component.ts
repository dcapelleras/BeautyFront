import { Component } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent {
  CancelDate() {/* cancel date */}
  dates = [];
  //crear date con {tratamiento, fecha, hora, trabajador}
}
