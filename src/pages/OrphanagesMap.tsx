import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css'

import mapMarketImg from '../images/map-market.svg';

import '../styles/pages/orphanages-map.css'

function OrphanagesMap() {
    return (
      <div id="page-map">
          <aside>
              <header>
                  <img src={mapMarketImg} alt="Happy"/>
                  <h2>Escolha um orfanato no Mapa </h2> 
                  <p>Muitas crianças estão esperando a sua visita :)</p>
              </header>

              <footer>
                  <strong>Manaus</strong>
                  <span>Amazonas</span>
              </footer>
          </aside>

          <Map
            center={[-3.0568819,-60.0487905]}
            zoom={11.5}
            style={{ width: '100%', height: '100%'}}
          >
              {/* <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" /> */}
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} 
              />
          </Map>
          
          <Link to="" className="create-orphanage">
              <FiPlus size={32} color="#FFF"/>
          </Link>
      </div>
    )
}

export default OrphanagesMap;