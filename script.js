let fields = [
    null,
    null,
    'cross',
    null,
    null,
    null,
    null,
    'circle',
    null,
];

function render() {
    let contentDiv = document.getElementById('content');
    let tableHTML = '<table>';
    let index = 0;

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            let symbol = fields[index++];
            tableHTML += `<td>${symbol === 'cross' ? generateCrossSVG() : symbol === 'circle' ? generateCircleSVG() : ''}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}

function generateCircleSVG() {
    const svgCode = /*html*/`
        <svg width="70" height="70">
            <circle cx="30" cy="30" r="25" fill="transparent" stroke="#00B0EF" stroke-width="5" >
                <animate attributeName="stroke-dasharray" values="0,219;219,219" dur="0.4s" keyTimes="0;1" />
            </circle>
        </svg>
    `;
    return svgCode;
}

function generateCrossSVG() {
    const svgCode = /*html*/`
        <svg width="70" height="70">
            <line x1="5" y1="5" x2="65" y2="65" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="0;70" dur="0.2s" begin="0s" />
                <animate attributeName="y2" values="0;70" dur="0.2s" begin="0s" />
            </line>
            <line x1="65" y1="5" x2="5" y2="65" stroke="#FFC000" stroke-width="5">
                <animate attributeName="x2" values="70;0" dur="0.2s" begin="0.2s" />
                <animate attributeName="y2" values="0;70" dur="0.2" begin="0.2s" />
            </line>
        </svg>
    `;

    return svgCode;
}