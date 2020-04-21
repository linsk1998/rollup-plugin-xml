import xml from "rollup-plugin-xml";
export default {
	// 核心选项
	input: "demo/main.js",     // 必须
	plugins: [
		xml({
			format:"compact"
		})
	],
	output: {  // 必须 (如果要输出多个，可以是一个数组)
		// 核心选项
		file: "demo/bundle.js",    // 必须
		format: "iife"
	},
};