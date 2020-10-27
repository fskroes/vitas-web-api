const IncomingForm = require('formidable').IncomingForm

module.exports = async function(req, res) {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            console.log('file ---: ', req.files)
            let avatar = req.files.file;
            
            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            avatar.mv('./public/images/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: avatar.name,
                    mimetype: avatar.mimetype,
                    size: avatar.size
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}

// module.exports = function upload(req, res) {
//     var form = new IncomingForm()

//     console.log(req.files)

//     form.on('file', (field, file) => {
//         // do something with the file
//         // e.g. save it to the database
//         // you can access it using file.path
        
//         console.log(file.path)
//     })

//     form.on('end', () => {
//         res.json()
//     })

//     form.parse(req)
// }