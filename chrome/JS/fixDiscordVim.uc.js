// ==UserScript==
// @name           fixDiscordVim.uc.js
// @description    bruh
// @author         @Chika#8330
// ==/UserScript==

(() => {
    function init() {
		document.getElementById('goBackKb2').remove();
		document.getElementById('goForwardKb2').remove();
		document.getElementById('helpMenu').setAttribute('accesskey', '');
    }

    if (gBrowserInit.delayedStartupFinished) {
        init();
    } else {
        let delayedListener = (subject, topic) => {
            if (topic == "browser-delayed-startup-finished" && subject == window) {
                Services.obs.removeObserver(delayedListener, topic);
                init();
            }
        };
        Services.obs.addObserver(delayedListener, "browser-delayed-startup-finished");
    }
})();
