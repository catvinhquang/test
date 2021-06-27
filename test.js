try {
    // alert('Ready for the simple life ?!');
    
    document.getElementsByTagName('header')?.[0]?.remove();
    document.getElementById('primary-nav')?.remove();
    // document.getElementById('notice')?.remove();
    document.getElementsByClassName('breadcrumb')?.[0]?.remove();
    document.getElementsByClassName('search')?.[0]?.remove();
    document.getElementsByTagName('footer')?.[0]?.remove();

    document.body.style.backgroundColor = '#000';

    const wrapper = document.getElementById('wrapper');
    wrapper.style.backgroundColor = '#000';
    wrapper.style.boxShadow = 'none';
} catch (e) {
    alert(e);
}
