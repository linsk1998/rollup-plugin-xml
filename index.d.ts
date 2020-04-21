import { Plugin } from 'rollup';

interface RollupXmlOptions {
	/**
	 * All JSON files will be parsed by default,
	 * but you can also specifically include files
	 */
	include?: string | RegExp | ReadonlyArray<string | RegExp> | null;
	/**
	 * All JSON files will be parsed by default,
	 * but you can also specifically exclude files
	 */
	exclude?: string | RegExp | ReadonlyArray<string | RegExp> | null;
	/**.
	 * @default XMLDocument
	 */
	format?: "compact" | "non-compact" | "XMLDocument";

    spaces?: number | string
    compact?: boolean
    indentText?: boolean
    indentCdata?: boolean
    indentAttributes?: boolean
    indentInstruction?: boolean
    fullTagEmptyElement?: boolean
    noQuotesForNativeAttributes?: boolean
    doctypeFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    instructionFn?: (
      instructionValue: string,
      instructionName: string,
      currentElementName: string,
      currentElementObj: object
    ) => void;
    cdataFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    commentFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    textFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    instructionNameFn?: (
      instructionName: string,
      instructionValue: string,
      currentElementName: string,
      currentElementObj: object
    ) => void;
    elementNameFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    attributeNameFn?: (
      attributeName: string,
      attributeValue: string,
      currentElementName: string,
      currentElementObj: object
    ) => void;
    attributeValueFn?: (
      attributeValue: string,
      attributeName: string,
      currentElementName: string,
      currentElementObj: object
    ) => void;
    attributesFn?: (value: string, currentElementName: string, currentElementObj: object) => void;
    fullTagEmptyElementFn?: (currentElementName: string, currentElementObj: object) => void;
    ignoreDeclaration?: boolean
    ignoreInstruction?: boolean
    ignoreAttributes?: boolean
    ignoreComment?: boolean
    ignoreCdata?: boolean
    ignoreDoctype?: boolean
    ignoreText?: boolean
    declarationKey?: string
    instructionKey?: string
    attributesKey?: string
    textKey?: string
    cdataKey?: string
    doctypeKey?: string
    commentKey?: string
    parentKey?: string
    typeKey?: string
    nameKey?: string
    elementsKey?: string
}

/**
 * Convert .json files to ES6 modules
 */
export default function xml(options?: RollupXmlOptions): Plugin;
