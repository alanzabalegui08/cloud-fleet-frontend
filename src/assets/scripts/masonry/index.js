import * as $ from 'jquery';
import Masonry from 'masonry-layout';

export default (function () {
  window.addEventListener('load', () => {
    if ($('.masonry').length > 0) {
      new Masonry('.masonry', {
        itemSelector: '. ',
        columnWidth: '. ',
        percentPosition: true,
      });
    }
  });
}());
