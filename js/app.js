$(document).ready(function(){

	var i = 1;

	for (var i; i < 101; i++) {
		if ((i % 5 === 0) && (i % 3 === 0)) {
			$("ul").append("<li>" + "FizzBuzz" + "</li>");
		}
		else if ((i % 3) ===0) {
			$("ul").append("<li>" + "Fizz" + "</li>");
		}
		else if ((i % 5) === 0  ) {
			$("ul").append("<li>" + "Buzz" + "</li>");
		}
		else {
			$("ul").append("<li>" + i + "</li>");
		}
	}

});

