import { Component, Input } from '@angular/core';

import { MainPageComponent } from '../main-page/main-page.component';



@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent{

  @Input() personajes:any[] =[];
}
