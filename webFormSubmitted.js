$(function () {
        var obj = {};
        $('input[type="hidden"]').each(function () {
            obj[this.name] = this.value;
        });
console.log(obj);

    $('button[name="submit"]').on('click', function (e) {

        $.ajax({
            type: 'POST',
            url: 'https://dvigvlgec2.execute-api.ap-northeast-1.amazonaws.com/stage/submitted',
            data: JSON.stringify({
                appId: 'sample-form-appId',
                webId: $.cookie('webId'),
                body: obj
            }),
            dataType: 'json',
            contentType: 'application/json'
        }).done(function (data) {
            console.log(data);
        }).fail(function (err) {
            console.log(err);
        });
    });


});