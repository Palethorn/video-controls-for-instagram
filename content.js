var volume = .5;

function enableVideoControls() {
    var videos = document.getElementsByTagName('video');
    var video = null;

    for(var i = 0; i < videos.length; i++) {
        video = videos[i];
        video.controls = true;
        video.volume = volume;

        video.addEventListener('play', function(e) {
            var PyenC = document.querySelector('.PyenC');

            if(PyenC) {
                PyenC.parentNode.removeChild(PyenC);
            }

            var fXIG0 = document.querySelector('.fXIG0');

            if(fXIG0) {
                fXIG0.parentNode.removeChild(fXIG0);
            }

            var play_btn = document.querySelector('.QvAa1');
            
            if(play_btn) {
                play_btn.parentElement.removeChild(play_btn);
            }

            var overlay = document.querySelector('.oujXn');

            if(overlay) {
                overlay.parentElement.removeChild(overlay);
            }
        });

        video.addEventListener('volumechange', function(e) {
            var videos = document.getElementsByTagName('video');
            var video = null;
            volume = e.target.volume;
            chrome.storage.local.set({volume: volume});

            for(var i = 0; i < videos.length; i++) {
                video = videos[i];
                video.volume = volume;
            }
        });
    }

    var soc_btn = document.getElementsByClassName('G_hoz LcKDX _6JfJs')[0];

    if(soc_btn) {
        soc_btn.style.bottom = 'auto';
    }
}

function observe() {
    var observer = new MutationObserver(enableVideoControls);
    var config = { attributes: false, childList: true, characterData: false, subtree: true};
    target = document.querySelector('body');

    if(target != null) {
        observer.observe(target, config);
    }

    console.log('Observer attached');
}

chrome.storage.local.get({
    volume: .5,
}, function(items) {
    if(items.volume) {
        volume = items.volume;
    }
});

observe();
