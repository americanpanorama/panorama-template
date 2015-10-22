@textcolor: #666;
@halocolor: #f9f9f9;

Map {
  buffer-size: 128;
}

#canals_cities_basemap[rank=1][zoom>=5],
#canals_cities_basemap[rank=2][zoom>=6],
#canals_cities_basemap[rank>=3][zoom>=8]{
  // Note: have to use markers not shields to change svg color
  ::halo {
    marker-placement: point;
    marker-fill-opacity: 1;
    marker-line-width: 0;
    marker-type: ellipse;
    marker-width: 9;
    marker-fill: @halocolor;
  }
  marker-fill-opacity: 0.9;
  marker-line-color: @halocolor;
  marker-line-width: 1.5;
  marker-line-opacity: 1;
  marker-placement: point;
  //marker-type: ellipse;
  marker-file: url('https://raw.githubusercontent.com/mapbox/maki/mb-pages/src/circle-12.svg');
  marker-width: 6;
  marker-fill: @textcolor;

  marker-allow-overlap: true;
}

@default_size: 9;
@x_distance_positive: 3;
@y_distance_positive: 3;
@x_distance_negative: -3;
@y_distance_negative: -3;

#canals_cities_basemap[rank=1][zoom>=5]::labels,
#canals_cities_basemap[rank=2][zoom>=6]::labels,
#canals_cities_basemap[rank>=3][zoom>=8]::labels, {

  text-name: [town];
  text-face-name: 'DejaVu Sans Book';
  text-size: @default_size;
  [zoom>=6][rank=1] {
    text-size: @default_size + 3;
  }
  text-label-position-tolerance: 0;
  text-fill: @textcolor;
  text-halo-fill: @halocolor;
  text-halo-radius: 1.5;
  // Default is upper right from dot
  text-dy: @y_distance_negative;
  text-dx: @x_distance_positive;

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
    text-dx: @x_distance_negative;
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
    text-dy: @y_distance_positive;
  }

  text-allow-overlap: true;
  text-placement: point;
  text-placement-type: dummy;

}