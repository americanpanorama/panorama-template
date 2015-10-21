Map {
  buffer-size: 128;
}

#canals_cities_basemap[rank=1],
#canals_cities_basemap[rank=2][zoom>=6],
#canals_cities_basemap[rank>=3][zoom>=8]{
  // Note: have to use markers not shields to change svg color
  ::halo {
    marker-placement: point;
    marker-fill-opacity: 1;
    marker-line-width: 0;
    marker-type: ellipse;
    marker-width: 12;
    marker-fill: white;
    [zoom<=5] {
      marker-fill: transparent;
      [zoom=5][town='New York'],
      [zoom=5][town='Philadelphia'],
      [zoom=5][town='Buffalo'] {
        marker-fill: white;
      }
    }
  }
  marker-fill-opacity: 0.9;
  marker-line-color: #FFF;
  marker-line-width: 1.5;
  marker-line-opacity: 1;
  marker-placement: point;
  //marker-type: ellipse;
  marker-file: url('https://raw.githubusercontent.com/mapbox/maki/mb-pages/src/circle-12.svg');
  marker-width: 10;
  marker-fill: #000000;

  marker-allow-overlap: true;
}

#canals_cities_basemap::labels {
[rank=1],
[rank=2][zoom>=6],
[rank>=3][zoom>=8] {
  text-name: [town];
  text-face-name: 'DejaVu Sans Book';
  text-size: 10;
  [zoom>=6] { 
    text-size: 14;
  }
  text-label-position-tolerance: 0;
  text-fill: #000;
  text-halo-fill: #FFF;
  text-halo-radius: 1;
  // Default is upper right from dot
  text-dy: -5;
  text-dx: 5;
  
  // Labels to float left instead
  [state='Illinois'],
  [state='Indiana'],
  [state='Ohio'][town!='Cincinnati'],
  [town='Bellefonte'],
  [town='Pittsburgh'], 
  [town='Rochester'],
  [town='Newark'],
  [town='Oswego'],
  [town='Buffalo'],
  [town='Corning'],
  [town='Bristol'],
  [town='Reading'],
  [town='Buchanan'] {
    text-dx: -5;
  }
  
  // Labels to float below dot
  
  [town='New Brunswick'],
  [town='La Salle'],
  [town='Lawrenceburg'],
  [town='Akron'],
  [town='Albany'],
  [town='Athens'],
  [town='Utica'],
  [town='Reading'],
  [town='Bordentown'],
  [town='Philadelphia'],
  [town='Lynchburg'],
  [town='Toledo'],
  [town='Pittsburgh'],
  [town='Cincinnati'] {
    text-dy: 5;
  }
  text-allow-overlap: true;
  text-placement: point;
  text-placement-type: dummy;
  [zoom<=4] {
    // Suppress everything at 4 and below 
    text-fill: transparent;
    text-halo-fill: transparent;
    // Except these, show them at 4
    [zoom=5][town='New York'],
    [zoom=5][town='Buffalo'],
    [zoom=5][town='Albany'] {
      text-halo-fill: #FFF;
      text-fill: #000;
    }
  }
  }
}