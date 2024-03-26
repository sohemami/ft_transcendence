// Importez vos fonctions de contenu de page depuis leurs fichiers respectifs
import { navbarContent } from './Navbar.js';
import { homePageContent } from './Home.js';
import { gamePageContent } from './Game.js'; 
import { loginPageContent } from './Login.js'; 
import { chatPageContent } from './Chat.js';
import { profilContent } from './Profil.js';
import { profilfriendContent } from './Profilfriend.js';
import { modifContent } from './Modif.js';
// Ajout de l'import pour la page de connexion

// Définissez vos routes ici
export const routes = [
    {
        path: '/',
        component: homePageContent
    },
    {
        path: '/game',
        component: gamePageContent
    },
    {
        path: '/login',
        component: loginPageContent
    },
    {
        path: '/chat',
        component: chatPageContent
    },
    {
        path: '/profil',
        component: profilContent
    },
    {
        path: '/profilfriend',
        component: profilfriendContent
    },
    {
        path: '/modif',
        component: modifContent
    }
    // Ajoutez d'autres routes et leurs fonctions de contenu ici
];

export function router() {
    const path = window.location.pathname;
    const route = routes.find(route => route.path === path);
    const contentGenerator = route ? route.component : () => `<h1>404</h1><p>Page non trouvée</p>`;
    document.getElementById('app').innerHTML = navbarContent() + contentGenerator();
    attachEventListeners(); // Attachez les écouteurs d'événements après avoir mis à jour le contenu
}

// Fonction pour attacher des écouteurs d'événements spécifiques à la page
function attachEventListeners() {
    // Exemple : Attacher un écouteur d'événements au bouton PLAY
    const playButton = document.getElementById('playButton');
    if (playButton) {
        playButton.addEventListener('click', function() {
            console.log("Bouton PLAY cliqué !");
            navigateTo('/game'); // Modifiez cette fonction selon vos besoins
        });
    }

    // Écouteur d'événement pour le bouton Sign Up
    const signupButton = document.getElementById('loginBtn');
    if (signupButton) {
        signupButton.addEventListener('click', function() {
            navigateTo('/login');
        });
    }
    const chatButton = document.getElementById('profilBtn');
    if (chatButton) {
        chatButton.addEventListener('click', function() {
            navigateTo('/profil');
        });
    }
    const homeButton = document.getElementById('homeBtn');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            navigateTo('/');
        });
    }
    const menuButton = document.getElementById('menuBtn');
    if (menuButton) {
        menuButton.addEventListener('click', function() {
            const dropdownMenu = document.querySelector('#menuBtn .dropdown-menu');
            if (dropdownMenu) {
                dropdownMenu.classList.toggle('show');
            }
        });
    }
    const ProfilButton = document.getElementById('cardBtn');
    if (ProfilButton) {
        ProfilButton.addEventListener('click', function() {
            navigateTo('/profilfriend');
        });
    }
    const modifButton = document.getElementById('modifBtn');
    if (modifButton) {
        modifButton.addEventListener('click', function() {
            navigateTo('/modif');
        });
    }
    document.querySelectorAll('#menuBtn .dropdown-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault(); // Empêche le comportement par défaut du lien
            const href = this.getAttribute('href'); // Récupère l'attribut href du lien
            navigateTo(href); // Utilise la fonction navigateTo pour naviguer
        });
    });
    // Vous pouvez ajouter ici d'autres écouteurs d'événements pour d'autres éléments
}


// Fonction pour naviguer programmation vers une nouvelle route
export function navigateTo(url) {
    history.pushState(null, null, url);
    router(); // Appelez `router` pour mettre à jour le contenu en fonction de la nouvelle URL
}



// Écoutez l'événement 'popstate' pour gérer les navigations précédente/suivante du navigateur
window.addEventListener('popstate', router);


// Exécutez `router` une fois que le DOM est entièrement chargé
document.addEventListener('DOMContentLoaded', () => router());


