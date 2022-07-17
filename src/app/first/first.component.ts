import { Category } from './category';
import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent {

  name: string = 'ACG Air Deschutz+';
  description: string = `From city hikes to canyon trails and long walks on the beach, the Nike ACG Air Deschutz+ is built to get you places. Its classic '90s look pairs with a rugged outdoor-inspired design made with quick-drying materials and plush cushioning. Strap in and let the elements of nature shape your character.`;
  style = ['DO8951-002', 'DO8951-401', 'DO8951-700', 'DO8951-300', 'DO8951-400'];
  shown = ['Light Iron Ore/Dark Iris/Black/Rust Oxide', 'Midnight Navy/Thunder Blue/Rattan/Light Crimson', 'Solar Flare/Cinnabar/Cocao Wow/Action Grape', 'Pilgrim/Pilgrim/Black/Black', 'Ashen Slate/Ashen Slate/Black/Hemp']
  price: number = 80;
  category: Category = Category.NF;
  isAvailable = true;
}
