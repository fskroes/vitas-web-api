const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');
var Jimp = require('jimp');

const DOGBREED_CLASSES = require('../trainedmodel/dog_breed_classes.js')


module.exports = async function upload(req, res) {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            const file = req.files.file;

            // const type = 'image/jpeg'
            var image = await (await Jimp.read(file.data)).getBufferAsync("image/jpeg")
            console.log(image)
            // const imageData = Jimp.decode(image.bitmap.data)
            // console.log(imageData)

            

            const imageSize = 224
            // const imageBuffer =  fs.readFileSync(image);
            // get tensor out of the buffer
            image = tfnode.node.decodeImage(image, 3);
            // dtype to float
            image = image.cast('float32').div(255);
            // resize the image
            image = tf.image.resizeBilinear(image, size = [imageSize, imageSize]); // can also use tf.image.resizeNearestNeighbor
            image = image.expandDims(); // to add the most left axis of size 1
            
            const model = await tf.loadGraphModel('file://savedmodel/model.json');
            const predictions = await model.predict(image);
            let top5 = Array.from(predictions.dataSync())
                .map(function (p, i) {return {prob: p, class: DOGBREED_CLASSES[i]}; })
                .sort(function (a, b) {return b.prob - a.prob; })
                .slice(0, 5);
            console.log(top5)

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: { top5 }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}