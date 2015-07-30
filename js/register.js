$(function () {    
    $('#registrationform').submit(function (e) {
        e.preventDefault();
        if ($(this).parsley().isValid()) {
            var data = {};
            $(this).serializeArray().map(function (x) { data[x.name] = x.value; });
            
            $.ajax({
                type: 'POST',
                url: 'http://ionic-switzerland-api.azurewebsites.net/api/registration',
                data: JSON.stringify(data),
                contentType: "application/json",
                dataType: 'json',
                complete: function() {
                    $('#registrationform').addClass('hidden');
                    $('#success').removeClass('hidden');
                }
            });
        }
    });
    
    $('[name="submitTalk"]').change(function(){
        if(this.checked)
            $('#talk-description-block').removeClass('hidden');
        else
            $('#talk-description-block').addClass('hidden');

    });
}); 