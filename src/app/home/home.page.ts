import { Component } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  map!: L.Map;
  baseMap!: any;

  constructor() {}

  ionViewDidEnter() {
    this.map = L.map('mapId').setView([51.5, -0.09], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.baseMap = {
      OpenStreetMap: L.tileLayer(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }
      ),
      Topo: L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://www.opentopomap.org/copyright">OpenTopoMap</a> contributors',
      }),
      Sattelite: L.tileLayer(
        'https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}',
        {
          maxZoom: 20,
          subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
          attribution:
            '&copy; <a href="https://maps.google.com/">Google Maps</a>',
        }
      ),
    };

    this.baseMap['OpenStreetMap'].addTo(this.map);

    L.control.layers(this.baseMap).addTo(this.map);

    L.marker([51.5, -0.09])
      .addTo(this.map)
      .bindPopup('Titik Lokasi 1')
      .openPopup();
  }
}