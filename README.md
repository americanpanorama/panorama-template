# panorama-template
Boilerplate and starting point for creating new applications using the [Panorama Toolkit](https://github.com/americanpanorama/panorama)


##Data Sets
####TODO: Guide on setting up tables and formatting data

##Dependencies
* [npm](https://www.npmjs.com/)
* [CartoDB](https://cartodb.com/) account (_? -- is this a hard req?_)


##Setup

#### 0. Install git

If you're on a Mac, you have this already. If you're on windows, get git from [git-scm](https://git-scm.com/download/win) and install with the defaults.

#### 1. Set up required Node version 

Ensure that your Node version matches that present in `.nvmrc`.
[`nvm`](https://github.com/creationix/nvm) is the easiest way to do this on Mac, [`nvm-windows`](https://github.com/coreybutler/nvm-windows/releases) on Windows. Installation instructions are in each of those links.

To use `nvm` to switch Node versions:

```bash
$ nvm install
Found '/Users/seth/src/americanpanorama/panorama-template/.nvmrc' with version <0.12.7>
######################################################################## 100.0%
Now using node v0.12.7 (npm v2.11.3)
```

NOTE: you'll need to run `nvm install` (or `nvm use`) in each shell instance.

#### 2. Install dependencies

Make sure you have [npm](https://www.npmjs.com/) installed. Note: **version > 2.7.0 is required** to install scoped packages, such as `@panorama/toolkit`. Instructions for updating npm are [here](https://docs.npmjs.com/getting-started/installing-node#updating-npm).

Load required **npm** modules.

```bash
npm install
```

#### 3. Set up basemaps

If you're using CartoDB, either for data requests or basemaps:
Create a `config.json` file from `config.json.sample` in `./basemaps/cartodb` and add your CartoDB account name to the file. Will look like this...

```json
{
	"userId": "[CartoDB user id / account name]",
	"apiKey": "[CartoDB API key]"
}
```

####TODO: Either use materialized tables or an authenticated session, and remove `apiKey`
**Note:** using `apiKey` will append the specified API key as a query param on all requests to CartoDB. This is insecure and is not intended for production! We need to decide on a technique that either uses materialized tables or an authenticated session before going live.


Specify queries needed for basemap layers in `./basemaps`:

1. Write terrain URLs to `./basemaps/tileLayers.json`
2. Set up CartoDB basemaps:
	A. Specify layers in `./basemaps/cartodb/basemaps.yml`
	B. Specify SQL queries per layer in `./basemaps/cartodb/layers.yml`
	C. Define layer styles ass `.mss` files within `./basemaps/cartodb/styles`

For more information about customizing your application's basemaps, see the [README](basemaps/README.md) in the basemap directory.


## Develop
To run locally:

```bash
npm start
```
Open browser to [http://localhost:8888/](http://localhost:8888/)


##Deploy
####TODO: deploy scripts not yet implemented
~~**To use development code**: Copy the [build directory](./build) to your server, but for **production** you will want to run:~~

~~```
npm run dist
```~~

~~This will create a `dist` directory. Move this directory to your server.~~

~~Both directories are all **static files**, so no special server requirements needed.~~
