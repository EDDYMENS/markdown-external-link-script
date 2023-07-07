(function() {
    var links = document.body.getElementsByTagName("a");
    var linkCount = links.length;
    for (var i = 0; i < linkCount; i++) {
        if (new URL(links[i].href).origin !== location.origin) {
            links[i].setAttribute('target', '_blank');
        }
    }
})();
