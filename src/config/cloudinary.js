import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dnipqs2mh',
    api_key: '121464622239229',
    api_secret: 'TxX4BUeXzeQVBohgb7n9rxrnro8'
});


export default cloudinary.uploader;
