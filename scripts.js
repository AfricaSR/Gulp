// 1.1
$('div.module');

// 1.2
$("ul#myList li:nth-child(3)");

$("li:nth-child(3)", $("#myList"));

$("ul#myList").next().next().next();

// 1.3
$("input", $("label[for='q']"));

// 1.4
$(':hidden').length;

// 1.5
$('img[alt]').length;

// 1.6
$("tr:odd");

// 2.1
 $("img").each(function() {  
    imgsrc = this.src;
    console.log(imgsrc);
   });

// 2.2
$('form > input').add('<input class="submit" value="Holi"/>').appendTo( document.body );

// 2.3
$('#myList', $('[class^="current"]'));

// 2.4
$(('#specials', $('select')), $('submit'));

// 2.5
$('#slideshow li:first-child').attr('class','current').nextAll().attr('class','disabled');

// 3.1
var item = ('#myList').length;

for (var i = item + 1 ; i < item + 5; i++) {

    var $li = $('<li>List item'+i+'</li>');

    $('#myList').append($li);

}

// 3.2
$('#myList li:even').remove();

// 3.3
$('div.module:last').append($('<h2>prova h2</h2>')).append($('<p>prova p</p>'));

// 3.4
$('select[name=day]').append('<option value="wednesday">Wednesday</option>');

// 3.5
$('div.module:last').after('<div class="module"><img src="images/bread.jpg"/></div>');


// 4.1
var lab = $('label').text();

$('label').next().attr('value', lab);

// 4.2
$('label').next().attr('class','hint');

// 4.3
$('label').remove();

// 4.4
$('input[type="text"]').focus(function() {

    $(this).data('placeholder', $(this).attr('placeholder')).attr('placeholder', '');

    $("input[type='text']").removeClass("hint");

});
    
// 4.5
$('input[type="text"]').blur(function() {

     $(this).attr('placeholder', $(this).data('placeholder'));

    $("input[type='text']").addClass("hint");
    
});