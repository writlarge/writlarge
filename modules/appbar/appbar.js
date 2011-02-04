// $Id$
Drupal.behaviors.appbar = function (context) {
  if (context == document) {
    $('body').addClass('with-appbar');
    if (Drupal.settings.appbar.use_alerts) {
      var interval = setInterval("appbar_refresh();", Drupal.settings.appbar.delay);
    }
  }
  //Make sure we can run context.find().
  var ctxt = $(context);
  appbar_tn();
  ctxt.find('#appbar_container').show();
  ctxt.find('#appbar_alerts').click(function() {
    var $list = $('#appbar_alerts_list');
    var $bar = $('#appbar_messages');
    if ($bar.css('background-image') == 'url("'+ Drupal.settings.appbar.open_path +'")') {
      $bar.css('background-image', 'url("'+ Drupal.settings.appbar.close_path +'")');
    }
    else {
      $bar.css('background-image', 'url("'+ Drupal.settings.appbar.open_path +'")');
    }
    $list.toggle();
    if ($list.is(':visible')) {
      $list.load(Drupal.settings.appbar.base_path +'appbar/refresh/list');
      $('#appbar_count').html('0');
    }
  });
  if ($.fn.hoverIntent) {
    ctxt.find('.appbar-block-hover').hoverIntent(appbarHoverOn, appbarHoverOff);
  }
  else {  
    ctxt.find('.appbar-block-hover').hover(appbarHoverOn, appbarHoverOff);
  }
  ctxt.find('.appbar-block-popup .appbar-block-title').click(function(e) {
    e.preventDefault();
    var content = $(this).prev('.appbar-block-content');
    var visible = content.slideToggle('fast').attr('display');
    if (visible != 'none') {
      $('.appbar-block-content:visible').not(content).hide();
    }
  });
  ctxt.find('.appbar-block-popup .appbar-minimize').click(function(e) {
    e.preventDefault();
    $(this).parent().parent().slideToggle('fast');
  });
  $('.appbar-block-popup,.appbar-block-hover').each(function(index) {
    //The -1 is a cheap hack to make this look better when the border is 1px.
    var leftPos = $(this).offset().left - 1;
    $(this).find('.appbar-block-content').css('left', leftPos);
  });
  $('.appbar-block:first').addClass('first');
  $('.appbar-block:last').addClass('last');
  ctxt.find('.appbar-block-controls').hover(
    function() {$('.appbar-block-configure').show(); },
    function() { $('.appbar-block-configure').hide(); }
  );
}
function appbar_refresh() {
  $('#appbar_count').load(Drupal.settings.appbar.base_path +'appbar/refresh/count');
  //Delay switching the class until the new count has loaded.
  setTimeout("appbar_tn()", 1000);
}
//JQuery 1.3 has the more efficient toggleClass(class, switch).
function appbar_tn() {
  if (parseInt($('#appbar_count').html()) > 0) {
    $('#appbar_messages').addClass('appbar-has-new');
  }
  else {
    $('#appbar_messages').removeClass('appbar-has-new');
  }
}
function appbarHoverOn(event) {
  var content = $(event.currentTarget).find('.appbar-block-content');
  content.slideToggle('fast');
  //Hide other open blocks.
  $('.appbar-block-content:visible').not(content).slideUp('fast');
}
function appbarHoverOff(event) {
  $(event.currentTarget).find('.appbar-block-content').slideToggle('fast');
}
