import {TwingNode} from "../node";
import {TwingCompiler} from "../compiler";
import {TwingNodeType} from "../node-type";

export const type = new TwingNodeType('line');

export class TwingNodeLine extends TwingNode {
    constructor(data: number, lineno: number, columnno: number, tag: string) {
        super(new Map(), new Map([['data', data]]), lineno, columnno, tag);
    }

    get type() {
        return type;
    }

    compile(compiler: TwingCompiler) {
        // noop
    }
}
