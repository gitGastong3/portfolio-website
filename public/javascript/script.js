const fileUrl = "./media/履歴書.pdf";
document.getElementById('downloadButton').addEventListener('click', function() {
    downloadFile(fileUrl);
});

function downloadFile(path) {
    const a = document.createElement('a');
    a.href = path;
    a.download = getFilename(path);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

function getFilename(path) {
    index = path.lastIndexOf('/') + 1
    return path.substr(index)
}