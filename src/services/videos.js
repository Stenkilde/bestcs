var request = require('./request.js');

/**
 * Get collection of articles
 * @param options
 * @returns {axios.Promise|Promise.<T>|*}
 */
function collection() {
    return request.get('http://localhost:8000/videos')
        .then(function(response) {
            return {
                collection: response
            };
        });
}

function get(title) {
    return request.get('http://localhost:8000/video?title=' + title)
        .then(function(response) {
            return {
                video: response
            };
        });
}

function typeahead(search) {
    return request.get('http://localhost:8000/typeahead?search=' + search)
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