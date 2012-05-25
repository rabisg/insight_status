(function ($) {
  var maxlength = 140;
  Drupal.behaviors.insight_publish_module = {
    attach: function (context, settings) {
      $('#edit-insight-publish-characters').hide();
      $('#edit-insight-publish-textfield', context).bind('keyup keydown', function () {
        if($('#edit-insight-publish-twitter').is(":checked") && $(this).val().length > maxlength) {
          $(this).val($(this).val().substring(0, maxlength)); 
        }
        $("label[for='edit-insight-publish-characters']").text(maxlength-$(this).val().length + ' characters left');
      });
      $('#edit-insight-publish-twitter', context).click( function () {
        $('#edit-insight-publish-characters').toggle();
        $('#edit-insight-publish-textfield').trigger('keydown');          
      });
    }
  };
})(jQuery);

function confirmPost() {
  if(!(document.getElementById('edit-insight-publish-textfield').value.length > 0))
    return false;
  if(document.getElementById('edit-insight-publish-twitter').checked)
    return confirm('Are you sure you want to post this?');
  return true;
}
