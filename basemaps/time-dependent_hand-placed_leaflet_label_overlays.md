# Time-dependent hand-placed leaflet label overlays

## What is the problem?

Panorama projects frequently need to have labels that change over time. For example, a historically-accurate map should not include a label for Sacramento in the year 1840 (before that city existed), but the a label should appear when the user scrubs a time slider to the year 1848, when Sacramento was founded. To achieve this level of interactivity, these time-dependent labels need to be drawn in the client.

Also, because these labels are usually small in number but large in importance, we want to have full control over their placement. For example, we might always want to have Sacramento's label to the left of the icon, because we know that it won't conflict with other features we want to show on the map.

Finally, we want control over which labels show at which zoom levels. 

## What is the solution?

We use a GeoJSON file with specific fields that specify how and when to draw the label. So far we support three types of features in this file: marker points, labels, and optional leader lines (a thin line drawn between the marker and the label, making it possible to move the label text further away from the marker if necessary)

The `maptype` field within the `properties` collection determines whether a GeoJSON feature should be interpreted as a point, a label, or a leader line.

[include screenshots]

## Format

**Documentation in progress**

```
  "type": "FeatureCollection",
  "features": [
      {
      "type": "Feature",
      "properties": {
        "cartodb_id": 8,
        "start_year": null,
        "end_year": null,
        "landmark_i": "17",
        "location": "Independence Rock",
        "trail": "Oregon Trail",
        "type": "natural",
        "latitude": 42.4936,
        "longitude": -107.1294,
        "maptype": "icon",
        "startzoom": 5,
        "justify": null,
        "endzoom": 10
      },
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [
          [
            -5.244,
            -2.2743
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "cartodb_id": 8,
        "start_year": null,
        "end_year": null,
        "landmark_i": "17",
        "location": "Independence Rock",
        "trail": "Oregon Trail",
        "type": "natural",
        "maptype": "line",
        "startzoom": 5,
        "endzoom": 6
      },
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [
            -5.18,
            -2.20
          ],
          [
            -4.65,
            -1.35
          ]
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "cartodb_id": 8,
        "start_year": null,
        "end_year": null,
        "landmark_i": "17",
        "location": ". Independence Rock",
        "trail": "Oregon Trail",
        "type": "natural",
        "latitude": 42.4936,
        "longitude": -107.1294,
        "maptype": "label",
        "startzoom": 7,
        "justify": "left",
        "endzoom": 10
      },
      "geometry": {
        "type": "MultiPoint",
        "coordinates": [
          [
            -5.244,
            -2.2743
          ]
        ]
      }
    }
  ]
}
```
    