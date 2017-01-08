/**
 * Created by Khai Edouard on 1/5/2017.
 */


$('.form-container label').each(function(){
    var getTitle = $(this).html();
    $(this).parent().find('input').attr('placeholder', getTitle)

});


