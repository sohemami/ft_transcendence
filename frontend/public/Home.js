// Import de la fonction navbarContent depuis Navbar.js
import { navbarContent } from './Navbar.js';

function homePageContent() {
    return `
    <!-- Conteneur pour le titre et la table de ping-pong -->
    <div class="container text-center d-flex flex-column align-items-center">
        <!-- Titre -->
        <h1 class="title">PONG</h1>

        <!-- Terrain de jeu -->
        <div class="wrap">
            <div id="half"></div>
            <div id="sidel"></div>
            <div id="sider"></div>
            <div id="ball"></div>
        </div>

        <!-- Bouton PLAY -->
        <button class="Btn mt-5" id="playButton">   
            <svg class= "manette"
            width="20" 
            height="20" 
            stroke-width="2"
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg">
            <!-- Votre contenu SVG ici -->
            <!-- Par exemple, un triangle pointant vers la droite -->
            <path d="M8 13V9m-2 2h4m5-2v.001M18 12v.001m4-.334v5.243a3.09 3.09 0 0 1-5.854 1.382L16 18a3.618 3.618 0 0 0-3.236-2h-1.528c-1.37 0-2.623.774-3.236 2l-.146.292A3.09 3.09 0 0 1 2 16.91v-5.243A6.667 6.667 0 0 1 8.667 5h6.666A6.667 6.667 0 0 1 22 11.667Z" />
            </svg>
            PLAY
        </button>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

    <!-- Appel du fichier JavaScript externe -->
   
   

    `;
}

export { homePageContent };