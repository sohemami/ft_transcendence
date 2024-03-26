// Modif.js
function modifContent() {
    return `
    <link rel="stylesheet" type="text/css" href="src/modif.css">
        <div class="container-xl px-4 mt-4">
            <!-- Account page navigation-->
            <hr class="mt-0 mb-4">
            <div class="row">
                <div class="col-xl-4">
                    <!-- Profile picture card-->
                    <div class="card mb-4 mb-xl-0">
                        <div class="card-body text-center">
                            <!-- Profile picture image-->
                            <img id="imgModif" class="img-account-profile rounded-circle mb-2" src="http://bootdey.com/img/Content/avatar/avatar1.png" alt="">
                            <!-- Profile picture upload button-->
                            <button id="changeImg" class="btn btn-primary" type="button">Changer Photo</button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <!-- Account details card-->
                    <div class="card mb-4">
                        <div class="card-body">
                            <form>
                                <!-- Form Group (Nom UTILISATEUR)-->
                                <div class="mb-3">
                                    <label id="labelModif" class="small mb-1" for="inputUsername">Nom d'utilisateur</label>
                                    <input class="form-control" id="inputUsername" type="text" placeholder="Entrez votre nom d'utilisateur" value="Nom d'utilisateur">
                                </div>
                                <!-- Form Row-->
                                <div class="row gx-3 mb-3">
                                    <!-- Form Group (PRENOM)-->
                                    <div class="col-md-6">
                                        <label id="labelModif" class="small mb-1" for="inputFirstName">PRENOM</label>
                                        <input class="form-control" id="inputFirstName" type="text" placeholder="Entrez votre prénom" value="Valerie">
                                    </div>
                                    <!-- Form Group (NOM)-->
                                    <div class="col-md-6">
                                        <label id="labelModif" class="small mb-1" for="inputLastName">NOM</label>
                                        <input class="form-control" id="inputLastName" type="text" placeholder="Entrez votre nom" value="Luna">
                                    </div>
                                </div>
                                <!-- Form Group (MAIL)-->
                                <div class="mb-3">
                                    <label id="labelModif" class="small mb-1" for="inputEmailAddress">Adresse mail</label>
                                    <input class="form-control" id="inputEmailAddress" type="email" placeholder="Entrez votre adresse mail" value="name@example.com">
                                </div>
                                <!-- Save changes button-->
                                <button id="saveModif" class="btn btn-primary" type="button">Sauvegarder les modifications</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    `;
}

export { modifContent };