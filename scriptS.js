$(document).ready(function() {
    var fixHelper = function(e, ui) {
      ui.children().each(function() {
        $(this).width($(this).width());
      });
      return ui;
    };
    
    $('tbody').sortable({ 
      appendTo: "table",
      axis: "y",
      helper: fixHelper,
      forceHelperSize: true,
      forcePlaceholderSize: true
    }).disableSelection();
    
    
    searchfield = $('#search');
    
    searchfield.on('keyup change', function() {
      var titles = $('.project-steps-sortable').find('.title');
      var array = [];
      
      /* show all elements */
      titles.each(function(index) {
        console.log($(titles[index]).parent());
        $(titles[index]).parent().show();
        array.push(index);
      });
  
          
      /* put title-text in an array */
      var title_text = [];
      titles.each(function() {
       title_text.push($(this).html());
      });
      
      /* create search object put indices in array result */
      var f = new Fuse(title_text);
      var result = f.search(searchfield.val());
      
      /* if searchfield is empty every item matches */
      if(searchfield.val() == '') result = array;
      
      /* subtract arrays */
      var sub = $.grep(array, function(n, i){
        return $.inArray(n, result) == -1;
      });
  
      /* hide elements */
      $.each(sub, function(k, v) {
        $(titles[v]).parent().hide();
      });
    });
    
  });
  