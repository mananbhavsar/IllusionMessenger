module.exports = {
    copyFontAwesome: {
        src: ['{{ROOT}}/node_modules/font-awesome/fonts/**/*'],
        dest: '{{WWW}}/assets/fonts'
    },
    copyIndexContent: {
        src: ['{{SRC}}/index.html', '{{SRC}}/manifest.json', '{{SRC}}/service-worker.js', '{{SRC}}/OneSignalSDKUpdaterWorker.js', '{{SRC}}/OneSignalSDKWorker.js'],
        dest: '{{WWW}}'
      },
};