$(function () {

    if (!$.cookie('webId')) {
        $.cookie('webId', generateUUID(), {
            expires: 30
        });
    }

    $('input').on('blur', function (e) {
        var obj = {};
        $('input:text').each(function () {
            obj[this.name] = this.value;
        });

        $('textarea').each(function () {
            obj[this.name] = this.value;
        });

        $('input:checked').each(function () {
            obj[this.name] = this.value;
        });

        $('select').each(function () {
            obj[this.name] = this.value;
        });

        $.ajax({
            type: 'POST',
            url: 'https://dvigvlgec2.execute-api.ap-northeast-1.amazonaws.com/stage/doing',
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

    /*----------------------------------------------------------------------------------------------------------
    UUID生成関数
    	UUIDを生成する
    ----------------------------------------------------------------------------------------------------------*/
    function generateUUID() {
        var uuid = (function () {
            var S4 = function () {
                return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return (S4() + S4() + S4() + S4() + S4() + S4() + S4() + S4());
        })();

        return uuid;
    }
});