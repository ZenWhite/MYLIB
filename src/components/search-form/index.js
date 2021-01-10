import React from 'react';
import {connect} from 'react-redux';

import {fetchBooks} from '../../store/actions';

class SearchForm extends React.Component {
    state = {
        searchText: ''
    }
    searchHandler = (value) => {
        this.setState({searchText: value});
    }
    submitHandler = (e) => {
        e.preventDefault();
        this.props.fetchBooks(this.state.searchText);
        this.setState({searchText: ''});
    }
    render() {
        return (
            <form className="search-block__search search" onSubmit={this.submitHandler}>
                <div className="search-block__input">
                    <input 
                        type="text" required autoComplete="off" 
                        id="search-input" name='search-input'
                        value={this.state.searchText}
                        onChange={e => {
                            this.searchHandler(e.target.value)
                        }} 
                    />
                    <label htmlFor="search-input">Название книги</label>
                </div>
                <button className="search-block__submit search-btn" type="submit">
                    <img src="icons/arrow.svg" alt="arrow" draggable="false" />
                </button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    fetchBooks
}

export default connect(null, mapDispatchToProps)(SearchForm);