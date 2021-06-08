$(function(){
  var includes = $('[data-include]');
  jQuery.each(includes, function(){
    var file = 'views/' + $(this).data('include') + '.html';
    $(this).load(file);
  });
});

$(function(){ var codeMask = IMask( document.getElementById('code'), { mask: '********'});});
$(function(){ var smsMask = IMask( document.getElementById('sms'), { mask: '0000'});});
$(function(){ var phoneMask = IMask( document.getElementById('phone'), { mask: '+{7}(000)000-00-00'});});
$(function(){ var iinMask = IMask( document.getElementById('iin'), { mask: '000000-000000'});});
