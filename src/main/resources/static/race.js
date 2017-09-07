$(function(){
	var index = 0;
	var source;
	
    $('#racego').click(function() {
      	var position = $(this).attr('id');
      	var value = index % 2;
      	
      	if ( value == 0 ) {
      		source = position;
      	} else {
            var queryString = 'source=' + source + '&target=' + position;
            $.ajax({
                type : 'get',
                url : '/api/move',
                data : queryString,
                dataType : 'json',
                error: function() {
                    console.log('failure')
                },
                success : function(result) {
                	
                    console.log(result);
                    if(result.status){
                        var sourceHtml = $('#' + result.source.charPosition).html();
                        var targetHtml = $('#'+result.target.charPosition ).html(sourceHtml);
                        $('#'+result.chanceColor ).html(targetHtml);
                        $('#'+result.source.charPosition).html('');
                        $('#'+result.target.charPosition).html('');
                    }else {
                    	window.alert(result.errorMessage);
                    }
                  
                }
            });
      	}
      	
      	index++;
      	return false;
    });
});