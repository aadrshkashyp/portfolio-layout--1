const Portfolio = function () {
	function makeWords() {
		var words = [
			{
				text: "rapping",
				weight: 12
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "Weeb",
				weight: 15
			}, {
				text: "newText",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, { delay: 150 });
	}

	function displayWordCloud() {
		var count = 1;

		$(window).on('scroll', function () {

			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Wordpress Expert🏁.", " have started journey to Full-Stack Developer👨‍⚕️.", "love everything about code👨‍💻.", "solve problems🧐.", "am also a weeb🍣🍙🍡🍥."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 0.5,
			contentType: 'text',
			callback: function () {
				$("#writing-text").css({ "color": "#0f0f0f" });
			},
			preStringTyped: function () { },
			onStringTyped: function () { }
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
