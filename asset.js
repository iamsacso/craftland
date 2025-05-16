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
