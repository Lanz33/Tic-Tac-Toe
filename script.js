let fields = [
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
];

let currentPlayer = 'circle'; // Start with circle

function handleClick(row, col) {
    if (fields[row * 3 + col] === null) {
        fields[row * 3 + col] = currentPlayer;
        currentPlayer = currentPlayer === 'circle' ? 'cross' : 'circle';
        render(row, col);
    }
}

// Beispiel: Fügen Sie das SVG-Element zum HTML-Dokument hinzu
window.onload = function () {
    render();
};

function render(clickedRow, clickedCol) {
    let contentDiv = document.getElementById('content');
    let playerDiv = document.getElementById('player');
    let tableHTML = '<table>';
    let index = 0;

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            let symbol = fields[index++];
            tableHTML += `<td onclick="handleClick(${i},${j})">${symbol ? generateSVG(symbol, i, j, clickedRow, clickedCol) : ''}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
    playerDiv.innerHTML = `Player: ${currentPlayer === 'circle' ? '2 (Circle)' : '1 (Cross)'}`;
}

function generateSVG(symbol, row, col, clickedRow, clickedCol) {
    const animationBegin = (row === clickedRow && col === clickedCol) ? '0s' : 'none';
    
    return symbol === 'cross' ? generateCrossSVG(animationBegin) : generateCircleSVG(animationBegin);
}

function generateCircleSVG(animationBegin) {
    const svgCode = /*html*/`
        <svg width="70" height="70">
            <circle cx="30" cy="30" r="25" fill="transparent" stroke="#00B0EF" stroke-width="5">
                <animate attributeName="stroke-dasharray" values="0,219;219,219" dur="0.4s" keyTimes="0;1" begin="${animationBegin}" />
            </circle>
        </svg>
    `;
    return svgCode;
}

function generateCrossSVG(animationBegin) {
    const svgCode = /*html*/`
        <svg width="70" height="70">
            <line x1="5" y1="5" x2="65" y2="65" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="0;70" dur="0.2s" begin="${animationBegin}" />
                <animate attributeName="y2" values="0;70" dur="0.2s" begin="${animationBegin}" />
            </line>
            <line x1="65" y1="5" x2="5" y2="65" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="70;0" dur="0.2s" begin="${animationBegin}" />
                <animate attributeName="y2" values="0;70" dur="0.2s" begin="${animationBegin}" />
            </line>
        </svg>
    `;

    return svgCode;
}