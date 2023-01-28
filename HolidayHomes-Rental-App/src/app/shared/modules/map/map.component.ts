import { 
  Component, 
  Input, 
  OnInit,
  OnDestroy,
  ViewEncapsulation } from '@angular/core';
import { MapService } from './map.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit, OnDestroy {

  private map: any;
  public readonly API_KEY = 'bOrZ1Er3Gtl1qpEatIodM0EPSzcLAcvW';

  @Input('location') location: string;
  @Input('mapNotifier') mapNotifier: Subject<string>;
  
  constructor(private mapService: MapService) { }

  ngOnInit() {
    this.createMap();
    this.getGeoPosition(this.location);

    if (this.mapNotifier) {
      this.mapNotifier.subscribe(location => {
        this.getGeoPosition(location);
      });
    }
  }

  ngOnDestroy() {
    this.mapNotifier && this.mapNotifier.unsubscribe();
  }

  private createMap() {
    this.map = this.mapService.createMap({apiKey: this.API_KEY})
  }

  private getGeoPosition(location: string) {
    this.mapService
      .getGeoPosition(location, this.API_KEY)
      .subscribe(position => {
        this.mapService.initMap(this.map, position);
      }, (error: Error) => {
        this.mapService.centerMap(this.map, {lat: 0, lon: 0});
        this.mapService.addPopupToMap(this.map, error.message);
      })
  }

}

