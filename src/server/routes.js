const postPredictHandler = require('../server/handler');

const routes = [
    {
        path: '/predict',
        method: 'POST',
        handler: postPredictHandler,
        options: {
            payload: {
                /*options payload untuk membuat routes ini bisa menerima data berupa gambar.*/
                allow: 'multipart/form-data',
                multipart: true
            }
        }
    }
]

module.exports = routes;