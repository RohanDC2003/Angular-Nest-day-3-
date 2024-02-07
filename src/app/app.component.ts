import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BedroomComponent } from './component/bedroom/bedroom.component';
import { HallComponent } from './component/hall/hall.component';
import { KitchenComponent } from './component/kitchen/kitchen.component';
import { BathroomComponent } from './component/bathroom/bathroom.component';
import { WashComponent } from './component/wash/wash.component';
import { ToiletComponent } from './component/toilet/toilet.component';
import { PorchComponent } from './component/porch/porch.component';
import { DressComponent } from './component/dress/dress.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BedroomComponent,HallComponent,KitchenComponent,BathroomComponent,WashComponent,ToiletComponent,PorchComponent,DressComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less'
})
export class AppComponent {
  title = 'fisat';
  name: string="Rohan";
  showData($event: any){ 
    alert("Welcome");
 } 
 email: string ="";
}

