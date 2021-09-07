/*
[].forEach.call(document.querySelectorAll('.menu-item'), function (el) {
    el.addEventListener('click', function(e) {
        document.querySelector('input[type="checkbox"].input').checked = false;
    });
});
*/

/*
menu.addEventListener('click', () => {
    document.querySelector('input[type="checkbox"].input').checked = false;
})
*/

document.querySelectorAll('.menu-item').forEach((item) =>
    item.addEventListener('click', () => {
        document.querySelector('input[type="checkbox"].input').checked = false;
    })
)

document.querySelector('.menu').addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-item')) {
        event.preventDefault();

        const id = event.target.getAttribute('href').replace('#', '');

        window.scrollTo({
            top: document.getElementById(id).offsetTop,
            behavior: 'smooth',
        });
    }
})