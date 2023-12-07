window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //THE LIST !
    
    //#1
    { name: '3Si is Dead', id: '95573883', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/xyI-hFyE47I', type: 'Challenge' },
    
    //#2
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'ache', videoUrl: 'https://youtu.be/T9U4BRE2QYM', type: 'Challenge' },
    
    //#3
    { name: 'MGSSMITMCHASTSEBBTGA', id: 'ask elijah loll', author: 'Elijaahhh', verifier: 'Elijaahhh', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', type: 'Challenge' },
    
    //#4
    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/2SJF8UDYw9M', type: 'Challenge' },
    
    //#5
    { name: 'ACHE', id: '92030106', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', type: 'Challenge' },
    
    //#6
    { name: 'SHAMELESS', id: '92635514', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#7
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#8
    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#9
    { name: 'PEEP', id: '92116696', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#10
    { name: '3 second roxor', id: '92433126', author: 'xFinleyGD', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#11
    { name: 'never take yourself', id: '92575160', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#12
    { name: '3 seconds icremrob', id: 'uh prob like 2 or smth', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#13
    { name: '1 seconds ache', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#14
    { name: 'misr beis burgr', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#15
    { name: 'forgotten', id: 'uh prob like 2 or smth', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#16
    { name: 'SPACK', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#17
    { name: 'Based Penguins', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#18
    { name: '4 seconds icremrob', id: 'uh prob like 2 or smth', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#19
    { name: 'nfzcls', id: 'uh prob like 2 or smth', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#20
    { name: 'airborne', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#21
    { name: '3 second jello', id: 'uh prob like 2 or smth', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#22
    { name: 'KILLER', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinelyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#23
    { name: '3 second finley', id: 'uh prob like 2 or smth', author: 'brock obamna', verifier: 'zoink i rhgink', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#24
    { name: 'im sorry', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#25
    { name: 'WOWee', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#26
    { name: 'owo', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#27
    { name: 'lgbt quiz', id: 'uh prob like 2 or smth', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#28
    { name: 'Under Heroine I', id: 'uh prob like 2 or smth', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#29
    { name: 'NOFUTURETERROR', id: 'uh prob like 2 or smth', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#30
    { name: '3 second hector', id: 'uh prob like 2 or smth', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#31
    { name: 'xobama', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#32
    { name: 'UTMANING', id: 'uh prob like 2 or smth', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#33
    { name: 'we can rest now', id: 'uh prob like 2 or smth', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#34
    { name: 'floater', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#35
    { name: '8  pm chsallenge', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#36
    { name: 'idk im bored', id: 'uh prob like 2 or smth', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#37
    { name: 'Wase MasE', id: 'uh prob like 2 or smth', author: 'Cubangaming1', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#38
    { name: 'Cobra', id: 'uh prob like 2 or smth', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#39
    { name: 'SNITCHes Get sTICHES', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#40
    { name: 'shipyp chamber', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#41
    { name: '7 CLICK BAERSTARD', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#42
    { name: 'and or is milk', id: 'uh prob like 2 or smth', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#43
    { name: 'Bla9y W GO7', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#44
    { name: 'maybe the hard', id: 'uh prob like 2 or smth', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#45
    { name: 'diego aint clearing', id: 'uh prob like 2 or smth', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#46
    { name: 'Get it Together', id: 'uh prob like 2 or smth', author: 'Shadowpan69420', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#47
    { name: 'actual', id: 'uh prob like 2 or smth', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#48
    { name: '5  am chsallenge', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#49
    { name: 'hello extended list', id: 'uh prob like 2 or smth', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' },
    
    //#50
    { name: 'finlerstackdurrrrrrr', id: 'uh prob like 2 or smth', author: 'Tortellini', verifier: 'Tortellini', videoUrl: 'https://youtu.be/9bZkp7q19f0', type: 'Challenge' }
    
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
