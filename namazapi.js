$('document').ready(function() {
    $('form').submit(function(e) {
        e.preventDefault();
        var $country = $('.country').val();
        var $month = $('.month').val();
        var $year = $('.year').val();
        namazTimings($country, $month, $year);
    });


    function namazTimings(country, month, year) {
        debugger
        $.ajax({
            method: 'GET',
            url: "http://api.aladhan.com/calendarByAddress?address=" + country + "&month=" + month + "&year=" + year + "&method=2",
            success: function(data) {
                callBack(data);
            },
            error: function(data) {
                console.log(data);
            }
        });
    }

    function callBack(data) {
        $.each(Object.keys(data.data.timings), function(i, v) {
            $('.timing-panel').append("<ul><li><p>" + v + ":" + data.data.timings[v] + "</p></li></ul>");
        })
    }
})
