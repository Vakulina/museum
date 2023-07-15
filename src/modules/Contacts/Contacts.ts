import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { Component } from "../../services/Component";
import { getTemplate } from "./template";
import s from "./Contacts.module.scss";

const STYLES_SOURCE = 'mapbox://styles/vakulina/ckufgnl0196iv17o47olkq5on';
class Contacts extends Component {
  markup() {
    this.addAttribute("id", "contacts");
    return getTemplate(s);
  }

  private _initMap() {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.innerHTML = '';

    const map = new mapboxgl.Map({
      container: mapContainer!,
      style: STYLES_SOURCE,
      center: [2.3364, 48.86092],
      zoom: 15.75701,
    });

    const nav = new mapboxgl.NavigationControl({
      visualizePitch: true,
    });
    map.addControl(nav, 'top-right');

    const markers = [
      { lngLat: new mapboxgl.LngLat(2.3364, 48.86091), color: "black" },
      { lngLat: new mapboxgl.LngLat(2.3333, 48.8602), color: "#767676" },
      { lngLat: new mapboxgl.LngLat(2.3397, 48.8607), color: "#767676" },
      { lngLat: new mapboxgl.LngLat(2.3330, 48.8619), color: "#767676" },
      { lngLat: new mapboxgl.LngLat(2.3365, 48.8625), color: "#767676" },
    ];

    markers.forEach(({ lngLat, color }) => {
      new mapboxgl.Marker({
        color,
        draggable: false,
        scale: 0.9,
      })
        .setLngLat(lngLat)
        .addTo(map);
    });
  }

  componentDidMount() {
    this._initMap();
  }
}

export const contacts = new Contacts("section", {
  classes: s.contacts,
});
