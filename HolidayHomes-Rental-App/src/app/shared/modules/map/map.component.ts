import { 
  Component, 
  Input, 
  ViewEncapsulation } from '@angular/core';
import tt from '@tomtom-international/web-sdk-maps';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent {

  @Input('location') set location(location: string) {
    this.createMap();
  };
  private readonly API_KEY = 'bOrZ1Er3Gtl1qpEatIodM0EPSzcLAcvW';

  constructor() { }

  private createMap() {
    const map = tt.map({
      key: this.API_KEY,
      container: 'app-map',
      style: 'tomtom://vector/1/basic-main'
    });
      
    map.addControl(new tt.NavigationControl());
  }
}