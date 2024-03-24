window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //top row is #101 on the list
    
    { name: 'Get it Together', id: '92035976', author: 'Shadowpan69420', verifier: 'iamfinleyy', videoUrl: 'videourl', type: 'Challenge' },  
    
    { name: 'actual', id: '92054335', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/xDwMBFhVIk0', type: 'Challenge' },
    
    { name: 'Dohiyoer', id: '97334410', author: 'OWOSHA', verifier: 'OWOSHA', videoUrl: 'videourl', type: 'Challenge' },
   
    { name: 'check general', id: '97683510', author: 'EllieFan28', verifier: 'EllieFan28', videoUrl: 'https://youtu.be/UldAfQ9zsiw', type: 'Challenge' },
  
    { name: 'fauxureta', id: '92003404', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
 
    { name: 'the Thingimajig', id: '101440099', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/sSCXBO-7470', type: 'Challenge' },
    
    { name: 'grandma parkinson', id: '101391857', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/C6dyWA2V-sI', type: 'Challenge' },
    
    { name: 'mobiel chalng', id: '102070782', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/mBfSBJ7XhPY', type: 'Challenge' },
    
    { name: 'WTFdohiyoWTF', id: '97375482', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/iXu3G6CAMX0', type: 'Challenge' },
    
    { name: 'finlerstackdurrrrrrr', id: '92064848', author: 'Tortellini', verifier: 'Tortellini', videoUrl: 'videourl', type: 'Challenge' }, 
    
    { name: '5  am chsallenge', id: '92610835', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/J2tZdz6rQHk', type: 'Challenge' },
    
    { name: 'up and down mode', id: '97415982', author: 'lunatism', verifier: 'lunatism', videoUrl: 'videourl', type: 'Challenge' },
    
    { name: 'OHHidoyhoyo', id: '101832346', author: 'iamfinleyy', verifier: 'KiaraDoggie', videoUrl: 'https://www.youtube.com/watch?v=3r1o01zROB4', type: 'Challenge' },
    
    { name: 'they call me messer', id: '97716826', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/rD3Mo59_XTw', type: 'Challenge' },
    
    { name: 'hello extended list', id: '93122627', author: 'lunatism', verifier: 'lunatism', videoUrl: 'videourl', type: 'Challenge' },
  
    { name: 'core bore glore', id: '92126842', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'shipyp chamber', id: '96919048', author: 'iamfinleyy', verifier: 'lunatism', videoUrl: 'videourl', type: 'Challenge' },
    
    { name: 'switchy twitchy', id: '95259509', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=uWxLqb5CNVI', type: 'Challenge' },
    
    { name: '3  am chsallenge', id: '102030953', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/IxgS7spcqpM', type: 'Challenge' },
    
    { name: 'Sonic Wave Infinity', id: '97128437', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/Zv-vzQP4JRo', type: 'Challenge' },
    
    { name: 'if i were a rock', id: '101571607', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/W2tEmwDKX2I', type: 'Challenge' },

    { name: '3 second REAL', id: '97128437', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/plNiGf-Bnl8', type: 'Challenge' },

    { name: 'finley ohio trip', id: '92202872', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
  
    { name: 'jundice 2', id: '95815064', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'microclick hell', id: '92127106', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    {name: 'spider but not', id: '98051806', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JR9r4RX6o6E', type: 'Challenge' },
    
    { name: 'los demonicos extrem', id: '97595421', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/qJ1P6tv0YbI', type: 'Challenge' },
    
    { name: 'gurkin', id: '95873564', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'brosinf', id: '94206441', author: 'jaundiceplier', verifier: 'iamfinleyy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: '3 click hector', id: '95956602', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/4I0kL7_x7aQ', type: 'Challenge' },

    { name: 'Greg', id: '95244928', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TYGCov-nurY', type: 'Challenge' },
    
    { name: '4  am chsallenge', id: '92668659', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'hi but not hi by krm', id: '93350188', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/EgUD8EYINrI', type: 'Challenge' },
    
    { name: 'if i were a fish', id: '93197387', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/270zfAHp_Vg', type: 'Challenge' },
    
    { name: '2  am chsallenge', id: '92491018', author: 'lunatism', verifier: 'lunatism', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'TheWholeWorldAndYou', id: '92081453', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: '2 POINT 2 IS OUT', id: '97457554', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'EXTREEME DEMON', id: '97522511', author: 'idkache', verifier: 'idkache', videoUrl: 'videourl', type: 'Challenge' },
    
    { name: 'dohiyo is dead', id: '92096970', author: 'Shadowpan69420 & iamfinleyy', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'the first ever', id: '92002834', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'jundice 1', id: '93447664', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'grim cut the ace', id: '92002827', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'Dohiyosmell', id: '92066186', author: 'xFinleyGD & ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'ian747563', id: '92066186', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'Dohiyo', id: '92026674', author: 'xFinleyGD', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'Amazingchallenge1', id: '92035699', author: 'Donkey', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'finley go usacolon 3', id: '92003494', author: 'KiaraDoggie', verifier: 'KiaraDoggie', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    { name: 'NoFinleyZone Challen', id: '92026897', author: 'Greysonn', verifier: 'Greysonn', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'top 1 easy', id: '92591808', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'hardest challenbge', id: '92593859', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    { name: 'fcuk you ben', id: '97155742', author: 'idkache', verifier: 'idkache', videoUrl: 'https://youtu.be/t_WmytBqquM', type: 'Challenge' },

    { name: '❌ Dantes Inferno ❌', id: 'N/A', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/eq6PGWcyUSg', type: 'Challenge' },

    { name: '❌ 3 second finley ❌', id: 'N/A', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/g_8hIDEL4rY', type: 'Challenge' }
   
    
     //don't put a comma at the end of the last level..
  ];


  var legacyList = document.getElementById('legacyList');

  levels.forEach(function(level, index) {
    var listItem = document.createElement('div');
    listItem.classList.add('list-item');
    var listNumber = document.createElement('div');
    listNumber.classList.add('list-number');
    listNumber.textContent = '#' + (index + 101);
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
    legacyList.appendChild(listItem);

  
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
