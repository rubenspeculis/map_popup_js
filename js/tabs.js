/* tabs file */
/*global jQuery:false */
(function ($) {

  "use strict";
  $(document).ready(function(){
    var siteId = $('#siteid').html();

    var dataLink = '<span id="data-title" class="activeTab" title="Data table for this site">Data</span>';
    var dataLink1 = '<span id="datad-title" title="Downstream Data table for this site">Downstream</span>';
    var graphLink = '<span id="graphs-title" title="Graphs for this site">Graphs</span>';
    var alertLink = '<span id="alerts-title" title="Alerts for this site">Alerts</span>';
    var infoLink = '<span id="info-title" title="Site Information">About</span>';
    var rssLink = '<span id="rss"><a href="/feed/'+siteId+'" target="_blank" title="Subscribe to this site\'s RSS Feed"><img src="/sites/all/modules/custom/map_popup_js/images/rss.png" alt="RSS Icon" height="24px" /></a></span>';
    var csvLink = '<span id="download-title" title="Download CSV files for this site">CSV</span>';

    var tabTitles;

    if( $('#downstream-data').length !== 1){
      tabTitles = '<div id="tabs">'+ dataLink + graphLink + alertLink + infoLink + csvLink + rssLink + '</div>';
    } else {
      tabTitles = '<div id="tabs">'+ dataLink + dataLink1 + graphLink + alertLink + infoLink + csvLink + rssLink + '</div>';
    }

    $('.data').prepend(tabTitles);
    $('#data').prepend(tabTitles);
    $('#tabs span').css('font-size', '18px').css('cursor', 'pointer');
    $('#rss a').css('text-decoration', 'none').css('color', 'black');
    var hist = $('div.data-historical');
    var linkToReports = '<div id="data-reports"><h3>Related Reports</h3><p><a href="http://www.mdba.gov.au/river-data/current-information-forecasts/weekly-report">River operations Weekly report</a><br /><a href="http://www.mdba.gov.au/river-data/current-information-forecasts/flow-salinity-report">Flow &amp; salinity forecast report</a></li></p></div>';
    $('.data').append(hist);
    $('#data').append(hist);
    $('#data-info').append(linkToReports);
    hideAllOther('div#data-table');
    $('#data-title').addClass('activeTab');
    $('span').on('click', '#data-title', function(){ hideAllOther('div#data-table'); $(this).addClass('activeTab'); });
    $('span').on('click', '#datad-title', function(){ hideAllOther('#downstream-data'); $(this).addClass('activeTab'); });
    $('span').on('click', '#graphs-title', function(){ hideAllOther('#data-charts'); $(this).addClass('activeTab');});
    $('span').on('click', '#alerts-title', function(){ hideAllOther('#data-alerts'); $(this).addClass('activeTab');});
    $('span').on('click', '#info-title', function(){ hideAllOther('#data-info'); $(this).addClass('activeTab');});
    $('span').on('click', '#report-title', function(){ hideAllOther('#data-reports'); $(this).addClass('activeTab');});
    $('span').on('click', '#download-title', function(){ hideAllOther('.data-historical'); $(this).addClass('activeTab');});

    $('.top-title-wrap').parent().parent().prepend('<div class="backLink"><a class="goBack" href="/content/openlayers-map">Go back to map</a></div>');
    $('div.backLink').css('float', 'right');
    $('.data').append();

    if($('.left div.item-list').length === 0) {
      $('.site-images').remove();
    }

  });

  function hideAllOther(showThis){
    $('div#data-table').hide();
    $('div#downstream-data').hide();
    $('div#data-charts').hide();
    $('div#data-alerts').hide();
    $('div#data-info').hide();
    $('div.data-historical').hide();
    $('div#data-table h2').hide();
    $('div#downstream-data h2').hide();
    $('div#data-charts h2').hide();
    $('div#data-alerts h2').hide();
    $('div#data-info h2').hide();
    $('div.data-historical h2').hide();
    $('.activeTab').removeClass('activeTab');
    $(showThis).show();
  }

})(jQuery);
