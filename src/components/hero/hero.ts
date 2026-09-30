export function createHero(): HTMLElement {
    const hero = document.createElement('hero-section');

    hero.className = 'hero';

    hero.innerHTML = `
        <div class="hero-container">
            <div class="hero-text-box">
                <h1>Take a Short Break & Have Fun</h1>
                <p>
                Discover hundreds of curated casual mini-games. 
                Play instantly in your browser — puzzle, match 3, 
                farm, and board classics.
                </p>
                <button class="hero-button">Browse Library</button>
            </div>
        </div>
    `;
    return hero;
}
