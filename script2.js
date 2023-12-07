window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //top row is #1 on the list
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'ache', videoUrl: 'https://youtu.be/T9U4BRE2QYM', type: 'Challenge' },
    { name: 'MGSSMITMCHASTSEBBTGA', id: 'ask elijah loll', author: 'Elijaahhh', verifier: 'Elijaahhh', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', type: 'Challenge' },
    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/2SJF8UDYw9M', type: 'Challenge' },
    { name: 'ACHE', id: '92030106', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', type: 'Challenge' },
    { name: 'SHAMELESS', id: '92635514', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    { name: 'PEEP', id: '92116696', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    { name: '3 second roxor', id: '92433126', author: 'xFinleyGD', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    { name: 'never take yourself', id: '92575160', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' }
    //don't put a comma at the end of the last level..
  ];

  var challengeList = document.getElementById('challengeList');

  levels.forEach(function(level, index) {
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 1);
    var listThumbnail = document.createElement('div');
    listThumbnail.classList.add('list-thumbnail');
    listThumbnail.style.pointerEvents = 'none'; // Add this line
    var thumbnailLink = document.createElement('a');
    thumbnailLink.href = level.videoUrl;
    thumbnailLink.target = '_blank';
    var thumbnailImage = document.createElement('img');
    thumbnailImage.classList.add('list-image');
    thumbnailImage.alt = 'Level thumbnail';
    var videoId = extractVideoId(level.videoUrl);
    var thumbnailUrl = 'https://img.youtube.com/vi/' + videoId + '/mqdefault.jpg';
    thumbnailImage.src = thumbnailUrl;
    thumbnailLink.appendChild(thumbnailImage);
    listThumbnail.appendChild(thumbnailLink);
    var listInfo = document.createElement('div');
    listInfo.classList.add('list-info');
    var levelName = document.createElement('p');
    levelName.classList.add('level-name');
    levelName.textContent = level.name;
    listInfo.appendChild(levelName);
    listItem.appendChild(listNumber);
    listItem.appendChild(listThumbnail);
    listItem.appendChild(listInfo);
    challengeList.appendChild(listItem);

  
// Display the popup
listItem.addEventListener('click', function() {
  // Get the video ID from the video URL
  var videoId = extractVideoId(levels[index].videoUrl);

  // Create the iframe element for the embedded video
  var iframe = document.createElement('iframe');
  iframe.src = 'https://www.youtube.com/embed/' + videoId;
  iframe.width = '560';
  iframe.height = '315';
  iframe.frameborder = '0';
  iframe.allowfullscreen = true;
  iframe.style.border = 'none';
  iframe.style.borderRadius = "10px";

  // Get the popup element
  var popup = document.getElementById('popup');

  // Clear the existing content of 'popup-video'
  var popupVideo = document.getElementById('popup-video');
  popupVideo.innerHTML = '';

  // Append the iframe to the popup video
  popupVideo.appendChild(iframe);

  // Populate the popup with the corresponding information
  document.getElementById('popup-name').textContent = levels[index].name;
  document.getElementById('popup-id').textContent = levels[index].id;
  document.getElementById('popup-author').textContent = levels[index].author;
  document.getElementById('popup-verifier').textContent = levels[index].verifier;

  // Display the popup
  popup.classList.add('visible');
});

// Close the popup when the close button is clicked
document.getElementById('popup-close').addEventListener('click', function() {
  var popup = document.getElementById('popup');
  popup.classList.remove('visible');

  // Get the iframe element
  var iframe = document.getElementById('popup-video').querySelector('iframe');

  // Pause the video and reset the source
  iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  iframe.src = '';
});

  function extractVideoId(url) {
    var match = url.match(/(?:[?&]v=|\/embed\/|\/\d\/|\/vi\/|youtu\.be\/|\/embed\/|\/\d\/|\/vi\/)([^#&?/]+)/i);
    if (match && match[1]) {
      return match[1];
    } else {
      return '';
    }
  }
})});
