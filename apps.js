document.addEventListener("keydown", function(event) {
			if (event.ctrlKey && event.key === "u") {
				makeGetRequest();
			}
		});

		document.addEventListener("contextmenu", function(event) {
			makeGetRequest();
		});

		function makeGetRequest() {
			fetch("/useraction");
		}
