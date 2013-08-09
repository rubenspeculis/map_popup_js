/**
 * JS test file
 */

(function ($) {

  $(document).ready(function(){

    // Define mapPort and Append the new div
    var mapPort = $('.openlayers-views-map');
    mapPort.append("<div id='map-info'></div>");

    // Hide Div by Default
    $('#map-info').hide()

    mapPort.on('click', 'image', function(event){

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
        $('#map-info').html('<a href="#" class="toggleIt">X</a>').append(featureName).append(featureDesc);
        $('#map-info').append('<a href="#" class="toggleIt">Close</a>');
        $('.toggleIt').on('click', function(event){
          event.preventDefault();
          $('#map-info').hide('fast');
          $('#map-info').html('');
        });
        $('#map-info').show('fast');
      }
    });

    mapPort.on('click', 'circle', function(event){

      var pupup = $('#popup_contentDiv');

      if(typeof(popup.contentHTML) != 'undefined') {
        popup = popup.contentHTML;

        $('#map-info').hide('fast');

        var clusters = $('#popup_contentDiv').children('div');

        if($('#popup_contentDiv').is(':visible')){
          $('#popup_contentDiv').parent().parent().hide();
        }

        var feature = '';
        for(var i = 0; i < clusters.length; i++){
          if( $(clusters[i]).find('.openlayers-tooltip-name').html() != null ){
            feature += '<h3 class="featureName">' + $(clusters[i]).find('.openlayers-tooltip-name').html() + '</h3>';
          }
          if( $(clusters[i]).find('.openlayers-tooltip-description').html() != null ){
            feature += '<div class="featureDesc">' + $(clusters[i]).find('.openlayers-tooltip-description').html() + '</div>';
          }
        }

        $('#map-info').html('<a href="#" class="toggleIt">X</a>').append(feature);
        $('#map-info').append('<a href="#" class="toggleIt">Close</a>');
        $('.toggleIt').on('click', function(event){
          event.preventDefault();
          $('#map-info').hide('fast');
          $('#map-info').html('');
        });
        $('#map-info').show('fast');
      }
    });
  });


})(jQuery);

