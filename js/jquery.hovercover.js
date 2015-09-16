(function ($) {
  $.fn.hovercover = function () {
    return this.each(function () {
      var hovercover = $(this),
          images = hovercover.find('.hovercover-image'),
          tabsContainer = hovercover.find('.hovercover-tabs');

      function _showImage(image) {
        images.css('opacity', '0');
        image.css('opacity', '1');
      };

      function _init() {
        _showImage(images.first())
        images.each(function (index, image) {
          function hover() {
            _showImage($(image));
          };
          tab = $(document.createElement('div'))
            .append(document.createElement('span'))
            .addClass('hovercover-tab')
            .hover(hover)
            .appendTo(tabsContainer);
        });
      };

      _init();
    });
  }
}(jQuery));

$('.hovercover').hovercover();
