try {
    // 1. List site
    // alert('Ready for the simple life ?!');

    document.getElementsByTagName('header')?.[0]?.remove();

    document.getElementById('primary-nav')?.remove();
    // document.getElementById('primary-nav').style.visibility = 'hidden';

    // document.getElementById('notice')?.remove();
    document.getElementsByClassName('breadcrumb')?.[0]?.remove();
    document.getElementsByClassName('search')?.[0]?.remove();
    document.getElementsByTagName('footer')?.[0]?.remove();

    document.body.style.backgroundColor = '#000';

    const wrapper = document.getElementById('wrapper');
    wrapper.style.backgroundColor = '#000';
    wrapper.style.boxShadow = 'none';

    // 2. Video site
    var url = window.location.href;
    if (url.includes('/video/')) {
        document.getElementsByClassName('play-right')?.[0]?.remove();
        document.getElementsByClassName('toolbar')?.[0]?.remove();
        document.getElementsByClassName('video-info')?.[0]?.remove();
        document.getElementsByClassName('video-content')?.[0]?.remove();
        document.getElementsByClassName('box')?.[0]?.remove();

        var html = document.getElementsByTagName('html')[0];
        html.style.display = 'table';
        html.style.width = '100%';
        html.style.height = '100%';

        var body = document.getElementsByTagName('body')[0];
        body.style.display = 'table-cell';
        body.style.width = '100%';
        body.style.height = '100%';
        body.style.verticalAlign = 'middle';

        wrapper.style.width = '100%';

        const player = document.getElementById('video');
        if (player != null) {
            player.style.padding = 'unset';
            player.style.borderRight = 'none';
            player.style.width = '100%';
            player.style.height = '100%';

            document.getElementsByClassName('desktop video-player')[0].style.padding = 'unset';
        }
    }
} catch (e) {
    alert(e);
}
