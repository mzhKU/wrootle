$(document).ready(function() {

    var textAreaHeight = $('#inp').height();
    var textAreaWidth  = $('#inp').width();
    var fontSize = 200;

    // Setup font.
    $('#inp').css('font-family', "Tahoma, sans-serif");
    $('#inp').css('font-size', fontSize + "px");
    $('#hiddenSpan').css('font-family', "Tahoma, sans-serif");
    $('#hiddenSpan').css('font-size', fontSize + "px");

    // Global scope probably not required.
    // var textHeight = 0;
    var factor = 0.85;

    $('#inp').keyup(resize);

    function decreaseFontWidth(textHeight, factor, fontSize) {

        // Console inspection.
        console.log("Text area height:", textAreaHeight);
        console.log("Font size:", fontSize);

        if (textHeight > textAreaHeight) {
            var newFontSize = fontSize*factor;
            console.log("New font size:", newFontSize);
    
            $('#inp').css("font-size", newFontSize+"px");
            $('#hiddenSpan').css("font-size", newFontSize+"px");

            textHeight = $('#hiddenSpan').height();
    
            return decreaseFontWidth(textHeight, factor, newFontSize);
        } else {
            return factor;
        }
    }

    function resize() {
        $('#hiddenSpan').html($('#inp').val());
        var textHeight = $('#hiddenSpan').height();
        
        decreaseFontWidth(textHeight, factor, fontSize);
    
        if($('#inp').val()=="") { 
            $('#inp').css('font-family', 'Tahoma, sans-serif');
            $('#inp').css('font-size', '200px');
            $('#hiddenSpan').css('font-family', "Tahoma, sans-serif");
            $('#hiddenSpan').css('font-size', "200px");
        }
    }

    /* INCLUDE. ************************************************ */
    $('#style_minimal').click(function() {
        $('#inp').css('background-color', 'white');
        $('#inp').css('border', '10px solid #aaaaaa');
        $('#inp').css('color', 'black');
    })
    $('#style_matte').click(function() {
        $('#inp').css('background-color', '#bbbaaa');
        $('#inp').css('border', '10px solid #aaaaaa');
        $('#inp').css('color', 'black');
    })
    $('#style_pop').click(function() {
        $('#inp').css('background-color', 'white');
        $('#inp').css('border', '10px solid magenta');
        $('#inp').css('color', 'magenta');
    })
    $('#style_rich').click(function() {
        $('#inp').css('background-color', '#2ecfff');
        $('#inp').css('border', '10px solid #25a5cc');
        $('#inp').css('color', 'white');
    })
    $('#font_tahoma').click(function() {
        $('#inp').css('font-family', 'Tahoma, sans-serif');
    })
    $('#font_courier').click(function() {
        $('#inp').css('font-family', 'Courier');
    })
    $('#font_times').click(function() {
        $('#inp').css('font-family', 'Times');
    })
    $('#font_roboto').click(function() {
        $('#inp').css('font-family', 'Roboto');
    })
    /* ********************************************************* */

});
