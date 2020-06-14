var fileName;

var loadFile = function() {
	const inputFile = document.getElementById('fileInput').files[0];
	fileName = inputFile.name
	const reader = new FileReader();
	reader.readAsText(inputFile);
	reader.onload = function(e) {
		document.getElementById('editor').value = e.target.result
		document.getElementById('fileName').value = fileName
	};
}

var downloadNewFile = function() {
	updatedText = document.getElementById('editor').value;
	var outputFile = new Blob([updatedText], {type: 'text/plain'});
	var downloadLink = document.createElement('a');
	downloadLink.setAttribute('href', URL.createObjectURL(outputFile));
	downloadLink.setAttribute('download', fileName);
	downloadLink.click();
	document.body.removeChild(downloadLink);
}

var updateFileName = function() {
	fileName = document.getElementById('fileName').value
}
