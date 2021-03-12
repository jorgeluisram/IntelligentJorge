import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preguntas-frecuentes',
  templateUrl: './preguntas-frecuentes.page.html',
  styleUrls: ['./preguntas-frecuentes.page.scss'],
})
export class PreguntasFrecuentesPage implements OnInit {
  segmentModel = "favorites";
  constructor() { }

  ngOnInit() {
  }
  segmentChanged(event){
    console.log(this.segmentModel);
    
    console.log(event);
  }

  cambiopaso(paso){
    debugger
    this.segmentModel =paso
  }


}
