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

#### TODO: more info here

 * What to do in the .yml files
 * How to debug with Tessera
 * How to develop using CartoDB Editor
 * How to organize your CartoDB tables, reproject them, and make them public
