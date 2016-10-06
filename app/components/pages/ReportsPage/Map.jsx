import React from 'react';
import { Map, MarkerGroup } from 'react-d3-map';

class VisitsMap extends React.Component {
  render () {
    const onPolygonMouseOver= function(component, d, i) {
    component.showPopup();
    }
    const onPolygonMouseOut= function(component, d, i) {
    component.hidePopup();
    }
    const onPolygonClick= function(component, d, i) {
    component.showPopup();
    }
    const onPolygonCloseClick= function(component, id) {
    component.hidePopup();
    }
    const width = 1000;
    const height = 800;
    // set your zoom scale
    const scale = 1 << 10;;
    // min and max of your zoom scale
    const scaleExtent = [1 << 10, 1 << 14];
    // set your center point
    const center = [-5, 55.4];
    // set your popupContent
    const popupContent = function (d) { return d.properties.text; };
    const data = {
      type: 'Feature',
      properties: {
        text: 'this is a Point!!!'
      },
      geometry: {
        type: 'Point',
        coordinates: [122, 23.5]
      }
    };

    return (
      <div>
        <Map
          width={width}
          height={height}
          scale={scale}
          scaleExtent={scaleExtent}
          center={center}
          >
          <MarkerGroup
            key={'polygon-test'}
            data={data}
            onClick= {onPolygonClick}
            onCloseClick= {onPolygonCloseClick}
            onMouseOver= {onPolygonMouseOver}
            onMouseOut= {onPolygonMouseOut}
            popupContent={popupContent}
            markerClass={'your-marker-css-class'}
          />
        </Map>
      </div>

    )
  }
}

export default VisitsMap;
