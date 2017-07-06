import React from 'react';
import SearchNav from './components/SearchNav/SearchNav';
import SearchResults from './components/SearchResults/SearchResults';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions/searchResults';
import './Search.css';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.search = this.search.bind(this);
	}

	clearSearch() {
		this.props.actions.clearSearchResults();
	}

	componentDidUpdate() {
		if (!this.props.searchResults.hasOwnProperty('type')) {
			this.props.actions.getSearchResults(this.refs.inputBox.value, this.props.location.state);
		}
	}

	search() {
		this.props.actions.getSearchResults(this.refs.inputBox.value, this.props.location.state);
	}

	render() {
		if (!this.props.searchResults.hasOwnProperty('type')) {
			return (
				<div className="search">
					<input
						ref="inputBox"
						className="input-box"
						type="text"
						placeholder="Start Typing..."
						onBlur={this.search}
					/>
					<SearchNav onClick={this.props.actions.clearSearchResults} />
				</div>
			);
		} else {
			return (
				<div className="search">
					<input
						ref="inputBox"
						className="input-box"
						type="text"
						placeholder="Start Typing..."
						onBlur={this.search}
					/>
					<SearchNav onClick={this.props.actions.clearSearchResults} />
					<SearchResults results={this.props.searchResults} />
				</div>
			);
		}
	}

	/*render() {
		if (!this.props.searchResults.hasOwnProperty('type')) {
			return (
				<div className="search">
					<input className="input-box" type="text" placeholder="Start Typing..." onBlur={this.search} />
					<SearchNav />
				</div>
			);
		} else if (this.props.searchResults.type === 'track') {
			return (
				<div className="search">
					<input className="input-box" type="text" placeholder="Start Typing..." onBlur={this.search} />
					<SearchNav />
					<Tracks tracks={this.props.searchResults.tracks} />
				</div>
			);
		} else if (this.props.searchResults.type === 'artist') {
			return (
				<div className="search">
					<input className="input-box" type="text" placeholder="Start Typing..." onBlur={this.search} />
					<SearchNav />
					<Artists artists={this.props.searchResults.artists} />)}
				</div>
			);
		} else if (this.props.searchResults.type === 'album') {
			return (
				<div className="search">
					<input className="input-box" type="text" placeholder="Start Typing..." onBlur={this.search} />
					<SearchNav />
					<Albums albums={this.props.searchResults.albums} />)}
				</div>
			);
		} else {
			return (
				<div className="search">
					<input className="input-box" type="text" placeholder="Start Typing..." onBlur={this.search} />
					<SearchNav />
					<Playlists lists={this.props.searchResults.playlists} />)}
				</div>
			);
		}
	}*/
}

const mapStateToProps = (state, ownProps) => ({
	searchResults: state.searchResults
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
