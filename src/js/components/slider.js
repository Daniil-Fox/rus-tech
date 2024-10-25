import {Swiper} from 'swiper'
import { FreeMode } from 'swiper/modules';

Swiper.use([FreeMode])
window.addEventListener('DOMContentLoaded', () => {

  const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
    let swiper;

    breakpoint = window.matchMedia(breakpoint);

    const enableSwiper = function(className, settings) {
      swiper = new Swiper(className, settings);

      if (callback) {
        callback(swiper);
      }
    }

    const checker = function() {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings);
      } else {
        if (swiper !== undefined) swiper.destroy(true, true);
        return;
      }
    };

    breakpoint.addEventListener('change', checker);
    checker();
  }

  // const someFunc = (instance) => {
  //   if (instance) {
  //     instance.on('slideChange', function (e) {
  //       console.log('*** mySwiper.activeIndex', instance.activeIndex);
  //     });
  //   }
  // };

  resizableSwiper(
    '(max-width: 900px)',
    '.benefits__slider',
    {
      freemode: true,
      spaceBetween: 20,
      slidesPerView: 'auto',

    },
    // someFunc
  );
  resizableSwiper(
    '(max-width: 576px)',
    '.prod__slider',
    {
      freemode: true,
      spaceBetween: 20,
      slidesPerView: 'auto',
    },
    // someFunc
  );


});
