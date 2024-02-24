window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //THE LIST !
    
    { name: 'MGSSMITMCHASTSEBBTGA', id: 'ask elijah loll', author: 'Elijaahhh', verifier: 'Elijaahhh', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', type: 'Challenge' },

    
    { name: '3Si is Dead', id: '95573883', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/xyI-hFyE47I', type: 'Challenge' },

    
    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/2SJF8UDYw9M', type: 'Challenge' },

    
    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/mq6NkJ49cso', type: 'Challenge' },


    { name: 'CYBERGIRL', id: '101377264', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/7lCxgFR1HrY', type: 'Challenge' },
  
    
    { name: 'never take yourself', id: '92575160', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/lKSkVU1WS2s', type: 'Challenge' },

    
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/iTzSRvHPsEo', type: 'Challenge' },

    
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/dy5XfrS6ngw', type: 'Challenge' },

    
    { name: 'PEEP', id: '92116696', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'Pale Ball in the Sky', id: '93235300', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/WOqjU7jKghY', type: 'Challenge' },

    
    { name: '1 seconds ache', id: '93302141', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/vmCTbD8g5Hc', type: 'Challenge' },


    { name: 'mc Inaw RT quT22', id: '97388724', author: 'idkache', verifier: 'idkache', videoUrl: 'https://youtu.be/OKdBUATmHd8', type: 'Challenge' },
    

    { name: 'Dantes Inferno', id: '99683393', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/eq6PGWcyUSg', type: 'Challenge' },
    
    
    { name: 'misr beis burgr', id: '92545202', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/ON8q6T2Qmmo', type: 'Challenge' },

    
    { name: '3 second roxor', id: '92433126', author: 'iamfinleyy', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/44PAFVgFRa8', type: 'Challenge' },

    
    { name: 'ACHE', id: '92030106', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', type: 'Challenge' },

    
    { name: 'SHAMELESS', id: '92635514', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/x9zmePZHD9s', type: 'Challenge' },

    
    { name: 'Shinu', id: '94807515', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v-kjDdP-CKg', type: 'Challenge' },

    
    { name: 'soarer', id: '97265119', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'forgotten', id: '93240831', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/2ibS2zQLW98', type: 'Challenge' },

    
    { name: 'SPACK', id: '92147966', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/0MmxMthPf04', type: 'Challenge' },

    
    { name: 'ON THE DANCE FLOOR', id: '97098955', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/26cLLP6iYaU?si=ukqYBCEC52dPYSqK', type: 'Challenge' },

    
    { name: '3 seconds icremrob', id: '92107867', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/LVHez78-neE', type: 'Challenge' },

    
    { name: 'Based Penguins', id: '92024672', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },
    
    
    { name: 'WOWee', id: '92059623', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/lVBndG76UdY', type: 'Challenge' },

    
    { name: '4 seconds icremrob', id: '93302229', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/mXbGVM0FXrk', type: 'Challenge' },
    
    
    { name: 'Leaves', id: '97306244', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'airborne', id: '92186881', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/8bqC1GO6BIs', type: 'Challenge' },

   
    { name: 'dohiyoer is dead', id: '97448225', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: '3 second jello', id: '93201795', author: 'rinjello', verifier: 'rinjello', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'The Frozen Crypt', id: '95212065', author: 'Hectorien', verifier: 'HyetalL', videoUrl: 'https://youtu.be/0pSzZDgeaCM', type: 'Challenge' },

    
    { name: 'KILLER', id: '92146539', author: 'xFinleyGD', verifier: 'xFinelyGD', videoUrl: 'https://youtu.be/JLkMh7-xyMA', type: 'Challenge' },

    
    { name: 'nfzcls', id: '92036087', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/ScPaEm-5HME', type: 'Challenge' },

    
    { name: '3 second finley', id: '92021708', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/g_8hIDEL4rY', type: 'Challenge' },
    
    
    { name: 'owo', id: '92690170', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'Acheloos', id: '93991257', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v38Lpv_8Hmk', type: 'Challenge' },

    
    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/4cK_ZNj7D7c', type: 'Challenge' },


    { name: 'Miss Tick', id: '97238047', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'NOFUTURETERROR', id: '92062723', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/dqM7Ll6FNKY', type: 'Challenge' },

    
    { name: '3 second hector', id: '93411036', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/HUO1LtLDpIU', type: 'Challenge' },


    { name: 'Acheron Noclip 2', id: '98047767', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/JAyO3mzq7Yg', type: 'Challenge' },
    
    
    { name: 'xobama', id: '92020976', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/Jovw88VaXuY', type: 'Challenge' },

    
    { name: 'UTMANING', id: '92265300', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'we can rest now', id: '97129065', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/CvX5aM0B3yg', type: 'Challenge' },

    
    { name: 'hello legacy list', id: '97793177', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/GHjVik7TLq0', type: 'Challenge' },

    
    { name: 'im sorry', id: '92267104', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/h5IFr2s3IyU', type: 'Challenge' },
    
    
    { name: 'floater', id: '92118988', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: '8  pm chsallenge', id: '92748808', author: 'ache', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/rOpTlFJZM8o', type: 'Challenge' },

    
    { name: 'JeanPaulEtSesBonAmis', id: '92486595', author: 'Elijaahhh', verifier: 'Elijaahhh', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'idk im bored', id: '96256691', author: 'rinjello', verifier: 'rinjello', videoUrl: 'videourl', type: 'Challenge' },


    { name: 'Devilish Alcoholic', id: '101383870', author: 'HyetalL', verifier: 'HyetalL', videoUrl: 'https://youtu.be/hhseQlpFHe4', type: 'Challenge' },
    
    
    { name: 'lgbt quiz', id: '93168829', author: 'rinjello', verifier: 'rinjello', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'Wase MasE', id: '92126003', author: 'Cubangaming1', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'bday challenge', id: '95310118', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/Hgge5EZPT-s?si=I3CGB_ajVy4krWqN', type: 'Challenge' },

    
    { name: 'Cobra', id: '92521006', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'SNITCHes Get sTICHES', id: '93145754', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/9EFxqiC0v3g', type: 'Challenge' },
    
  
    { name: '7 CLICK BAERSTARD', id: '92021716', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },
    

    { name: 'and or is milk', id: '93085309', author: 'rinjello', verifier: 'rinjello', videoUrl: 'videourl', type: 'Challenge' },
    
   
    { name: 'Bla9y W GO7', id: '93212972', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/NHoW-xtndmY', type: 'Challenge' },
    

    { name: 'maybe the hard', id: '92003489', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },


    { name: 'Super fartbreaker 49', id: '100788855', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'https://youtu.be/-VuPf2fsv0E', type: 'Challenge' },
    
 
    { name: 'diego aint clearing', id: '92059623', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/K_c02JMp48g', type: 'Challenge' },

    
    { name: 'Get it Together', id: '92035976', author: 'Shadowpan69420', verifier: 'xFinleyGD', videoUrl: 'videourl', type: 'Challenge' },
    
  
    { name: 'actual', id: '92054335', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/xDwMBFhVIk0', type: 'Challenge' },
    

    { name: 'Dohiyoer', id: '97334410', author: 'OWOSHA', verifier: 'OWOSHA', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'Doggie Challenge 22', id: '97567598', author: 'Mariner', verifier: 'Mariner', videoUrl: 'videourl', type: 'Challenge' },
    
   
    { name: 'fauxureta', id: '92003404', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
   
    
    { name: 'the Thingimajig', id: '101440099', author: 'idkache', verifier: 'idkache', videoUrl: 'https://youtu.be/sSCXBO-7470', type: 'Challenge' },
    
       
    { name: 'grandma parkinson', id: '101391857', author: 'ache', verifier: 'ache', videoUrl: 'https://youtu.be/C6dyWA2V-sI', type: 'Challenge' },

    
    { name: 'finlerstackdurrrrrrr', id: '92064848', author: 'Tortellini', verifier: 'Tortellini', videoUrl: 'videourl', type: 'Challenge' },
    
    
    { name: '5  am chsallenge', id: '92610835', author: 'ache', verifier: 'ache', videoUrl: 'videourl', type: 'Challenge' },


    { name: 'up and down mode', id: '97415982', author: 'ache', verifier: 'ache', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'they call me messer', id: '97716826', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/rD3Mo59_XTw', type: 'Challenge' },

    
    { name: 'hello extended list', id: '93122627', author: 'ache', verifier: 'ache', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'core bore glore', id: '92126842', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },
    
    
    { name: 'shipyp chamber', id: '96919048', author: 'xFinleyGD', verifier: 'ache', videoUrl: 'videourl', type: 'Challenge' },

    
    { name: 'switchy twitchy', id: '95259509', author: 'rinjello', verifier: 'rinjello', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Sonic Wave Infinity', id: '97128437', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/Zv-vzQP4JRo', type: 'Challenge' },

    
    { name: 'finley ohio trip', id: '92202872', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },


    { name: 'jundice 2', id: '95815064', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'microclick hell', id: '92127106', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'spider but not', id: '98051806', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/JR9r4RX6o6E', type: 'Challenge' },


    { name: 'los demonicos extrem', id: '97595421', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/qJ1P6tv0YbI', type: 'Challenge' },


    { name: 'gurkin', id: '95873564', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'brosinf', id: '94206441', author: 'jaundiceplier', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'if i were a fish', id: '93197387', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/270zfAHp_Vg', type: 'Challenge' },


    { name: '3 click hector', id: '95956602', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/4I0kL7_x7aQ', type: 'Challenge' },
    
    
    { name: 'Greg', id: '95244928', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/TYGCov-nurY', type: 'Challenge' },

    
    { name: '4  am chsallenge', id: '92668659', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'hi but not hi by krm', id: '93350188', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'https://youtu.be/EgUD8EYINrI', type: 'Challenge' },

    
    { name: '2  am chsallenge', id: '92491018', author: 'ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'TheWholeWorldAndYou', id: '92081453', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },


    { name: '2 POINT 2 IS OUT', id: '97457554', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },


    { name: 'EXTREEME DEMON', id: '97522511', author: 'idkache', verifier: 'idkache', videoUrl: 'https://cdn.discordapp.com/attachments/1124098723950104697/1187139784427196568/EXTREEME_DEMON.mp4?ex=659f0794&is=658c9294&hm=1a8f017bcc97280a767130b933416b17300301e4efa81ee20c8d60ed929d9b44&', type: 'Challenge' },

    
    { name: 'dohiyo is dead', id: '92096970', author: 'Shadowpan69420 & xFinleyGD', verifier: 'Shadowpan69420', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'the first ever', id: '92002834', author: 'xFinleyGD', verifier: 'xFinleyGD', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },


    { name: 'jundice 1', id: '93447664', author: 'jaundiceplier', verifier: 'bloxy', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'The Finley', id: '92550525', author: 'idkache', verifier: 'idkache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'grim cut the ace', id: '92002827', author: 'TortellinniT', verifier: 'TortellinniT', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' },

    
    { name: 'Dohiyosmell', id: '92066186', author: 'xFinleyGD & ache', verifier: 'ache', videoUrl: 'YOUTUBEURLRIGHTHERE', type: 'Challenge' }
    
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
