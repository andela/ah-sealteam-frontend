import { CLOUDINARY_UPLOAD_PRESET, CLOUDINARY_URL } from '../constants';
import axios from 'axios';

/* Asynchronous function
 * Handles uploading of image to cloudinary
 * Returns an unresolved promise contaning the image url
 */
export default async function uploadToCloudinary(file) {
    let formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', CLOUDINARY_UPLOAD_PRESET);
    const uploadResponse = await axios({
        url: CLOUDINARY_URL,
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        data: formData
    });

    const response = await uploadResponse.data.secure_url;
    return response;
}
