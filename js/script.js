[].forEach.call(document.querySelectorAll('.menu-item'), function (el){
    el.addEventListener('click', function(e){
        document.querySelector('input[type="checkbox"].input').checked = false;
    });
});