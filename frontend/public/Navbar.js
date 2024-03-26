// Navbar.js
function navbarContent() {
    return `
    <!-- Navbar sans marge en haut -->
    <nav class="navbar navbar-expand-lg fixed-top id="NavBar">
        <div class="btn-group ml-auto" role="group" aria-label="Basic example">
            <button type="button" id="loginBtn" class="btn btn-lg">LOGIN</button>
            <button type="button" id="menuBtn" class="btn btn-lg">MENU
                <ul id="Drop" class="dropdown-menu">
                    <li><a id="dropchat" class="dropdown-item" href="/chat">MESSAGERIE</a></li>
                    <li><a id="dropgame" class="dropdown-item" href="/game">PONG</a></li>
                    <li><a id="dropprofil" class="dropdown-item" href="/profil">PROFILE</a></li>
                </ul>
            </button>
        </div>
        <button type="button" id="homeBtn" class="btn btn-lg">PONG</button>
    </nav>
    `;
}

export { navbarContent };

