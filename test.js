var divWrapper = null;

try {
    document.body.style.backgroundColor = '#000';
    document.getElementsByTagName('header')?.[0]?.remove();
    document.getElementById('primary-nav')?.remove();
    document.getElementsByClassName('breadcrumb')?.[0]?.remove();
    document.getElementsByClassName('search')?.[0]?.remove();
    document.getElementsByTagName('footer')?.[0]?.remove();
    divWrapper = document.getElementById('wrapper');
    divWrapper.style.backgroundColor = '#000';
    divWrapper.style.boxShadow = 'none';

    var url = window.location.href;
    if (url.includes('/video/')) {
        handleVideoUrl();
    }
} catch (e) {
    alert(e);
}

function handleVideoUrl() {
    divWrapper.style.width = '100%';

    document.getElementsByClassName('play-right')?.[0]?.remove();
    document.getElementsByClassName('toolbar')?.[0]?.remove();
    document.getElementsByClassName('video-info')?.[0]?.remove();
    document.getElementsByClassName('video-content')?.[0]?.remove();
    document.getElementsByClassName('box')?.[0]?.remove();

    var divVideo = document.getElementById('video');
    if (divVideo != null) {
        divVideo.style.padding = 'unset';
        divVideo.style.borderRight = 'none';
        divVideo.style.width = '100%';
        divVideo.style.height = '100%';
    }

    var video = document.getElementsByTagName('video')?.[0];
    if (video != null) {
        video.muted = false;
        video.play();
        video.requestFullscreen();

        video.addEventListener('touchstart', handleTouchStart, false);
        video.addEventListener('touchmove', handleTouchMove, false);
    }

    var xDown = null;
    var yDown = null;

    function handleTouchStart(e) {
        xDown = e.touches[0].clientX;
        yDown = e.touches[0].clientY;
    }

    function handleTouchMove(e) {
        if (xDown == null || yDown == null) return;

        var x = e.touches[0].clientX;
        var y = e.touches[0].clientY;

        var xDiff = xDown - x;
        var yDiff = yDown - y;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                console.log('left');
                window.history.back();
            } else {
                console.log('right');
                window.history.back();
            }
        } else {
            if (yDiff > 0) {
                console.log('up');
            } else {
                console.log('down');
            }
        }

        xDown = null;
        yDown = null;
    }
}
