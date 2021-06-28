try {
    // alert('Ready for the simple life ?!');
    document.body.style.backgroundColor = '#000';
    document.getElementsByTagName('header')?.[0]?.remove();
    document.getElementById('primary-nav')?.remove();
    document.getElementsByClassName('breadcrumb')?.[0]?.remove();
    document.getElementsByClassName('search')?.[0]?.remove();
    document.getElementsByTagName('footer')?.[0]?.remove();
    var divWrapper = document.getElementById('wrapper');
    divWrapper.style.backgroundColor = '#000';
    divWrapper.style.boxShadow = 'none';

    var url = window.location.href;
    if (url.includes('/video/')) {
        divWrapper.style.width = '100%';
        handleVideoSite();
    }
} catch (e) {
    alert(e);
}

function handleVideoSite() {
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
    }
}
