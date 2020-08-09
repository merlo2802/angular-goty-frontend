import { Component} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent {
  results: any[] = [
    {
      "name": "juego 1",
      "value": 20
    },
    {
      "name": "juego 2",
      "value": 25
    },
    {
      "name": "juego 3",
      "value": 15
    },
    {
      "name": "juego 4",
      "value": 30
    }
  ];

  view: any[] = [700, 400];

  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  // colorScheme = {
  //   domain: 'nightLights'
  // };
  colorScheme = 'nightLights';

  constructor() {}

  onSelect(event) {
    console.log(event);
  }
}