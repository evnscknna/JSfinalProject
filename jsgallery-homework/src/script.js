/*Name this external file gallery.js*/

function upDate(previewPic){
    // Log to check event and previewPic properties
    console.log('upDate triggered');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);
    // Get the main image div
    var imageDiv = document.getElementById('image');
    // Change background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";
    // Change text to alt text
    imageDiv.innerHTML = previewPic.alt;
}

function unDo(){
    // Log to check event
    console.log('unDo triggered');
    // Get the main image div
    var imageDiv = document.getElementById('image');
    // Reset background image
    imageDiv.style.backgroundImage = "url('')";
    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}

// Add event listeners and accessibility features
window.onload = function() {
    // Add tabindex to all preview images
    addTabFocus();
    // Add event listeners
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
    console.log('window.onload triggered');
}

function addTabFocus() {
    const previews = document.querySelectorAll('.preview');
    for (let i = 0; i < previews.length; i++) {
        previews[i].setAttribute('tabindex', '0');
        console.log('tabindex set for image', i);
    }
}