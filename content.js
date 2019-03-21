function enableVideoControls() {
    var video = document.querySelector('video');
    
    if(video) {
        video.controls = true;
        video.volume = .5;
        video.addEventListener('play', function() {
            var play_btn = document.querySelector('.QvAa1');
            play_btn.parentElement.removeChild(play_btn);
            var overlay = document.querySelector('.oujXn');
            overlay.parentElement.removeChild(overlay);
        });
    }

    var soc_btn = document.getElementsByClassName('G_hoz LcKDX _6JfJs')[0];

    if(soc_btn) {
        soc_btn.style.bottom = 'auto';
    }
}

function observe() {
    var observer = new MutationObserver(removeBoxes);
    var config = { attributes: false, childList: true, characterData: false, subtree: true};
    target = document.querySelector('body');

    if(target != null) {
        observer.observe(target, config);
    }

    console.log('Observer attached');
}

// observe();
enableVideoControls();
