import logo from '../../assets/icons/minigames-logo.png';
export function createHeader(): HTMLElement {
    const header = document.createElement('header');


    header.innerHTML = `
        <div class="header-container">
            <div class="header-logo">
                <a href="#">
                    <h1><img class="minigame-logo" src="${logo}" alt="Mini Games Logo"> MiniGames</h1>
                </a>
            </div>

            <div class="header-right">
                <nav>
                    <a href="#" class="active">Home</a>
                    <a href="#">Library</a>
                    <a href="#">Tournaments</a>
                    <a href="#">Community</a>
                </nav>

                <div class="header-buttons">
                    <button class="login">Log In</button>
                    <button class="signup">Sign Up</button>
                </div>
            </div>

        </div>    
    `
    return header;  
}