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
                        <button onclick="copyCode('${mapCode1}')" id="one">🇮🇳 Code<img src="image/copy1.png" alt="" width="15px"></button>
                        <button onclick="copyCode('${mapCode2}')" id="two">Other Code<img src="image/copy1.png" alt="" width="15px"></button>
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
   mapName: "Water Party",
   date: "28 May 2025",
   playerName: "Giant Gamer(Nobita)",
   description: "2 Player, Water Kingdom winners map.",
   imageUrl: "image/waterparty.jpg",
   youtubeLink: "https://youtu.be/LxOUGm7vn-A",
   mapCode1: "#FREEFIRE20B63707BA10E821FA1B975717132C604863",
   mapCode2: "Not available",
   profileImg: "image/giantgamer123.png",
   profileLink: "https://youtube.com/@giantgamer123"
 });


createMapPost({
   mapName: "Bike Race 2D",
   date: "22 May 2025",
   playerName: "SacSo",
   description: "2 Player 2000m bike race.",
   imageUrl: "image/bikerace2d.jpg",
   youtubeLink: "https://youtu.be/RnSdAvSefyk",
   mapCode1: "#FREEFIREA87AD61A5E8FE9E5327C4F360AB540239672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

createMapPost({
   mapName: "Water Party 2D",
   date: "22 May 2025",
   playerName: "SacSo",
   description: "2 Player, Water Kingdom winners map",
   imageUrl: "image/water2d.jpg",
   youtubeLink: "https://youtu.be/RnSdAvSefyk",
   mapCode1: "#FREEFIRE5CED8E1FFA2BDD2AFA5E5BF1C164AEC69672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

createMapPost({
   mapName: "Beastmode Bermuda",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map singal 1 player Bermuda map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bb1.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIRE2B0AB26301D114904489B3ADE33A4BEC1028",
   mapCode2: "#FREEFIRE626CA7F5425ED335266595C1F22885446248",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Beastmode Bermuda",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 2 player Bermuda map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bb2.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIREEEE65B538370661C724771B5EA8E3CCE1028",
   mapCode2: "#FREEFIRE8527E22B990AB8C80859F16331B4F76E6248",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Beastmode Bermuda",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 4 player Bermuda map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bb4.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIRE35B2644BCC485CC685F41304C2E980F21028",
   mapCode2: "#FREEFIRED4C0D3ED65E6B5E9D476DBABFC2B78936248",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Beastmode Bermuda",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 8 player Bermuda map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bb8.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIREFF8765C68BB5E9181574043A7B58BEC91028",
   mapCode2: "not avaliable",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Solara",
   date: "24 May 2025",
   playerName: "SacSo",
   description: "4 Player Solara, creator mode for solara",
   imageUrl: "image/sc4.jpg",
   youtubeLink: "not available",
   mapCode1: "#FREEFIRE893ECB3EE98F4E35E9FBA5C0809E46BD9672",
   mapCode2: "#FREEFIRE04069CABEBD610AB6ABEB04D64948A076574",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createMapPost({
   mapName: "Beastmode Nexterra",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 2 player Nexterra map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/nb2.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIREDED528052C6F0098DD421F039E680F3E5293",
   mapCode2: "#FREEFIREE77D52A20E8C47B0C3E758CAC22CE8371956",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Beastmode Nexterra",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 4 player nexterra map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/nb4.jpg",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIRE4FB98548E27F99857A197F82DFE5D5D15293",
   mapCode2: "#FREEFIRE281766F6302BFB71E6E01590CC7567AB1956",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

 createMapPost({
   mapName: "Beastmode Kalahari",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 2 player kalahari map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bkalahari2.png",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIRE2182723F7ACD0F452B0923DAADA431BD5293",
   mapCode2: "#FREEFIRECE8FB9DA86000F6FF76296206BA14F4C1956",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

createMapPost({
   mapName: "Beastmode Kalahari",
   date: "24 May 2025",
   playerName: "Guide Gamer",
   description: "All in one map 4 player Kalahari map, write code, gunskin, outfit bundle, emote, creator mode",
   imageUrl: "image/bkalahari4.png",
   youtubeLink: "https://youtu.be/Mm00W4c12_E",
   mapCode1: "#FREEFIRE8B075000C1FBF186EDC8EC3B5A00BF485293",
   mapCode2: "#FREEFIREF3B0C555D621B909F030D4FD26D849551956",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

createMapPost({
   mapName: "Craft-X Park Duo",
   date: "22 May 2025",
   playerName: "cyber_pritam",
   description: "2 Player, Water Kingdom winners map",
   imageUrl: "image/craftxpark.jpg",
   youtubeLink: "https://youtu.be/RnSdAvSefyk",
   mapCode1: "#FREEFIRE239990747614A05912A96BA2274B00FE2959",
   mapCode2: "Not available",
   profileImg: "image/cyberpritam.png",
   profileLink: "https://youtube.com/@cyber_pritam"
 });

 createMapPost({
   mapName: "Water Kingdom",
   date: "22 May 2025",
   playerName: "SacSo",
   description: "2 Player, Water Kingdom winners map",
   imageUrl: "image/sacsowaterpark.jpg",
   youtubeLink: "https://youtu.be/RnSdAvSefyk",
   mapCode1: "#FREEFIRE12897774E703B9685D9ECE900F15B1759672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

createMapPost({
   mapName: "Pirates Island",
   date: "22 May 2025",
   playerName: "VIP Gamer",
   description: "2 Player, Water Kingdom winners map",
   imageUrl: "image/pirateisland.jpg",
   youtubeLink: "https://youtu.be/RnSdAvSefyk",
   mapCode1: "#FREEFIRE24C7C79D849F74F111E6B0901455E9025262",
   mapCode2: "Not available",
   profileImg: "image/vipgamer.png",
   profileLink: "https://youtube.com/@SHARMAGAMING29"
 });

 createMapPost({
   mapName: "Ultimate Water Island",
   date: "22 May 2025",
   playerName: "Guide Gamer",
   description: "2 Player, Boat race, block jump and melee weapon fight",
   imageUrl: "image/waterguide.jpg",
   youtubeLink: "https://youtu.be/cCnnQUMIsco",
   mapCode1: "#FREEFIRE9BB5ABACE868981999719350FF283B383512",
   mapCode2: "Not available",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

createMapPost({
   mapName: "Ultimate Water Island",
   date: "22 May 2025",
   playerName: "Guide Gamer",
   description: "4 Player, Boat race, block jump and melee weapon fight",
   imageUrl: "image/waterguide.jpg",
   youtubeLink: "https://youtu.be/cCnnQUMIsco",
   mapCode1: "#FREEFIRE448678A2A0C4BCF4F98F436F8C3722A23512",
   mapCode2: "Not available",
   profileImg: "image/guidegamer.png",
   profileLink: "https://youtube.com/@Guidegamer016"
 });

createMapPost({
   mapName: "2v2 SACSO",
   date: "16 May 2025",
   playerName: "SacSo",
   description: "2v2 fair gameplay, all rare outfit, gun skin, emote & more",
   imageUrl: "image/2v2sacso.jpg",
   youtubeLink: "https://youtu.be/B9o5Qq9QnnI",
   mapCode1: "#FREEFIREF4DDC456AEFBB9E06C5075491B5369FE9672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

createMapPost({
   mapName: "1v1 PRINCE",
   date: "16 May 2025",
   playerName: "The Prince Gamer",
   description: "1v1 fair gameplay, all rare outfit, gun skin, emote & more",
   imageUrl: "image/1v12v2.jpg",
   youtubeLink: "https://youtu.be/lFmlxv7sZjU",
   mapCode1: "#FREEFIRE91A83E318545DFF29DA6436DBD7F11DA2474",
   mapCode2: "Not available",
   profileImg: "image/prince.png",
   profileLink: "https://youtube.com/@ThePrinceGamer"
 });

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
  imageUrl: "image/relexquest.jpg",
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

function filterMaps() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const posts = document.querySelectorAll(".map-post");

  posts.forEach(post => {
    const mapName = post.querySelector("h4").textContent.toLowerCase();
    const description = post.querySelector(".body p:nth-of-type(2)").textContent.toLowerCase(); // description
    const playerName = post.querySelector(".playerName").textContent.toLowerCase(); // player name

    if (mapName.includes(input) || description.includes(input) || playerName.includes(input)) {
      post.parentElement.style.display = "block";
    } else {
      post.parentElement.style.display = "none";
    }
  });
}
