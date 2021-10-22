const fs = require("fs");

const main = async () => {
    let contents = `
    <html>
    <head>
    <title>Wanikani Radicals Image Files</title>
    </head>
    <body>
    `
    contents = contents + `<h2>Wanikani Radicals Image Files</h2><ul>
    `
    let files = fs.readdirSync('./original_svgs');
    
    contents = contents + `<h2>SVG Files</h2><ul>
    `
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        contents = contents + `<li><a href="https://mcaubrey.github.io/wanikani-radicals/original_svgs/${file}">${file}</a></li>
        `
    }
    contents = contents + `</ul>`

    contents = contents + `<h2>PNG Files (White)</h2><ul>
    `
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        contents = contents + `<li><a href="https://mcaubrey.github.io/wanikani-radicals/white_pngs/${file}.png">${file}.png</a></li>
        `
    }
    contents = contents + `</ul>`


    contents = contents + `
    </body>
    </html>
    `

    fs.writeFileSync('./index.html', contents);
}

main();