// Profil.js
function profilContent() {
    return `
      <link rel="stylesheet" type="text/css" href="src/profil.css">
             
    
      <div  id="Profil">
        <div class="d-flex align-items-center justify-content-center mb-2">
          <div id="imgProfil" class="linear-gradient d-flex align-items-center justify-content-center rounded-circle" style="width: 110px; height: 110px;" ;="">
            <div class=" d-flex align-items-center justify-content-center rounded-circle overflow-hidden" style="width: 100px; height: 100px;" ;="">
              <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="w-100 h-100">
            </div>
          </div>
        </div>
     



        <div class="container">
        <div class="row">
          <div class="col-md-6 d-flex justify-content-between align-items-center victory-lost"> <!-- Utilisation de justify-content-between pour pousser les éléments aussi loin que possible et align-items-center pour les aligner verticalement -->
              <div id="Victory" class="text-center">
                <i class="fa fa-file "></i>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="26" viewBox="0 0 576 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffde22" d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"/></svg>
                <h4 class="mb-0 fw-semibold lh-1" style="color: yellow; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">938</h4>
                <p class="mb-0 fs-4" style="color: yellow; shadow: 4px 4px 4px rgba(255,65,78);">VICTORY</p>
              </div>
              <div id="lost" class="text-center">
                <i class="fa fa-user fs-6 d-block mb-2"></i>
                <svg xmlns="http://www.w3.org/2000/svg" height="20" width="26" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path fill="#ffde22" d="M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-18.5-10.5-34.6-25.9-42.6C497 236.6 504 223.1 504 208c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 384H96c17.7 0 32-14.3 32-32V128c0-17.7-14.3-32-32-32H32C14.3 96 0 110.3 0 128V352c0 17.7 14.3 32 32 32z"/></svg>
                <h4 class="mb-0 fw-semibold lh-1" style="color: yellow; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">3</h4>
                <p class="mb-0 fs-4" style="color: orange;">LOST</p>
              </div>
            </div>
          </div>
        </div>
      </div> 


        <div id="Prenom" class="text-center">
           <h5 class="fs-5 mb-0 fw-semibold">Mathew Anderson</h5>
           <li><button id="modifBtn" class="btn">Modifier Profil</button></li>
        </div>
        
      <ul class="nav nav-pills user-profile-tab justify-content-end mt-2 bg-light-info rounded-2" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
          <button id="ProfilBtn" class="nav-link position-relative rounded-0 active d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="true">
            <i class="fa fa-user me-2 fs-6"></i>
            <span class="d-none d-md-block">Scores</span> 
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="ProfilBtn" class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" data-bs-toggle="pill" data-bs-target="#pills-followers" type="button" role="tab" aria-controls="pills-followers" aria-selected="false" tabindex="-1">
            <i class="fa fa-heart me-2 fs-6"></i>
            <span class="d-none d-md-block">Followers</span> 
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="ProfilBtn" class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" data-bs-toggle="pill" data-bs-target="#pills-friends" type="button" role="tab" aria-controls="pills-friends" aria-selected="false" tabindex="-1">
            <i class="fa fa-users me-2 fs-6"></i>
            <span class="d-none d-md-block">Friends</span> 
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button id="ProfilBtn" class="nav-link position-relative rounded-0 d-flex align-items-center justify-content-center bg-transparent fs-3 py-6" id="pills-gallery-tab" data-bs-toggle="pill" data-bs-target="#pills-gallery" type="button" role="tab" aria-controls="pills-gallery" aria-selected="false" tabindex="-1">
            <i class="fa fa-photo me-2 fs-6"></i>
            <span class="d-none d-md-block">Gallery</span> 
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">        
        <div class="tab-pane fade show active" id="pills-friends" role="tabpanel" aria-labelledby="pills-friends-tab" tabindex="0">
          <div class="d-sm-flex align-items-center justify-content-between mt-3 mb-4">
            <h3 class="mb-3 mb-sm-0 fw-semibold d-flex align-items-center">Amis<span class="badge text-bg-secondary fs-2 rounded-4 py-1 px-2 ms-2">20</span></h3>
            <form class="position-relative">
              <input type="text" class="form-control search-chat py-2 ps-5" id="text-srh" placeholder="Rechercher des amis">
              <i class="ti ti-search position-absolute top-50 start-0 translate-middle-y ms-3"></i>
            </form>
          </div>
          <div class="row">
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Betty Adams</h5>
                  <span class="text-dark fs-2">Medical Secretary</span>
                  <div class="container" id="card2">
                    <button type="button" id="cardBtn" class="btn btn-lg">VOIR PROFIL</button>
                  </div>
                </div>
               
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Inez Lyons</h5>
                  <span class="text-dark fs-2">Medical Technician</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Lydia Bryan</h5>
                  <span class="text-dark fs-2">Preschool Teacher</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar4.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Carolyn Bryant</h5>
                  <span class="text-dark fs-2">Legal Secretary</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar5.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Paul Benson</h5>
                  <span class="text-dark fs-2">Safety Engineer</span>
                </div>
              </div>
            </div>
            <div class="col-sm-6 col-lg-4">
              <div class="card hover-img">
                <div class="card-body p-4 text-center border-bottom">
                  <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" class="rounded-circle mb-3" width="80" height="80">
                  <h5 class="fw-semibold mb-0">Lydia Bryan</h5>
                  <span class="text-dark fs-2">Preschool Teacher</span>
                </div>
              </div>
            </div>
    `;
}

export { profilContent };
