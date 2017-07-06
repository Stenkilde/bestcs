var request = require('./request.js');

let __API__ = '';

if ( process.env.NODE_ENV === 'production') {
    __API__ = 'https://api.loungedinosaur.dk';
} else {
    __API__ = 'http://localhost:8000';
}

/**
 * Get collection of articles
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {
    return request.get(__API__ + '/videos')
        .then(function(response) {
            return {
                collection: response
            };
        });
}

function get(title) {
    console.log(process.env);
    return request.get(__API__ + '/video?title=' + title)
        .then(function(response) {
            return {
                video: response
            };
        });
}

function typeahead(search) {
    return request.get(__API__ + '/typeahead?search=' + search)
        .then(function(response) {
            return {
                search: response
            }
        })
}

module.exports = {
    collection: collection,
    get: get,
    typeahead: typeahead
};