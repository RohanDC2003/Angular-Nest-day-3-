import { Component } from '@angular/core';
import { ToiletComponent } from '../toilet/toilet.component';

@Component({
  selector: 'app-bedroom',
  standalone: true,
  imports: [ToiletComponent ],
  templateUrl: './bedroom.component.html',
  styleUrl: './bedroom.component.less'
})
export class BedroomComponent {

}
