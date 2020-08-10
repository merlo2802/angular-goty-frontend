import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.scss']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
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
  intervalo;
  view: any[] = [700, 400];
  //opciones 
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

  constructor() {
    const newResult = [...this.results];
    this.intervalo = setInterval(() => {
      for(let i in newResult) {
        newResult[i].value =Math.round(Math.random() * 500);
      }
      this.results = [...newResult];
    }, 1500);
  }

  onSelect(event) {
    console.log(event);
  }
  ngOnDestroy() {
    clearInterval(this.intervalo);
  }
}