const TwingTestIntegrationTestCaseBase = require('../../../../../../integration-test-case');

module.exports = class extends TwingTestIntegrationTestCaseBase {
    getTemplates() {
        let templates = super.getTemplates();

        templates.set('index.twig', require('./index.twig'));
        templates.set('foo.twig', require('./foo.twig'));
        templates.set('bar.twig', require('./bar.twig'));

        return templates;
    }
};