const { rfft } = require('@tensorflow/tfjs');
const tf = require('@tensorflow/tfjs')
const tfnode = require('@tensorflow/tfjs-node');
const fs = require('fs');
var Jimp = require('jimp');
const jpeg = require('jpeg-js');

const NUMBER_OF_CHANNELS = 3
const DOGBREED_CLASSES = require('../trainedmodel/dog_breed_classes.js')


module.exports = async function upload(req, res) {
    try {
        if(!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            console.log('log file', req.files)
            let file = req.files.file;

            Jimp.read(file.data, (err, lenna) => {
                if (err) throw err;
                lenna
                    .resize(224, 224) // resize
                    // .quality(60) // set JPEG quality
                    // .greyscale() // set greyscale
                    .write('./public/images/lena-small-bw1.jpg'); // save
            });

            const buf = fs.readFileSync('./public/images/lena-small-bw1.jpg')
            const pixels = jpeg.decode(file.data)
            console.log(pixels)

            const image = tf.browser.fromPixels(pixels).resizeBilinear([224, 224]).toFloat().expandDims();
            // const image = tf.reshape(tf.browser.fromPixels(pixels), [1, 224, 224, 3]);
            console.log('new_image from reshape: ', image)
            
            // let tensor = tf.browser.fromPixels(pixels)
            // let image = tensor.toFloat().expandDims()
            // let image = tensor.resizeBilinear([224, 224]).toFloat().expandDims()
            // console.log(image)
            
            const model = await tf.loadGraphModel('file://savedmodel/model.json');
            const predictions = await model.predict(image);
            // console.log('predictions: ', predictions)
            // console.log('predictions - data: ', await predictions.data())
            // const prediction = predictions.as1D().argMax().dataSync()[0];
            const prediction = predictions.dataSync();
            // console.log('predictions: ', {prediction})
            let top5 = Array.from(predictions.dataSync())
                .map(function (p, i) {return {prob: p, class: DOGBREED_CLASSES[i]}; })
                .sort(function (a, b) {return b.prob - a.prob; })
                .slice(0, 5);
            console.log(top5)

            max_prediction_index = prediction.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0)
            // console.log('classification results:', predictions)
            // console.log('max', predictions.reduce((iMax, x, i, arr) => x > arr[iMax] ? i : iMax, 0))
            console.log('max pred:', prediction[max_prediction_index] * 100)
            
            // let top5 = Array.from(predictions)
            //     .map(function (p, i) {
            //         return {
            //             probability: p,
            //             className: IMAGENET_CLASSES[i]
            //         };
            //     }).sort(function (a, b) {
            //         return b.probability - a.probability;
            //     }).slice(0, 5);
            // console.log(top5)
            

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                data: {
                    name: file.name,
                    mimetype: file.mimetype,
                    size: file.size
                }
            });
        }
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
}

// module.exports = async function multiple_upload(req, res) {
//     try {
//         if(!req.files) {
//             res.send({
//                 status: false,
//                 message: 'No file uploaded'
//             })
//         } 
//         else {
//             let data = []; 
    
//             //loop all files
//             _.forEach(_.keysIn(req.files.file), (key) => {
//                 let file = req.files.file[key];
                
//                 //move photo to uploads directory
//                 file.mv('./public/images/' + file.name);

//                 //push file details
//                 data.push({
//                     name: file.name,
//                     mimetype: file.mimetype,
//                     size: file.size
//                 });
//             });
    
//             //return response
//             res.send({
//                 status: true,
//                 message: 'Files are uploaded',
//                 data: data
//             });
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(500).send(err);
//     }
// }