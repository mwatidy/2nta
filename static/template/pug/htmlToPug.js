//html to pug

( async _ => {

    const fs = require('fs')
    const html2pug = require('html2pug')
    
    var filesArray = []
    

    async function addFilesToArray(directory) {

        var files = fs.readdirSync(directory)
        for (let file of files) {

            if(file.match(/\.html$/i)) filesArray.push(directory+"/"+file)
            if(fs.lstatSync(directory+'/'+file).isDirectory() && !file.match(/^\./)) await addFilesToArray(directory + "/" + file)

        }

    }

    await addFilesToArray('./')
    for(let file of filesArray) {

        let filename = file.replace(/\/\//g, "/")
        let fileContents = fs.readFileSync(filename).toString()

        let pug = html2pug(fileContents, { tabs: true })
        let renamedFile = filename.replace(/\.html$/, ".pug")

        fs.writeFileSync(renamedFile, pug)

        console.log('completed:', file)

    }


})()