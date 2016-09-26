/* eslint-disable no-undef*/
exports.config = {
    specs: ['test/e2e/**/*[sS]pec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    framework: 'jasmine',
    onPrepare: function() {
      browser.ignoreSynchronization = true;
}

};
