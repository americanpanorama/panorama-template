# panorama-template
Boilerplate and starting point for creating new applications using the [Panorama Toolkit](https://github.com/americanpanorama/panorama)


##Data Sets
####TODO: Guide on setting up tables and formatting data

##Dependencies
* [npm](https://www.npmjs.com/)
* [CartoDB](https://cartodb.com/) account (_? -- is this a hard req?_)


##Setup
Make sure you have [npm](https://www.npmjs.com/) installed. Note: **version > 2.7.0 is required** to install scoped packages, such as `@panorama/toolkit`. Instructions for updating npm are [here](https://docs.npmjs.com/getting-started/installing-node#updating-npm).

Load required **npm** modules.

```bash
npm install
```

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
