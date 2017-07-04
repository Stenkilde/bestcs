import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Search from '../components/Search/Search';
import VideoView from '../components/Video/Video';

import {
    getVideoCollection,
    searchVideo,
    getTypeahead    
} from '../actions/Actions';

const mapStateToProps = state => ({
    video: state.actions.video,
    videoCollection: state.actions.videos,
    typeahead: state.actions.typeahead
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getVideoCollection,
    searchVideo,
    getTypeahead
}, dispatch)

class Home extends Component {

    render() {
        return (
            <div>
                <Search typeahead={this.props.typeahead} />

                <VideoView video={this.props.video} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)