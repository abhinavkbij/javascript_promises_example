function process_click(d) {
	// get keyword value from form
	var string = d.keyword.value;

	// api url
	giphyApiUrl = "http://api.giphy.com/v1/gifs/search?apikey=pLfr53QOcegFLeFIEvQCi15jaChIQuly&q="+string;

	// let promise = fetch(giphyApiUrl);
	// promise.then(getData);
	// promise.catch(getErr);

	// function getData(data) {
	// 	console.log(data);
	// }

	// function getErr(err) {
	// 	console.log(err);
	// }

	// above code simplified,,,,,getting data from api using promises
	function ini_main() {
		fetch(giphyApiUrl)
			.then(res => {
				return res.json()
			})
			.then(json => {
				createImg(json.data);
			})
			.catch(err => console.log(err));
	}

	// print keyword in html
	function createPara(word) {
		var x = document.createElement('h1');
		var t = document.createTextNode(word);
	 	x.appendChild(t);
	 	x.style.textTransform = "capitalize"
	 	document.body.appendChild(x);
	}

	// create images from received urls
	function createImg(urls) {
		for (var i=0;i<urls.length;i++) {
			var x = document.createElement('IMG');
			x.setAttribute("src", urls[i].images['fixed_height_small'].url);
		  	x.setAttribute("width", "304");
		  	x.setAttribute("height", "228");
		  	// x.setAttribute("alt", string);
	  		document.body.appendChild(x);
		}
	}

	createPara(string);
	ini_main();
}