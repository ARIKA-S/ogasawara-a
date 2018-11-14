$(window).load(function () {

    $.get('./itemlist.csv',function(data){

        var csv = $.csv()(data);

        var itemlist = '';

 
        //indexを使ってくり返し回数をカウントします

        $(csv).each(function(index){

            if(this[0] && this[1] == 1){

                itemlist += '

<li><a href="' + this[0] + '">' + this[2] + '</a></li>'

;

            }

        })

        $("#itemlist").append(itemlist);
        
    })

})
