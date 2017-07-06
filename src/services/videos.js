var request = require('./request.js');

/**
 * Get collection of articles
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {
    return request.get('http://api.loungedinosaur.dk/videos')
        .then(function(response) {
            return {
                collection: response
            };
        });
}

function get(title) {
    return request.get('http://api.loungedinosaur.dk/video?title=' + title)
        .then(function(response) {
            return {
                video: response
            };
        });
}

function typeahead(search) {
    return request.get('http://api.loungedinosaur.dk/typeahead?search=' + search)
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