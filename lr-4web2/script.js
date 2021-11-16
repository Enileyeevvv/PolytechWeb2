const btn = document.querySelector('.btn');
btn.addEventListener('click', function() {
    btn.innerHTML = (btn.innerHTML === 'Стоп') ? btn.innerHTML = 'Старт' : btn.innerHTML = 'Стоп';
})

const items = document.querySelectorAll('.item')
btn.addEventListener('click', function() {
    items.forEach(item => {
        item.classList.toggle('stop');
    });
    document.body.classList.toggle('stop');
});

var cssSelector = anime ({
    targets: '#anim',
    rotate: 360,
    loop: true,
    duration: 2000,
    easing: 'linear',

});