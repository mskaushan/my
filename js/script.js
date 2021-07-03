/*
[].forEach.call(document.querySelectorAll('.menu-item'), function (el) {
    el.addEventListener('click', function(e) {
        document.querySelector('input[type="checkbox"].input').checked = false;
    });
});
*/

/*
document.querySelectorAll('.menu-item').forEach((item) =>
    item.addEventListener('click', () => {
        document.querySelector('input[type="checkbox"].input').checked = false;
    })
)
*/

document.querySelector('.menu').addEventListener('click', () => {
    document.querySelector('input[type="checkbox"].input').checked = false;
})