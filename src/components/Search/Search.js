import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import DebounceInput from 'react-debounce-input';
import './Search.css';

import {
    searchVideo,
    getTypeahead    
} from '../../actions/Actions';

const mapDispatchToProps = dispatch => bindActionCreators({
    searchVideo,
    getTypeahead
}, dispatch)

class Search extends Component {

    constructor() {
        super();

        this.state = {
            searchResult: ''
        }
    }

    handleChange(event) {
        this.setState({
            searchResult: event.target.value
        })

        if (this.state.searchResult.length >= 2) {
            this.props.getTypeahead(event.target.value)
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        this.props.searchVideo(this.state.searchResult);
    }

    typeaheadSearch(typeahead)  {
        this.props.searchVideo(typeahead);
    }

    render() {
        return (
            <form className="search" onSubmit={(event) => this.handleSubmit(event)}>
                <div className="titles">
                    <h1>Search for your favorite CS game!</h1>
                </div>
                <div className="innerSearch">
                    <DebounceInput className="searchField" minLength={2} debounceTimeout={300} value={this.state.searchResult} onChange={(event) => this.handleChange(event)} />
                    <button className="searchButton" type="submit">A</button>
                    <ul className="typeahead">
                        {(() => {
                            return (
                                this.props.typeahead.map((search, index) => {
                                    return (
                                        <li className="typeaheadItem" key={index} onClick={() => this.typeaheadSearch(search.title)} >{search.title}</li>
                                    );
                                })
                            );
                        })()}
                    </ul>
                </div>
            </form>
        );
    }
}

export default connect(null, mapDispatchToProps)(Search)