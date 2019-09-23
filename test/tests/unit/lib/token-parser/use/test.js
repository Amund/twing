const {
    TwingTokenParserUse,
    TwingTokenStream,
    TwingToken,
    TwingNode,
    TwingNodeExpressionConstant
} = require('../../../../../../build/main');
const TwingTestMockBuilderParser = require('../../../../../mock-builder/parser');

const tap = require('tape');
const sinon = require('sinon');

tap.test('token-parser/use', function (test) {
    test.test('parse', function (test) {
        test.test('when template name is not a "EXPRESSION_CONSTANT"', function (test) {
            let stream = new TwingTokenStream([]);
            let tokenParser = new TwingTokenParserUse();
            let parser = TwingTestMockBuilderParser.getParser(stream);

            tokenParser.setParser(parser);

            sinon.stub(parser, 'parseExpression').returns(new TwingNode());
            sinon.stub(stream, 'getCurrent').returns({
                getLine: function() {
                    return 1;
                }
            });

            try {
                tokenParser.parse(new TwingToken(TwingToken.NAME_TYPE, 'set', 1, 1));

                test.fail();
            }
            catch (e) {
                test.same(e.message, 'The template references in a "use" statement must be a string at line 1.')
            }

            test.end();
        });

        test.test('when multiple aliases', function (test) {
            let stream = new TwingTokenStream([
                new TwingToken(TwingToken.NAME_TYPE, 'with', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'bar', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'as', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'rab', 1, 1),
                new TwingToken(TwingToken.PUNCTUATION_TYPE, ',', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'foo', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'as', 1, 1),
                new TwingToken(TwingToken.NAME_TYPE, 'oof', 1, 1),
                new TwingToken(TwingToken.BLOCK_END_TYPE, null, 1, 1),
                new TwingToken(TwingToken.EOF_TYPE, null, 1, 1)
            ]);

            let tokenParser = new TwingTokenParserUse();
            let parser = TwingTestMockBuilderParser.getParser(stream);

            tokenParser.setParser(parser);

            let trait = null;

            sinon.stub(parser, 'parseExpression').returns(new TwingNodeExpressionConstant('foo', 1, 1));
            sinon.stub(parser, 'addTrait').callsFake((node) => {
                trait = node;
            });

            tokenParser.parse(new TwingToken(TwingToken.NAME_TYPE, 'set', 1, 1));

            test.equals(trait.getNode('targets').getNodes().size, 2);

            test.end();
        });

        test.end();
    });

    test.end();
});