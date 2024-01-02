// ==UserScript==
// @name           Fix DiscordVim + Ctrl [1-9] tab switch
// @description
// @author
// ==/UserScript==

(() => {
    function init() {
        document.getElementById('goBackKb2').remove();
        document.getElementById('goForwardKb2').remove();
        document.getElementById('key_search').remove();
        document.getElementById('key_search2').remove();
        document.getElementById('helpMenu').setAttribute('accesskey', '');

        for (let i = 1; i <= 8; i++) {
            document.getElementById(`key_selectTab${i}`).setAttribute('modifiers', 'accel');
        }
        document.getElementById('key_selectLastTab').setAttribute('modifiers', 'accel');

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
