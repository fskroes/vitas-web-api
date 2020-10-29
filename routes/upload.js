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
            var image = tfnode.node.decodeImage(image_buffer, 3);
            // dtype to float
            image = image.cast('float32').div(255);
            // resize the image
            image = tf.image.resizeBilinear(image, size = [imageSize, imageSize]); // can also use tf.image.resizeNearestNeighbor
            image = image.expandDims(); // to add the most left axis of size 1
            
            const model = await tf.loadGraphModel('file://savedmodel/model.json');
            const predictions = model.predict(image);
            let top5 = Array.from(predictions.dataSync())
                .map(function (p, i) {return {prob: p, class: DOGBREED_CLASSES[i]}; })
                .sort(function (a, b) {return b.prob - a.prob; })
                .slice(0, 5);
            console.log(top5)


            //
            // ----- CUSTOM VISION 
            //
            // var vision_model = new customvisionjs.ClassificationModel();
            // await vision_model.loadModelAsync('file://customvisionmodel/model.json');
            const vision_model_props = await tf.loadGraphModel('file://customvisionmodel/model.json');

            const input_size = vision_model_props.inputs[0].shape[1];
            var new_image = tfnode.node.decodeImage(image_buffer, 3)
            console.log(new_image)

            const rgb_image_reverse = preprocess(new_image, input_size)
            console.log(rgb_image_reverse)
            //   }

            const result = vision_model_props.predict(rgb_image_reverse);
            // console.log(result);
            let top5_customvision = Array.from(result.dataSync())
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

function preprocess(image, input_size) {
    // CenterCrop
    const [h, w] = image.shape.slice(0, 2);
    const top = h > w ? (h - w) / 2 : 0;
    const left = h > w ? 0 : (w - h) / 2;
    const size = Math.min(h, w);
    const rgb_image = tfnode.image.cropAndResize(image.expandDims().toFloat(), [[top / h, left / w, (top+size) / h, (left+size) / w]], [0], [input_size, input_size]);
    return rgb_image.reverse(-1); // RGB -> BGR;
}