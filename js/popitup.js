/**
 * JS test file
 */

(function ($) {

  $(document).ready(function(){

    // Define mapPort and Append the new div
    var mapPort = $('.openlayers-views-map');
    var topOffset = mapPort.find('#openlayers-container-openlayers-map').height();
    var layers_html = $('#block-block-2');


    mapPort.find('#openlayers-container-openlayers-map').append("<div id='toolset' style='margin-top:-"+topOffset+"px'></div>");

    mapPort.find('#toolset').append("<div id='layers-selector' style='height:"+topOffset+"px;'><div id='full'></div><div id='layers'></div></</div>");
    $('#layers').html(layers_html);
    $('#block-block-2').css('display', 'block');
    $('#block-block-2 .block-inner').hide();
    $('.baseLbl').remove();
    $('.baseLayersDiv').remove();
    $('.dataLbl').remove();

    mapPort.find('#toolset').append("<div id='map-info'></div>");

    // Hide Div by Default
    $('#map-info').hide()
    $('#toolset').css('width', '82px');

    $('body').on('click', '.toggleIt', function(event){
      event.preventDefault();
      $('#toolset').animate({width: '82px'}, 'fast', function(){
        $('#map-info').hide();
        $('#map-info').html('');
      });
    });

    mapPort.on('click', 'image', function(event){


      $('#map-info').hide('fast');

      var pupup = $('#popup_contentDiv');

      if($('#popup_contentDiv').is(':visible')){
        $('#popup_contentDiv').parent().parent().hide();
      }

      if(typeof(popup.contentHTML) != 'undefined') {
        popup = popup.contentHTML;


        $('#map-info').hide('fast');
        if( $('#popup_contentDiv').find('.openlayers-tooltip-name').html() != null ) {
          var featureName = '<h3 class="featureName">' + $('#popup_contentDiv').find('.openlayers-tooltip-name').html() + '</h3>';
        }
        if( $('#popup_contentDiv').find('.openlayers-tooltip-description').html() != null ){
          var featureDesc = '<div class="featureDesc">' + $('#popup_contentDiv').find('.openlayers-tooltip-description').html() + '</div>';
        }
        $('#map-info').html('').html('<a href="#" class="toggleIt">X</a>').append(featureName).append(featureDesc);

        $('#toolset').animate({width: '432px'}, 'fast', function(){
          $('#map-info').css('height', topOffset); 
          $('#map-info').show();
        });
      }
      $('.olPopup').css('z-index', '-100000000'); 
    });

    /** Cluster Action */
    mapPort.on('click', 'circle', function(event){

      $('#map-info').hide('fast');
      $('#toolset').css('width', '82px');
      $('.olPopup').css('z-index', '-100000000'); 
      var pupup = $('#popup_contentDiv');

      popup = popup.contentHTML;
      if(typeof(popup.contentHTML) != 'undefined') {
        popup = popup.contentHTML;

        $('#map-info').hide('fast');

        var clusters = $('#popup_contentDiv').children('div');

        if($('#popup_contentDiv').is(':visible')){
          $('#popup_contentDiv').parent().parent().hide();
        }
      }

      var ol = $('.openlayers-map').data('openlayers').openlayers;
      ol.zoomIn();

    });

    $('#block-block-2').on('hover', function(event){
      labelShower();
    });

  });

  function labelShower(){
    $('#block-block-2 label').each(function(){
        var flyoutText = ($(this).html());
        var className = flyoutText.toLowerCase().replace(/ /g, '-');
        var flyoutDiv = '<div class="flyout '+className+'">'+flyoutText+'</div>';
        var countFlyOut = $('.'+className).length;
        if(countFlyOut == 0 ){
          $(this).after(flyoutDiv);
        }
        $('.flyout').hide();
        $(this).on('mouseenter', function(){
          $('.'+className).show();
        });
        $(this).on('mouseleave', function(){
          $('.'+className).hide();
        });
    });
  }


})(jQuery);

