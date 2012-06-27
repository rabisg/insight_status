(function ($) {
  var maxlength = 140;
  Drupal.behaviors.insight_publish_module = {
    attach: function (context, settings) {
      $('#edit-insight-status-characters').hide();
      $('#edit-insight-status-textfield', context).bind('keyup keydown', function () {
        if($('#edit-insight-status-twitter').is(":checked") && $(this).val().length > maxlength) {
          $(this).val($(this).val().substring(0, maxlength)); 
        }
        $("label[for='edit-insight-status-characters']").text(maxlength-$(this).val().length + ' characters left');
      });
      $('#edit-insight-status-twitter', context).click( function () {
        $('#edit-insight-status-characters').toggle();
        $('#edit-insight-status-textfield').trigger('keydown');          
      });
    }
  };
})(jQuery);

function confirmPost() {
  if(!(document.getElementById('edit-insight-status-textfield').value.length > 0))
    return false;
  if(document.getElementById('edit-insight-status-twitter').checked)
    return confirm('Are you sure you want to post this?');
  return true;
}
