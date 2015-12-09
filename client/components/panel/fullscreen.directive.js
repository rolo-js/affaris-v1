'use strict';

angular.module('affarisApp')
  .directive('afFullscreen', ['$animate', '$rootScope', '$timeout', function($animate, $rootScope, $timeout) {




    function link(scope, elem, attrs) {
      scope.isFull = false;
      var container = elem.closest('section');

      function escapeHandler(ev) {
        if (ev.keyCode == 27) {
          console.log('escape!');
          goBack();
        };
      }

      function goFull( ) {
        scope.origRect = container[0].getBoundingClientRect();
        scope.isStd = container.hasClass('af-panel-std');
        $('body').css({
          overflow: 'hidden'
        });
        $(document).bind('keyup', escapeHandler);
        container.css({
          position: 'fixed',
          'z-index': 2000,
          top: scope.origRect.top,
          left: scope.origRect.left,
          width: scope.origRect.width,
          height: scope.origRect.height
        });
        $(container).animate({
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }, 300, 'swing',
          function() {
            container.removeClass('af-panel-std');
            // if (scope.options.hasGrid) {
            //   var fullRect = elem[0].getBoundingClientRect();
            //   headerHeight = elem.find('header')[0].getBoundingClientRect().height;
            //   var newHeight = fullRect.height - headerHeight;
            //   elem.find('.ui-grid').css('height', newHeight)
            //   scope.options.gridApi.core.handleWindowResize();
            // }
          });
        scope.isFull = !scope.isFull;
      }

      function goBack( ) {
        if (scope.isStd) {
          container.addClass('af-panel-std')
        }
        $(container).animate({
            top: scope.origRect.top,
            left: scope.origRect.left,
            width: scope.origRect.width,
            height: scope.origRect.height
          }, 300,
          'swing',
          function() {
            container.css({
              position: '',
              'z-index': '',
              top: '',
              left: '',
              width: '',
              height: ''
            });
            $('body').css({
              overflow: 'auto'
            });
          }
        );
        scope.isFull = !scope.isFull;
        $(document).unbind('keyup', escapeHandler)
      }


      if (elem) {
        elem.on('click', function(ev) {

          if (!scope.isFull) {
            //GO FULL SCREEN
            goFull( container);

          } else {
            // GO BACK TO NORMAL
            goBack( container);
          }
        });
      }

    }
    return {
      restrict: 'A',
      link: link
    };
  }]);
