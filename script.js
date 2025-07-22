function upDate(previewPic){
    // Log to check event and previewPic properties
    console.log('upDate triggered');
    console.log('alt:', previewPic.alt);
    console.log('src:', previewPic.src);
    // Get the main image elements
    var mainImg = document.getElementById('main-img');
    var mainAlt = document.getElementById('main-alt');
    /// Remove dynamic resizing
    mainImg.src = previewPic.src;
    mainImg.alt = previewPic.alt;
    mainImg.style.display = 'block';
    mainAlt.style.display = 'none';
    mainImg.onerror = function() {
        mainImg.style.display = 'none';
        mainAlt.textContent = previewPic.alt;
        mainAlt.style.display = 'flex';
    };
}

function unDo(){
    // Log to check event
    console.log('unDo triggered');
    // Get the main image elements
    var mainImg = document.getElementById('main-img');
    var mainAlt = document.getElementById('main-alt');
    // Remove dynamic resizing
    mainImg.removeAttribute('src');
    mainImg.alt = '';
    mainImg.style.display = 'none';
    mainAlt.textContent = '';
    mainAlt.style.display = 'none';
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
