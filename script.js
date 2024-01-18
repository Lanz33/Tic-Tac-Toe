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
            tableHTML += `<td>${symbol === 'cross' ? 'X' : symbol === 'circle' ? 'O' : ''}</td>`;
        }
        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}