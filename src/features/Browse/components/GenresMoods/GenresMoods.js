import React from 'react';
import PropTypes from 'prop-types';
import Genres from '../../../../components/Genres/Genres';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/genresMoods';
import './GenresMoods.css';

class GenresMoods extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.actions.getGenresMoods();
	}

	render() {
		return (
			<div>
				<h1 className="browse-title">Genres & Moods</h1>
				<Genres genres={this.props.genresMoods} />
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => ({
	genresMoods: state.genresMoods
});

const mapDispatchToProps = dispatch => ({
	actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(GenresMoods);

GenresMoods.propTypes = {
	genresMoods: PropTypes.object.isRequired
};
