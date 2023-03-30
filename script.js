const container = document.querySelector(".container");
const refreshBtn = document.querySelector(".refresh-btn");

// const maxPaletteBoxes = 32;

const generatePalette = () => {
    container.innerHTML = ""; //! clearing container

    for (let i = 0; i < maxPaletteBoxes; i++) {
        //!generating a random hex color code
        let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
        randomHex = `#${randomHex.padStart(6, '0')}`;

        //! creating new li element and inserting it container 
        const color = document.createElement('li');
        color.classList.add('color');
        color.innerHTML = `<div class="rect-box" style="background: ${randomHex}"></div>
                           <span class="hex-value">${randomHex}</span>`;
        //! add click event to current li elemnt to copy color
        color.addEventListener('click', () => copyColor(color, randomHex));
        container.appendChild(color);
    }
}
generatePalette();

const copyColor = (elem, hexVal) => {
    const colorElement = elem.querySelector('.hex-value');
    navigator.clipboard.writeText(hexVal).then(() => {
        colorElement.innerText = 'Copied';
        setTimeout(() => colorElement.innerText = hexVal, 1000);
    }).catch(() => alert('Failed to copy the color code!'));
}

refreshBtn.addEventListener('click', generatePalette);