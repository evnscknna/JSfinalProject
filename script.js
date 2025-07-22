/*Name this external file gallery.js*/

function upDate(previewPic){
    // Log to check event and previewPic properties
    console.log('upDate triggered');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);
    // Get the main image elements
    var imageDiv = document.getElementById('image');
    var mainAlt = document.getElementById('main-alt');
    // Set background image and alt text
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    mainAlt.textContent = previewPic.alt;
}

function unDo(){
    // Log to check event
    console.log('unDo triggered');
    // Get the main image elements
    var imageDiv = document.getElementById('image');
    var mainAlt = document.getElementById('main-alt');
    // Reset background image and text
    imageDiv.style.backgroundImage = "";
    mainAlt.textContent = "Hover over an image below to display here.";
}

// On page load, set default state
window.onload = function() {
    addTabFocus();
    const previews = document.querySelectorAll('.preview');
    previews.forEach(function(img) {
        img.addEventListener('mouseover', function() {
            upDate(img);
            console.log('mouseover triggered');
        });
        img.addEventListener('mouseleave', function() {
            unDo();
            console.log('mouseleave triggered');
        });
        img.addEventListener('focus', function() {
            upDate(img);
            console.log('focus triggered');
        });
        img.addEventListener('blur', function() {
            unDo();
            console.log('blur triggered');
        });
    });
    // Set default state
    unDo();
    console.log('window.onload triggered');
}

function addTabFocus() {
    const previews = document.querySelectorAll('.preview');
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
        console.log('tabindex set for image', i);
    }
}