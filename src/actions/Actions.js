// Imports
import { 
    collection,
    get,
    typeahead
} from '../services/videos';

// Redux ACTIONS
export const SEARCH = 'video/SEARCH'
export const COLLECTION = 'video/COLLECTION'
export const TYPEAHEAD = 'video/TYPEAHEAD'

const initialState = {
    videos: [],
    video: {
        vods: {
            games: [],
            urls: []
        }
    },
    typeahead: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return {
                ...state,
                video: action.video
            }

        case COLLECTION:
            return {
                ...state,
                videos: action.videos
            }

        case TYPEAHEAD:
            return {
                ...state,
                typeahead: action.typeahead
            }
        default:
            return state
    }
}

export const searchVideo = (video) => {
    return dispatch => {
        get(video).then((response) => {
            dispatch({
                type: SEARCH,
                video: response.video
            })
        })
    }
}

export const getVideoCollection = () => {
    const videoCollection = collection().then((response) => {
        return response.collection;
    })

    return dispatch => {
        dispatch({
            type: COLLECTION,
            videos: videoCollection
        })
    }
}

export const getTypeahead = (search) => {
    return dispatch => {
        typeahead(search).then((response) => {
            dispatch({
                type: TYPEAHEAD,
                typeahead: response.search
            })
        })
    }
}