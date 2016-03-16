// protractor.conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['protractor/spec.js'], //'../stories/**/*.js'
    capabilities: {
        browserName: 'firefox'
    }
}

// Side notes, when you go back to your other project, do not use var declarations all over the place.
