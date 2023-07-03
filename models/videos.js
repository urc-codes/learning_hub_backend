const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
    video_title: {
        type: String,
    },
    video_link: {
        type: String,
    },
    video_category: {
        type: String,
    },
}, {timestamps: true});

const Video = mongoose.model('Video', videoSchema);
module.exports = Video;