var links = document.body.getElementsByTagName("a");
var btnCount = buttons.length;
for (var i = 0; i < btnCount; i++) {
    if (links[i].textContent.includes('‌')) { // It might seem empty but it checking for a Zero Width Non-Joiner character
        links[i].setAttribute('target', '_blank');
    }
}
