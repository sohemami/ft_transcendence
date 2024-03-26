// Profilfriend.js
function profilfriendContent() {
    return `
    <link rel="stylesheet" type="text/css" href="src/profilfriend.css">
    <div  id="Profil">
      <div class="d-flex align-items-center justify-content-center mb-2">
        <div id="imgProfil" class="linear-gradient d-flex align-items-center justify-content-center rounded-circle" style="width: 110px; height: 110px;" ;="">
          <div class=" d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style="width: 100px; height: 100px;" ;="">
            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="w-100 h-100">
          </div>
        </div>
      </div>
      <div class="text-center" id="Prenom">
        <h5 class="fs-5 mb-0 fw-semibold">Mathew Anderson</h5>
        <p class="mb-0 fs-4">Designer</p>
      </div>
      <div class="container">
        <div id="Victory" class="text-center">
          <i class="fa fa-file fs-6 d-block"></i>
          <h4 class="mb-0 fw-semibold lh-1" style="color: orange; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">938</h4>
          <p class="mb-0 fs-4">VICTORY</p>
        </div>
        <div id="lost" class="text-center">
          <i class="fa fa-user fs-6 d-block"></i>
          <h4 class="mb-0 fw-semibold lh-1" style="color: orange; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">3</h4>
          <p class="mb-0 fs-4">LOST</p>
        </div>
      </div>
      <div class="text-center id="btnFriend">
        <div id="btnFriend" class="btn-group ml-auto" role="group" aria-label="Basic example">
            <button type="button" id="loginBtn" class="btn btn-lg">JOUER</button>
            <button type="button" id="profilBtn" class="btn btn-lg">MESSAGE</button>
            <button type="button" id="profilBtn" class="btn btn-lg">BLOQUER</button>
            <button type="button" id="profilBtn" class="btn btn-lg">INVITE CHANNEL</button>
        </div>
      </div>
    </div>
    `;
}

export { profilfriendContent };
