(function() {
    var adContainer, adScriptLoaded = false;
    
    // Load AdSense script only once
    var adsenseScript = document.createElement('script');
    adsenseScript.async = true;
    adsenseScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2550143154036518';
    adsenseScript.crossOrigin = 'anonymous';
    document.head.appendChild(adsenseScript);

    function loadAd() {
        // Clear previous ad if exists
        if (adContainer) {
            adContainer.parentNode.removeChild(adContainer);
        }

        // Create new ad container
        adContainer = document.createElement('ins');
        adContainer.className = 'adsbygoogle';
        adContainer.style.display = 'inline-block';
        adContainer.style.width = '18.2vw';
        adContainer.style.height = '18.2vw';
        adContainer.setAttribute('data-ad-client', 'ca-pub-2550143154036518');
        adContainer.setAttribute('data-ad-slot', '8331411078');

        var scriptContainer = document.querySelector('.script-container');
        if (scriptContainer) {
            scriptContainer.appendChild(adContainer);
            (adsbygoogle = window.adsbygoogle || []).push({});
        }
    }

    adsenseScript.onload = function() {
        adScriptLoaded = true;
        loadAd();
        // Start refresh interval after initial load
        setInterval(loadAd, 30000); // 30 seconds
    };

    // Fallback in case script takes longer to load
    if (!adScriptLoaded) {
        setTimeout(function() {
            if (!adScriptLoaded) loadAd();
        }, 5000);
    }
})();