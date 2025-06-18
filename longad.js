(function() {
    var adContainer, refreshInterval;
    
    var adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2550143154036518';
    adsenseScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsenseScript);

    function refreshAd() {
        // Remove previous ad if exists
        if (adContainer && adContainer.parentNode) {
            adContainer.parentNode.removeChild(adContainer);
        }

        // Create new ad
        adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = 'inline-block';
        adContainer.style.width = '38vw';
        adContainer.style.height = '4.7vw';
        adContainer.setAttribute('data-ad-client', 'ca-pub-2550143154036518');
        adContainer.setAttribute('data-ad-slot', '3462557348');

        var scriptContainer = document.querySelector('.script-container1');
        if (scriptContainer) {
            scriptContainer.appendChild(adContainer);
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    }

    adsenseScript.onload = function() {
        // Initial ad load
        refreshAd();

        // Wait 15 seconds before starting refresh cycle
        setTimeout(function() {
            // First refresh after 15 seconds
            refreshAd();
            // Then refresh every 30 seconds
            refreshInterval = setInterval(refreshAd, 30000);
        }, 15000);
    };
})();