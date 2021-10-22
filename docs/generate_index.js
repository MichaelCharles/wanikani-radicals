const fs = require("fs");

const main = async () => {
    let contents = `
    <html>
    <head>
    <title>Wanikani Radicals Image Files</title>
    </head>
    <style>
    html, body {
        padding: 0;
        margin: 0;
        font-family: sans-serif;
        background: #f2f2f2;
        color: #212121;
        box-sizing: border-box;
        min-width: 100vw;
        min-height: 100vh;
    }
    div, ul, li, a, img {
        box-sizing: border-box;
    }
    .wrapper {
        margin: 1em;
    }
    .container {
        display: flex;
    }
    .section {
        flex: 1;
    }
    </style>
    <body>
    <div class="wrapper">
    `
    contents = contents + `<h1>Wanikani Radicals Image Files</h1>`
    let files = fs.readdirSync('./original_svgs').filter(a => !a.includes("loop.sh"));
    let wfiles = fs.readdirSync('./white_pngs');
    let bfiles = fs.readdirSync('./black_pngs');

    contents = contents + `<div class="container">`

    contents = contents + `<div class="section">`
    contents = contents + `<h2>SVG Files</h2><ul>
    `
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        contents = contents + `<li><a href="https://mcaubrey.github.io/wanikani-radicals/original_svgs/${file}">${file}</a></li>
        `
    }
    contents = contents + `</ul>`
    contents = contents + `</div>`

    contents = contents + `<div class="section">`
    contents = contents + `<h2>PNG Files (White)</h2><ul>
    `
    for (let i = 0; i < wfiles.length; i++) {
        const file = wfiles[i];
        contents = contents + `<li><a href="https://mcaubrey.github.io/wanikani-radicals/white_pngs/${file}">${file}</a></li>
        `
    }
    contents = contents + `</ul>`
    contents = contents + `</div>`

    contents = contents + `<div class="section">`
    contents = contents + `<h2>PNG Files (Black)</h2><ul>
    `
    for (let i = 0; i < bfiles.length; i++) {
        const file = bfiles[i];
        contents = contents + `<li><a href="https://mcaubrey.github.io/wanikani-radicals/black_pngs/${file}">${file}</a></li>
        `
    }
    contents = contents + `</ul>`
    contents = contents + `</div>`

    contents = contents + `</div>`
    contents = contents + `
    </div>
    </body>
    </html>
    `

    fs.writeFileSync('./index.html', contents);
}

main();