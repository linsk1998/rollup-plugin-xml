# rollup-plugin-xml

Convert .xml files to ES6 modules:

## Use

```js
// import a single property from a XML file,
// discarding the rest
import xml from './demo.xml';
console.log( xml );
```

# Config
```js
import xml from "rollup-plugin-xml";
export default {
	input: "demo/main.js",
	plugins: [
		xml({
			format:"compact"//"compact" | "non-compact" | "XMLDocument"
		})
	],
	output: {
		file: "demo/bundle.js",
		format: "iife"
	},
};
```

![Convert XML ↔ JS/JSON as compact or non-compact](http://nashwaan.github.io/xml-js/images/synopsis.svg)
<!---![Convert XML ↔ JS/JSON as compact or non-compact](/synopsis.png?raw=true "Synopsis Diagram")-->
