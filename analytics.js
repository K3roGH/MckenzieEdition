
  document.addEventListener("DOMContentLoaded", function() {
    var script = document.createElement("script");
    script.src = "https://plausible.pizzaedition.one/js/script.js";
    script.defer = true;
    script.setAttribute("data-domain", "pizzaedition.one");
    document.head.appendChild(script);
});


// ads.js
(function() {
  var adsScript = document.createElement('script');
  adsScript.async = true;
  adsScript.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2550143154036518";
  adsScript.setAttribute('data-overlays', 'bottom'); // Add the data-overlays attribute
  adsScript.crossOrigin = "anonymous";
  document.head.appendChild(adsScript);
})();





// Allowed base domains
const allowedDomains = [
  "pizzaedition.one",
  "mathmasterz.com",
  "pizzaedition.site",
  "thepizzaedition.co",
  "pizzaedition.win"

];

const redirectTargets = [
  "https://pizzaedition.one/",
  "https://mathmasterz.com/",
  "https://pizzaedition.site/",
  "https://thepizzaedition.co/",
  "https://pizzaedition.win/"
];

// Get the current hostname
const currentDomain = window.location.hostname;

const isAllowed = allowedDomains.some(domain => 
  currentDomain === domain || currentDomain.endsWith(`.${domain}`)
);

// Redirect (add more link when pos)
if (!isAllowed) {
  const randomRedirect = redirectTargets[Math.floor(Math.random() * redirectTargets.length)];
  window.location.href = randomRedirect;
}

