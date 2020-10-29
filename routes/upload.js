const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node');
const customvisionjs = require('@microsoft/customvision-tfjs-node');
const fs = require('fs');
var Jimp = require('jimp');

const DOGBREED_CLASSES = require('../savedmodel/dog_breed_classes.js')


module.exports = async function upload(req, res) {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            const file = req.files.file;

            const mime_type = 'image/jpeg'
            var image_buffer = await (await Jimp.read(file.data)).getBufferAsync(mime_type)

            const imageSize = 224
            // get tensor out of the buffer
            image = tfnode.node.decodeImage(image_buffer, 3);
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


            //
            // ----- CUSTOM VISION 
            //
            const vision_model = new customvisionjs.ClassificationModel();
            await vision_model.loadModelAsync('file://customvisionmodel/model.json');

            const result = await vision_model.executeAsync(image);
            let top5_customvision = Array.from(result[0])
                .map(function (p, i) {return {prob: p, class: DOGBREED_CLASSES[i]}; })
                .sort(function (a, b) {return b.prob - a.prob; })
                .slice(0, 5);
            console.log(top5_customvision)   



            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                dataTF: { top5 },
                dataCV: { top5_customvision }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}