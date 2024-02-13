document.getElementById('fileInput').onchange = function (event) {
    var fileName = event.target.files[0].name;
    document.getElementById('fileLabel').textContent = fileName;
};