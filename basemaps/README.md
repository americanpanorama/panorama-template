## Making your basemap(s)


The basemap in a Panorama application is actually made up of two (at least) tile layers.

The bottom tile layer is generated dynamically from CartoDB. On top of this layer there is one or more semi-transparent tile layers which are not loaded from CartoDB. For the American Panorama atlases, we use this overlay layer to load a hillshade to show terrain. However, you could load any external tile layers you wish.

### The overlay tile layers

Currently sourced from Stamen's OpenTerrain project. XYZ url template for this layer is definied in `tileLayers.json`. You could use any external tile layer here, but keep in mind that it would obscure any CartoDB tile layers below. Note that the "layers" is an array, so you can also define more than one tile layer here, assuming all but one of them are semi-transparent.

Example of `tileLayers.json`:

```
{
	"layers": [
		{
			"url": "http://sm.mapstack.stamen.com/openterrain_2163/{z}/{x}/{y}.png"
		}
	]
}
```


### The CartoDB tile layer

The `cartodb` folder contains multiple files which the build process uses to generate a `basemaps.json` file (not included in the repository) which is a MapConfig file is sent to the [CartoDB Maps API](http://docs.cartodb.com/cartodb-platform/maps-api/) to generate an ["anonymous map"](http://docs.cartodb.com/cartodb-platform/maps-api/anonymous-maps/) tile layer.

You need to modify at least three files: `basemaps.yml`, `config.json`, and `layers.yml`, plus however many style files you need for your layers, which are placed in `styles/*.mss`. 

The `basemaps.yml` file defines which layers you want to include in the resulting tile layer, and which order they should appear.

The `layers.yml` file defines the CartoDB SQL for each of the layers in `basemaps.yml`. 

The `config.json` file specifies your CartoDB `userID`, and an optional `apiKey` if you are using private tables.

For each layer defined in `layers.yml`, you need to have a `.mss` file in the `styles/` folder that has the exact same name as the layer.

#### TODO: more info here

 * What else to do in the .yml files
 * How to debug with Tessera
 * How to develop using CartoDB Editor
 * How to organize your CartoDB tables, reproject them, and make them public
