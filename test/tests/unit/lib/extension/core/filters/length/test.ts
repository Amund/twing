import * as tape from 'tape';
import {TwingLoaderArray} from "../../../../../../../../src/lib/loader/array";
import {length} from "../../../../../../../../src/lib/extension/core/filters/length";
import {TwingEnvironmentNode} from "../../../../../../../../src/lib/environment/node";

tape('length', async (test) => {
    let env = new TwingEnvironmentNode(new TwingLoaderArray({}));

    test.equal(await length(env, 5), 1);
    test.equal(await length(env, 55), 2);
    test.equal(await length(env, new Map([[1, 1]])), 1);
    test.equal(await length(env, []), 0);
    test.equal(await length(env, new Map()), 0);

    test.end();
});
