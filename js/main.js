$(document).ready(function() {
		
	$("#makeRequest").click(function(){
		alert("ow");
$.getJSON('http://anyorigin.com/get?url=http%3A//tympanus.net/codrops/&callback=?', function(data){
	$('#output').html(data.contents);
});
		//make request
	});
});
