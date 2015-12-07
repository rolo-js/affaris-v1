'use strict';

angular.module('affarisApp')
  .directive('panel',['$animate','$rootScope' ,function ($animate,$rootScope) {


    function setOptions(options){
    var result = {
        hasFull : false,
        hasGrid : false,
        hasFilters : false,
        hasAdd : false,
        hasReports : false,
        hasDash : false,
        padding : false,
        stdHeight : true,
        title : ''
      }
      if (options){
        result.hasDash = options.hasDash;
        result.hasFull = options.hasFull;
        result.padding = options.padding;
        result.hasGrid = options.hasGrid;
        result.hasFilters = options.hasFilters;
        result.hasAdd = options.hasAdd;
        result.hasReports = options.hasReports;
        result.hasMenu = result.hasFilters || result.hasAdd || result.hasReports;
        result.gridApi = options.gridApi;
      }
      return result;
    }
    function link (scope, elem, attrs) {

      scope.options = setOptions(scope.panel);

      elem.addClass('p-panel');
      var panelBody = elem.find('.p-body');

      if (!scope.options.padding){
        panelBody.addClass('nopadding');
      }
      if (scope.options.stdHeight){
        panelBody.addClass('std-height');
      }
      if (scope.options.hasGrid){
        //console.log(scope.options);
        scope.$watch('options',function(newValue,oldValue){
          console.log(newValue);
          scope.gridApi = scope.options.gridApi;
        });
      }

      elem.on('mouseenter',function(){
        elem.find('.controls').addClass('active');
      });
      elem.on('mouseleave',function(){
        elem.find('.controls').removeClass('active');
      });
      scope.isfull=false;

      scope.fullscreen = function(){
        //GOING TO FULLSCREEN
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
              elem.find('.p-body').removeClass('std-height');
              if (scope.options.hasGrid){
                var fullRect = elem[0].getBoundingClientRect();
                headerHeight = elem.find('header')[0].getBoundingClientRect().height;
                var newHeight = fullRect.height - headerHeight;
                elem.find('.ui-grid').css('height',newHeight)
                scope.options.gridApi.core.handleWindowResize();
              }
            });
          scope.isfull=true;

        } else{
          // GOING BACK
          scope.isfull=false;
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
              panelBody.addClass('std-height');
              elem.find('.ui-grid').css('height','');
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
        fullgrid:'=',
        resize:'&',
        toggleFilters: '&'
      },
      transclude:true,
      link: link
    };
  }]);
