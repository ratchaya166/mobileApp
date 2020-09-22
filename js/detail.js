
    document.addEventListener('init', function (event) {
        var page = event.target;
        console.log(page.id)
        if (page.id === 'home') { 
            page.querySelector('#movie1').onclick = function () {
                document.querySelector('#myNavigator').pushPage('html/detail.html');
            };
        } else if (page.id === 'detail') {
            document.querySelector('ons-back-button').onclick = function (event) { 
                document.querySelector('#myNavigator').pushPage('home.html'); }
        }
    });
