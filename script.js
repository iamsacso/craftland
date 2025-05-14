function copyCode(code) {
    navigator.clipboard.writeText(code)
      .then(() => alert("Copied: " + code));
  }

  function createMapPost({ 
    mapName, 
    date, 
    playerName, 
    description, 
    imageUrl, 
    youtubeLink, 
    mapCode1, 
    mapCode2, 
    profileImg, 
    profileLink 
}) {
    const container = document.getElementById("mapsContainer");

    const postHTML = `
    <div class="mapss">
         <div class="map-post">
            <div class="head">
               <div class="name">
                  <div class="mapname">
                     <a href="${profileLink}" target="_blank"><img src="${profileImg}" class="avatars" alt="profile"></a>
                     <div class="q">
                        <h4>${mapName}</h4>
                        <p>${date}</p>
                     </div>
                    </div>
                </div>
                     <div class="mapcode">
                        <button onclick="copyCode('${mapCode1}')" id="one">&#x1F1EE;&#x1F1F3;Code<img src="image/copy1.png" alt="" width="15px"></button>
                        <button onclick="copyCode('${mapCode2}')" id="two">Other<img src="image/copy1.png" alt="" width="15px"></button>
                     </div>
          </div>
                  
         <div class="body">
            <p class="playerName">by ${playerName}</p>
                     <p>${description}</p>
                     <img class="mapimage" src="${imageUrl}" alt="">
                     <div class="bottom">
                        <div class="bleft">
                           <a href="${youtubeLink}" target="_blank">Video</a>
                           <!-- <a href="#">Tutorial</a>
                           <a href="#">Map File</a>
                           <a href="#">Others</a> -->
                        </div>
                     </div>
                  </div>
     </div>
    `;

    container.innerHTML += postHTML;
}

createMapPost({
   mapName: "Teamwork Trial 2",
   date: "10 May 2025",
   playerName: "Ravi Editx",
   description: "Puzzle Game for 2 Players",
   imageUrl: "image/teamwork2.jpg",
   youtubeLink: "https://youtu.be/x2htqgeGA7g",
   mapCode1: "#FREEFIRE95A254E7A6F4AC807AF509D02708481C5979",
   mapCode2: "#FREEFIREDD8D8B7DB683E78798C4507376C122587938",
   profileImg: "image/ravieditx.png",
   profileLink: "https://www.youtube.com/@ravieditx"
 });

createMapPost({
  mapName: "Relax Quest",
  date: "3 May 2025",
  playerName: "Thunder Sharma",
  description: "2D map, hardest mode",
  imageUrl: "image/2dmap.webp",
  youtubeLink: "https://youtu.be/FmIA6sfprnU",
  mapCode1: "#FREEFIREFAB404CF91508EA15DD57FDF52C2DB278212",
  mapCode2: "#FREEFIREED8385671C9ABA5038DBDD483239CD314529",
  profileImg: "image/thundersharma.png",
  profileLink: "https://youtube.com/@thunder_sharma"
});

createMapPost({
  mapName: "All in One",
  date: "Oct 2024",
  playerName: "SacSo",
  description: "All outfit and many features",
  imageUrl: "image/allinone.webp",
  youtubeLink: "https://youtu.be/Sc2LCsblfgg",
  mapCode1: "#FREEFIREBC3C61F91526508CB1E9511197351A569672",
  mapCode2: "Not Available",
  profileImg: "image/SACSO.png",
  profileLink: "https://youtube.com/@iamsacso"
});