import { createFilter } from '@rollup/pluginutils';
import {escapeString} from 'escape-string';
import {xml2json} from 'xml-js';

module.exports = function xml(options = {}) {
	const filter = createFilter(options.include, options.exclude);
	const format=options.format;
	if(format==="compact"){
		options.compact=true;
	}else if(format==="non-compact"){
		options.compact=false;
	}else{
		delete options.compact;
	}
	return {
		name: 'xml',

		transform(xml, id) {
			if (id.slice(-4) !== '.xml' || !filter(id)) return null;
			if(!('compact' in options)){
				return { code: 'export default new DOMParser().parseFromString("'+escapeString(xml)+'","text/xml");'};
			}
			return {
				code: 'export default '+xml2json(xml,options)
			};
		}
	};
}