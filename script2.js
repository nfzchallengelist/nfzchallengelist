window.addEventListener('DOMContentLoaded', function() {
  var levels = [
    //THE LIST !
    
    { name: 'silly goober area', id: '101574741', author: 'lunatism & iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/OoO4I_R3F5k', type: 'Challenge' },
    

    { name: 'PINEAPPLEUPSIDEDOWN', id: '93081214', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/2SJF8UDYw9M', type: 'Challenge' },

    
    { name: 'MGSSMITMCHASTSEBBTGA', id: 'ask elijah loll', author: 'BekahFan82', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/Ih6UNtTfGT8', type: 'Challenge' },

    
    { name: '3Si is Dead', id: '95573883', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/xyI-hFyE47I', type: 'Challenge' },


    { name: 'Throwing Flashbang', id: '101576176', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=Alr4rs1Ug3g', type: 'Challenge' },

    
    { name: 'Q', id: '93045504', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/mq6NkJ49cso', type: 'Challenge' },


    { name: 'RASAtone', id: '10164821', author: 'Tortellini', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/vPIwIH-cJ1s', type: 'Challenge' },
    

    { name: 'CYBERGIRL', id: '101377264', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/7lCxgFR1HrY', type: 'Challenge' },
  
    
    { name: 'never take yourself', id: '92575160', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lKSkVU1WS2s', type: 'Challenge' },


    { name: 'Dollr 78', id: '102123679', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/U5Kc4gwLNxI', type: 'Challenge' },
    
    
    { name: 'Streamline', id: '95921211', author: 'HyetalL', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/iTzSRvHPsEo', type: 'Challenge' },

    
    { name: 'otakemo dansu', id: '92591135', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/dy5XfrS6ngw', type: 'Challenge' },


    { name: 'monter ONE HUNDRED', id: '98201570', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://www.youtube.com/watch?v=hhseQlpFHe4', type: 'Challenge' },


    { name: 'ROYGBIV', id: '102175129', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/IV-ujq9tRmc', type: 'Challenge' },


    { name: 'Pale Ball in the Sky', id: '93235300', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/WOqjU7jKghY', type: 'Challenge' },

    
    { name: '1 seconds ache', id: '93302141', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/vmCTbD8g5Hc', type: 'Challenge' },


    { name: 'mc Inaw RT quT22', id: '97388724', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/OKdBUATmHd8', type: 'Challenge' },


    { name: 'PEEP', id: '92116696', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/JfLPnRfMVRE', type: 'Challenge' },

    
    { name: 'misr beis burgr', id: '92545202', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ON8q6T2Qmmo', type: 'Challenge' },

    
    { name: 'ACHE', id: '92030106', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Pqk_4qR_5-M', type: 'Challenge' },

    
    { name: 'SHAMELESS', id: '92635514', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/PZ6IKjNG_ac', type: 'Challenge' },

    
    { name: 'Shinu', id: '94807515', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v-kjDdP-CKg', type: 'Challenge' },


    { name: 'SPACK', id: '92147966', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/0MmxMthPf04', type: 'Challenge' },


    { name: 'forgotten', id: '93240831', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://youtu.be/2ibS2zQLW98', type: 'Challenge' },


    { name: '3 second roxor', id: '92433126', author: 'iamfinleyy', verifier: 'Speedmanman', videoUrl: 'https://youtu.be/44PAFVgFRa8', type: 'Challenge' },

    
    { name: 'ON THE DANCE FLOOR', id: '97098955', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/26cLLP6iYaU?si=ukqYBCEC52dPYSqK', type: 'Challenge' },

   
    { name: 'WOWee', id: '92059623', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/lVBndG76UdY', type: 'Challenge' },

    
    { name: '4 seconds icremrob', id: '93302229', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/mXbGVM0FXrk', type: 'Challenge' },
    
    
    { name: 'Leaves', id: '97306244', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=PpOP9tZtmmY', type: 'Challenge' },

    
    { name: 'airborne', id: '92186881', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/8bqC1GO6BIs', type: 'Challenge' },


    { name: 'soarer', id: '97265119', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=Dpk1yA5o5ps', type: 'Challenge' },

    
    { name: 'dohiyoer is dead', id: '97448225', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/DvfybjTpRkI', type: 'Challenge' },

 
    { name: 'Based Penguins', id: '92024672', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://www.youtube.com/watch?v=xOTNT1yq4wI', type: 'Challenge' },

    
    { name: 'hello legacy list', id: '97793177', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/GHjVik7TLq0?si=lqixS0LFX36VYRq8', type: 'Challenge' },

    
    { name: '3 second jello', id: '93201795', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=oUG37s7jnBY', type: 'Challenge' },


    { name: 'meta fight back', id: '100786753', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/XyzzqLqijlI', type: 'Challenge' },

    
    { name: 'The Frozen Crypt', id: '95212065', author: 'Hectorien', verifier: 'HyetalL', videoUrl: 'https://youtu.be/0pSzZDgeaCM', type: 'Challenge' },


    { name: 'STARRY SUNSET', id: '101576722', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/atONAiI-KMg', type: 'Challenge' },


    { name: 'Acheloos', id: '93991257', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://www.youtube.com/watch?v=v38Lpv_8Hmk', type: 'Challenge' },

    
    { name: 'CGHALLENGE 4 FINLEY', id: '101697470', author: 'lunatism', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/7oj8zNUAo2Q', type: 'Challenge' },
    
    
    { name: 'owo', id: '92690170', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/vPvRNoYdU7I', type: 'Challenge' },

   
    { name: 'Under Heroine I', id: '92182309', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/4cK_ZNj7D7c', type: 'Challenge' },


    { name: 'UTMANING', id: '92265300', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/7wgGPKZvCyQ', type: 'Challenge' },

    
    { name: 'JeanPaulEtSesBonAmis', id: '92486595', author: 'BekahFan82', verifier: 'BekahFan82', videoUrl: 'https://youtu.be/LzN-D9z1BsM', type: 'Challenge' },

    
    { name: '3 seconds icremrob', id: '92107867', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/LVHez78-neE', type: 'Challenge' },
    
    
    { name: 'KILLER', id: '92146539', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/JLkMh7-xyMA', type: 'Challenge' },
  
    
    { name: 'NOFUTURETERROR', id: '92062723', author: 'bloxy', verifier: 'bloxy', videoUrl: 'https://youtu.be/dqM7Ll6FNKY', type: 'Challenge' },


    { name: 'Zpinhg', id: '102059403', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/DNdb79wDajc?si=iS47bjdjBG6cKhJrv', type: 'Challenge' },

    
    { name: 'walnut', id: '100748201', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/ET9dEbh6k70', type: 'Challenge' },

    
    { name: '3 second hector', id: '93411036', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/HUO1LtLDpIU', type: 'Challenge' },


    // EXTENDED LIST
    
    
    { name: 'Acheron Noclip 2', id: '98047767', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/JAyO3mzq7Yg', type: 'Challenge' },

    
    { name: 'MudPuddle', id: '101815269', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/HYdo1PPwISY', type: 'Challenge' },   

    
    { name: 'xobama', id: '92020976', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/Jovw88VaXuY', type: 'Challenge' },

    
    { name: 'we can rest now', id: '97129065', author: 'Icecreamrib', verifier: 'Icecreamrib', videoUrl: 'https://youtu.be/CvX5aM0B3yg', type: 'Challenge' },
    
    
    { name: 'lgbt quiz', id: '93168829', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=eWegyQUVyuI', type: 'Challenge' },

    
    { name: 'im sorry', id: '92267104', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/h5IFr2s3IyU', type: 'Challenge' },


    { name: 'summit 3', id: '101829250', author: 'Zkasper', verifier: 'Zkasper', videoUrl: 'https://www.youtube.com/watch?v=iKiZZNOkWSs', type: 'Challenge' },
    
    
    { name: 'floater', id: '92118988', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/QXjNe8sHeUk', type: 'Challenge' },

    
    { name: '8  pm chsallenge', id: '92748808', author: 'lunatism', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/rOpTlFJZM8o', type: 'Challenge' },


    { name: 'nfzcls', id: '92036087', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/ScPaEm-5HME', type: 'Challenge' },

    
    { name: 'idk im bored', id: '96256691', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=xChN8VjJA7A', type: 'Challenge' },


    { name: 'bday challenge', id: '95310118', author: 'Hectorien', verifier: 'Hectorien', videoUrl: 'https://youtu.be/Hgge5EZPT-s?si=I3CGB_ajVy4krWqN', type: 'Challenge' },

    
    { name: 'Devilish Alcoholic', id: '101383870', author: 'HyetalL', verifier: 'HyetalL', videoUrl: 'https://youtu.be/MeLtGa4o7Dc?si=IMbpEBYpT9VR37GA', type: 'Challenge' },

    
    { name: 'Miss Tick', id: '97238047', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/RyvLx7MLB8k', type: 'Challenge' },


    { name: 'WeetabiX', id: '101917735', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/p5Xt2inViRQ?si=7KlyFLkudnfAwIBu', type: 'Challenge' },
    
    
    { name: '24hr iamfinley chalk', id: '100976162', author: 'DrigeOrDraig', verifier: 'DrigeOrDraig', videoUrl: 'https://youtu.be/xke2YYdLQJU', type: 'Challenge' },
    
    
    { name: 'Wase MasE', id: '92126003', author: 'Cubangaming1', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/gJfQNreLhBU', type: 'Challenge' },


    { name: 'DeMode Wave', id: '101660635', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ua9EQCpjjak', type: 'Challenge' },


    { name: 'surrender the throne', id: '101558967', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/wVJEa1P3lU0', type: 'Challenge' },

    
    { name: 'TURBO', id: '101446495', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://www.youtube.com/watch?v=A9Jl_S37GlM', type: 'Challenge' },
    
    
    { name: 'Cobra', id: '92521006', author: 'Cubangaming1', verifier: 'Cubangaming1', videoUrl: 'https://youtu.be/njChUxU7418', type: 'Challenge' },


    { name: 'a m level', id: '92521006', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/ZPOzJATQO2k', type: 'Challenge' },
    
    
    { name: 'SNITCHes Get sTICHES', id: '93145754', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/9EFxqiC0v3g', type: 'Challenge' },


    { name: 'yea same bro', id: '101888877', author: 'lunatism', verifier: 'lunatism', videoUrl: 'https://youtu.be/1Wl_d4GNnVM', type: 'Challenge' },
    
  
    { name: '7 CLICK BAERSTARD', id: '92021716', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/ZVQzNANy_Ik', type: 'Challenge' },
    

    { name: 'and or is milk', id: '93085309', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=cI5Ux3MQcwc', type: 'Challenge' },
    
   
    { name: 'Bla9y W GO7', id: '93212972', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/NHoW-xtndmY', type: 'Challenge' },
    

    { name: 'maybe the hard', id: '92003489', author: 'iamfinleyy', verifier: 'iamfinleyy', videoUrl: 'https://youtu.be/SZw5maq_6ZA', type: 'Challenge' },


    { name: 'Doggie Challenge 22', id: '97567598', author: 'Mariner', verifier: 'Mariner', videoUrl: 'https://youtu.be/zjlZNVIXZN8', type: 'Challenge' },


    { name: 'Himalayan SeaSalt', id: '101968419', author: 'Zkasper', verifier: 'Zkasper', videoUrl: 'https://www.youtube.com/watch?v=kD4soqQfU2k', type: 'Challenge' },
    
    
    { name: 'super fartbreaker 49', id: '100788855', author: 'Shadowpan69420', verifier: 'Shadowpan69420', videoUrl: 'https://youtu.be/-VuPf2fsv0E', type: 'Challenge' },
    
 
    { name: 'diego aint clearing', id: '92059623', author: 'Martijn07', verifier: 'Martijn07', videoUrl: 'https://youtu.be/K_c02JMp48g', type: 'Challenge' },

    
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

    
    { name: 'switchy twitchy', id: '95259509', author: 'rinjello', verifier: 'rinjello', videoUrl: 'https://www.youtube.com/watch?v=uWxLqb5CNVI', type: 'Challenge' }
  
    
    //don't put a comma at the end of the last level... or you will Die !!!!
    
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
