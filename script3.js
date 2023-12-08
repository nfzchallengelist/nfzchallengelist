window.addEventListener('DOMContentLoaded', function() {
  var levels = [

    
    { name: 'hello extended list', id: '93122627', author: 'ache', verifier: 'ache', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'finlerstackdurrrrrrr', id: '92064848', author: 'Tortellini', verifier: 'Tortellini', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'core bore glore', id: '92126842', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'fauxureta', id: '92003404', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'switchy twitchy', id: '95259509', author: 'rinjello', verifier: 'rinjello', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Sonic Wave Infinity', id: '97128437', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/Zv-vzQP4JRo', type: 'Challenge' },

    
    { name: 'finley ohio trip', id: '92202872', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'microclick hell', id: '92127106', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'if i were a fish', id: '93197387', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/270zfAHp_Vg', type: 'Challenge' },

    
    { name: 'TheWholeWorldAndYou', id: '92081453', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Greg', id: '95244928', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TYGCov-nurY', type: 'Challenge' },

    
    { name: '4  am chsallenge', id: '92668659', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'hi but not hi by krm', id: '93350188', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/EgUD8EYINrI', type: 'Challenge' },

    
    { name: '2  am chsallenge', id: '92491018', author: 'ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'dohiyo is dead', id: '92096970', author: 'Shadowpan69420 & xFinleyGD', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'the first ever', id: '92002834', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'grim cut the ace', id: '92002827', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: '3 click hector', id: '95956602', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'ian747563', id: '92066186', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Dohiyo', id: '92026674', author: 'xFinleyGD', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Amazingchallenge1', id: '92035699', author: 'Donkey', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'finley go usacolon 3', id: '92003494', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'NoFinleyZone Challen', id: '92026897', author: 'Greysonn', verifier: 'Greysonn', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'top 1 easy', id: '92591808', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'hardest challenbge', id: '92593859', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'fcuk you ben', id: '97155742', author: 'idkache', verifier: 'idkache', videoUrl: 'https://youtu.be/t_WmytBqquM', type: 'Challenge' }
    
    //don't put a comma at the end of the last level..
  ];


  var extendedList = document.getElementById('extendedList');

  levels.forEach(function(level, index) {
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 51);
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
    extendedList.appendChild(listItem);

  
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
