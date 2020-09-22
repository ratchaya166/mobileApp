
document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
      .innerHTML = event.tabItem.getAttribute('label');
  });


  
  new Vue({
    el: '#app',
    template: '#main',
    data() {
      return {
        carouselIndex: 0,
        items: {
          BLUE: '#085078',
          DARK: '#373B44',
          ORANGE: '#D38312'
        },
        dots: {
          textAlign: 'center',
          fontSize: '30px',
          color: '#fff',
          position: 'absolute',
          bottom: '40px',
          left: 0,
          right: 0
        }
      };
    }
  });