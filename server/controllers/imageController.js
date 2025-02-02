const { Image } = require('../db/models'); 

exports.uploadImages = async (req, res) => {
    const sneakerId = req.params.sneakerId;
    const files = req.files;
    const modelName = req.body.modelName;
console.log('COMTROLLERR+++++++', sneakerId, files, modelName);
    if (!files || files.length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    if (!modelName) {
        return res.status(400).send('Model name is required.');
    }

    const imageRecords = files.map(file => ({
        link: `img/imgSneakers/${modelName}/${file.filename}`,
        sneakerId: sneakerId,
    }));

    try {
        await Image.bulkCreate(imageRecords);
        res.status(201).send('Images uploaded successfully.');
    } catch (error) {
        res.status(500).send('Error uploading images: ' + error.message);
    }
};
