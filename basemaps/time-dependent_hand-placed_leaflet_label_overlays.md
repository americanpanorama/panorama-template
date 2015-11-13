# Time-dependent hand-placed leaflet label overlays

## What is the problem?

Panorama projects frequently need to have labels that change over time. For example, a historically-accurate map should not include a label for Sacramento in the year 1840 (before that city existed), but the a label should appear when the user scrubs a time slider to the year 1848, when Sacramento was founded. To achieve this level of interactivity, these time-dependent labels need to be drawn in the client.

Also, because these labels are usually small in number but large in importance, we want to have full control over their placement. For example, we might always want to have Sacramento's label to the left of the icon, because we know that it won't conflict with other features we want to show on the map.

Finally, we want control over which labels show at which zoom levels. 
n
## What is the solution?

We use a GeoJSON file with specific fields that specify how and when to draw the label. So far we support three types of features in this file: marker points, labels, and optional leader lines (a thin line drawn between the marker and the label, making it possible to move the label text further away from the marker if necessary)

The `maptype` field within the `properties` collection determines whether a GeoJSON feature should be interpreted as a point, a label, or a leader line. These are separate features within the GeoJSON file, but they each represent different parts of a single map feature. The city of Sacramento might have a point, a label, and a leader line in the same GeoJSON file.

Each feature also has `type`, which can be used for different categorical styling. In the "Overland Trails" map, `type` has three possible values: `place` for cities (show in black), `fort` (show in brown), or `natural` (show in green).

There is also a `startzoom` and `endzoom` for each feature. If you want to style a feature differently at different zooms, (for example, draw the Sacramento label with left justification up to zoom 5, and draw it right justified with a leader line after zoom 6), you need to represent these as separate features in the GeoJSON file with non-overlapping zoom levels.

Each feature has a `start_year` and `end_year` which is in an ugly format (aka [ISO-8601 UTC](https://en.wikipedia.org/wiki/ISO_8601#UTC)) like this `1871-05-22T00:00:00Z`. You can convert native JavaScript dates to this format with [`Date.toISOString()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).

Finally, all the label features have a `justify` field which is either `left` or `right`.

[include screenshots]

## Example file structure

**Documentation in progress**

There is currently no tool that automatically generates this file. You need to export your features as a GeoJSON, and then manually add the necessary attributes to this file.

NOTE: In the Overland Trails map the point features were defined as `MultiPoint` geometry type. This component will require point features to be `Point` only and leader lines to be `Line` only. **TODO** the code should enforce this.


```
  "type": "FeatureCollection",
  "features": [
      {
      "type": "Feature",
      "properties": {
        "start_year": null,
        "end_year": null,
        "location": "Independence Rock",
        "type": "natural",
        "maptype": "icon",
        "startzoom": 5,
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
        "start_year": null,
        "end_year": null,
        "location": "Independence Rock",
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
        "start_year": null,
        "end_year": null,
        "location": ". Independence Rock",
        "trail": "Oregon Trail",
        "type": "natural",
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
    
