(function(){
var links = document.body.getElementsByTagName("a");
var linkCount = links.length;
const keyword = ' {_ext}';
for (var i = 0; i < linkCount; i++) {
    if (links[i].textContent.includes(keyword)) {
        links[i].setAttribute('target', '_blank');
        links[i].textContent = links[i].textContent.replace(keyword, '');
        console.log(links[i].textContent);
    }
}
})();
