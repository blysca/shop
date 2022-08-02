import { Component, Inject, OnInit, Optional } from '@angular/core';
import { Category } from './category';
import { ConstantService, type ConfigModel, ConfigOptionsService, generatedString, GeneratorService, LocalStorageService } from '../core/services';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  name: string = 'ACG Air Deschutz+';
  description: string = `From city hikes to canyon trails and long walks on the beach, the Nike ACG Air Deschutz+ is built to get you places. Its classic '90s look pairs with a rugged outdoor-inspired design made with quick-drying materials and plush cushioning. Strap in and let the elements of nature shape your character.`;
  style = ['DO8951-002', 'DO8951-401', 'DO8951-700', 'DO8951-300', 'DO8951-400'];
  shown = ['Light Iron Ore/Dark Iris/Black/Rust Oxide', 'Midnight Navy/Thunder Blue/Rattan/Light Crimson', 'Solar Flare/Cinnabar/Cocao Wow/Action Grape', 'Pilgrim/Pilgrim/Black/Black', 'Ashen Slate/Ashen Slate/Black/Hemp']
  price: number = 80;
  category: Category = Category.NF;
  isAvailable = true;

  baseConfig!: Partial<ConfigModel>;
  constants!: any;
  someString!: string;

  constructor(
    @Optional() private configOptionsService: ConfigOptionsService,
    @Optional() private constantService: ConstantService,
    @Optional() @Inject(generatedString) private randomString: string,
    @Optional() private generatorService: GeneratorService,
    @Optional() private lsService: LocalStorageService,
  ) {
    this.baseConfig = this.configOptionsService.config;
    this.constants = { ...this.constantService };
    // console.log(this.constants);
    this.someString = randomString;
  }

  ngOnInit(): void {
    this.configOptionsService.config = { email: 'evelyn.russo@rodemco.me' };
    this.configOptionsService.configProperty = { key: 'phone', value: '+1 (920) 470-2193' };
    this.lsService.setlocalStorage('randomString', this.someString)
    this.generatorService.getNewID();
    this.generatorService.getNewID();
    this.lsService.setlocalStorage('genID', `${this.generatorService.getNewID()}`)
  }
}
