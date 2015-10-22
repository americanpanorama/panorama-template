## Making your basemap(s)


The basemap in a Panorama application is actually made up of two tile layers.

The bottom tile layer is generated dynamically from CartoDB. On top of this layer is a semi-transparent tile layer that includes the terrain hillshade, which is not loaded from CartoDB.

### The hillshade tile layer

Currently sourced from Stamen's OpenTerrain project. XYZ url template for this layer is definied in `tileLayers.json` 

### The CartoDB tile layer

#### TODO: more info here

 * What to do in the .yml files
 * How to debug with Tessera
 * How to develop using CartoDB Editor
 * How to organize your CartoDB tables, reproject them, and make them public