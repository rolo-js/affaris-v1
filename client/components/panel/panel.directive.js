'use strict';

angular.module('affarisApp')
  .directive('panel',['$animate','$rootScope' ,function ($animate,$rootScope) {
    function link (scope, elem, attrs) {

      if(!scope.panel){
        scope.panel ={
          title:'Panel'
        }
      }
      scope.allowFullscreen = scope.panel.allowFullscreen;
      scope.hasMenu = ( scope.panel.menuitems &&
                        scope.panel.menuitems.constructor === Array  &&
                        scope.panel.menuitems.length > 0);
      //console.log(scope.hasMenu);
      if (scope.hasMenu){
        scope.menuitems = scope.panel.menuitems;
        //console.log(scope.menuitems);
      }
      //console.log(elem.find('[data-toggle=dropdown]'));
      elem.addClass('p-panel');
      var panelBody = elem.find('.p-body');

      if (scope.fullgrid){
        panelBody.toggleClass('p-body p-body-fullgrid');
      }
      elem.on('mouseenter',function(){
        elem.find('.controls').addClass('active');
      });
      elem.on('mouseleave',function(){
        elem.find('.controls').removeClass('active');
      });
      scope.isfull=false;

      scope.fullscreen = function(){
        var dom = elem[0];
        var header = elem.find('header');
        var headerHeight;
        $rootScope.editing = true;
        scope.origRect;
        if (!scope.isfull) {
          scope.origRect = dom.getBoundingClientRect();

          $('body').css({overflow:'hidden'});
          elem.css({
            position:'fixed','z-index':2000,
              top:scope.origRect.top,
              left:scope.origRect.left,
              width:scope.origRect.width,
              height:scope.origRect.height
          });
          $(elem).animate({
            top:0,
            left:0,
            width:'100%',
            height:'100%'},300,'swing',
            function(){
              var fullRect = elem[0].getBoundingClientRect();
              headerHeight = elem.find('header')[0].getBoundingClientRect().height;
              var newHeight = fullRect.height - headerHeight;
              elem.find('.ui-grid').css('height',newHeight)

              scope.resize({ height: newHeight});
            });

          //elem.find('.p-body').css({'height':'100%','padding-bottom':'62px'});
          scope.isfull=true;

        } else{
          scope.isfull=false;
            $rootScope.editing = false;
            $(elem).animate({
              top:scope.origRect.top,
              left:scope.origRect.left,
              width:scope.origRect.width,
              height:scope.origRect.height},300,
              'swing',
                function(){
                  elem.css({
                    position:'','z-index':'',
                  top:'',
                  left:'',
                  width:'',
                  height:''});
                      $('body').css({overflow:'auto'});

                  elem.find('.p-body').css('height','450px');
                  elem.find('.ui-grid').css('height','450px');
                  scope.resize();
                }
              );
        }
      }

    }

    return {
      templateUrl: 'components/panel/panel.html',
      restrict: 'A',
      scope:{
        panel:'=',
        resize:'&',
        fullgrid:'=',
        toggleFilters: '&'
      },
      transclude:true,
      link: link
    };
  }]);
