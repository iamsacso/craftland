function copyCode(code) {
    navigator.clipboard.writeText(code)
      .then(() => alert("Copied: " + code));
  }

  function createAssetPost({ 
    assetName, 
    date, 
    playerName, 
    description, 
    imageUrl,  
    assetCode, 
    mapCode2, 
    profileImg, 
    profileLink 
}) {
    const container = document.getElementById("assetCodeContainer");

    const postHTML = `
    <div class="mapss">
         <div class="map-post">
            <div class="head">
               <div class="name">
                  <div class="mapname">
                     <a href="${profileLink}" target="_blank"><img src="${profileImg}" class="avatars" alt="profile"></a>
                     <div class="q">
                        <h4>${assetName}</h4>
                        <p>${date}</p>
                     </div>
                    </div>
                </div>
                     <div class="mapcode">
                        <button onclick="copyCode('${assetCode}')" id="one">Asset Code<img src="image/copy1.png" alt="" width="15px"></button>
                        <button onclick="copyCode('${mapCode2}')" id="two">Other<img src="image/copy1.png" alt="" width="15px"></button>
                     </div>
          </div>
                  
         <div class="body">
            <p class="playerName">by ${playerName}</p>
                     <p>${description}</p>
                     <img class="mapimage" src="${imageUrl}" alt="">
                  </div>
     </div>
    `;

    container.innerHTML += postHTML;
}




 function filterAsset() {
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

 createAssetPost({
   assetName: "House 1",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "2 Floor house",
   imageUrl: "image/house1.jpg",
   assetCode: "#ASSETFA6D77C0647A4580857A9448B3BC3D529672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "House 2",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "3 Floor house",
   imageUrl: "image/house2.jpg",
   assetCode: "#ASSET9B663F19757C49AF801D4BAD0D7D93449672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Coin",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Clamable Coin",
   imageUrl: "image/coin.jpg",
   assetCode: "#ASSET23B87B1D78534782BF20DC08B7991BD19672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Speaker",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "DJ Speaker",
   imageUrl: "image/speaker.jpg",
   assetCode: "#ASSETA7F03B5205024DC19779429F54D53B4B9672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Tub",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Water tub",
   imageUrl: "image/tub.jpg",
   assetCode: "#ASSET6E04F32B941C4F2798D55092493448069672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

createAssetPost({
   assetName: "Light",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Street light",
   imageUrl: "image/light.jpg",
   assetCode: "#ASSETB14C90696E4240D0BDB16E59ACB5BD5B9672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Slide",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Squid game stair Slide",
   imageUrl: "image/stair.jpg",
   assetCode: "#ASSET51797EBEE32A406F9B4DBF032FC6CC4E9672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Castle",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Water kingdom big House",
   imageUrl: "image/castle.jpg",
   assetCode: "#ASSET3C9EA0FB587E45F283E8AE5F5E7B15AE9672",
   mapCode2: "available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Helicopter",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Small Helicopter",
   imageUrl: "image/helicopter.jpg",
   assetCode: "#ASSET450B0201714745B19D83637730FB4F219672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });

 createAssetPost({
   assetName: "Pound",
   date: "21 May 2025",
   playerName: "SacSo",
   description: "Natural water pound",
   imageUrl: "image/pound.jpg",
   assetCode: "#ASSET591656DACA7E48069CA45618FFDF1D739672",
   mapCode2: "Not available",
   profileImg: "image/SACSO.png",
   profileLink: "https://youtube.com/@iamsacso"
 });