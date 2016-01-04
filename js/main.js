$(document).ready(function() {
		
	$("#makeRequest").click(function(){
		alert("ow");
$.getJSON('http://anyorigin.com/get?url=https%3A//www.explore.ms/navigation.aspx&callback=?', function(data){
	$('#output').html(data.contents);
});
		//make request
	});
});
