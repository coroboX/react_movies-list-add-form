import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import cn from 'classnames';

import { MovieCard } from '../MovieCard';

import './NewMovie.scss';

export class NewMovie extends Component {
  state = {
    values: {
      title: '',
      description: '',
      imgUrl: '',
      imdbUrl: '',
      imdbId: '',
    },
    touched: {
      title: false,
      description: true,
      imgUrl: false,
      imdbUrl: false,
      imdbId: false,
    },
    errors: {
      title: null,
      description: null,
      imgUrl: null,
      imdbUrl: null,
      imdbId: null,
    },
  };

  resetState = () => {
    this.setState({
      values: {
        title: '',
        description: '',
        imgUrl: '',
        imdbUrl: '',
        imdbId: '',
      },
      touched: {
        title: false,
        description: true,
        imgUrl: false,
        imdbUrl: false,
        imdbId: false,
      },
      errors: {
        title: null,
        description: null,
        imgUrl: null,
        imdbUrl: null,
        imdbId: null,
      },
    });
  }

  isTextValid = (text) => {
    return (text.search(/\w/) !== -1);
  }

  isUrlValid = (url) => {
    // eslint-disable-next-line max-len
    const pattern = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[.!/\\\w]*))?)$/;

    return url && pattern.test(url);
  }

  manageTextFieldError = (name, value) => {
    if (!this.isTextValid(value)) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [name]: `${name} field should not be empty`,
        },
      }));
    }
  }

  manageUrlError = (name, value) => {
    if (!this.isUrlValid(value)) {
      this.setState(prevState => ({
        ...prevState,
        errors: {
          ...prevState.errors,
          [name]: `${name} URL should be correct`,
        },
      }));
    }
  }

  handleChange = (event) => {
    const { target: { name, value } } = event;

    this.setState(prevState => ({
      ...prevState,
      values: {
        ...prevState.values,
        [name]: value,
      },
      touched: {
        ...prevState.touched,
        [name]: true,
      },
      errors: {
        ...prevState.errors,
        [name]: null,
      },
    }));
  }

  handleBlur = ({ name, value }) => {
    const trimmedValue = value.trim();

    if (name === 'imgUrl' || name === 'imdbUrl') {
      if (this.isTextValid(trimmedValue)) {
        this.manageUrlError(name, trimmedValue);
      } else {
        this.manageTextFieldError(name, trimmedValue);
      }
    } else {
      this.manageTextFieldError(name, trimmedValue);
    }
  }

  isFormValid = () => {
    const formHasErrors = Object.values(this.state.errors)
      .some(error => !!error === true);
    const isFormTouched = Object.values(this.state.touched)
      .every(touch => touch === true);

    return !formHasErrors && isFormTouched;
  }

  handleSubmit = (event, callback, movie) => {
    event.preventDefault();

    if (this.isFormValid()) {
      callback(event, movie);
      this.resetState();
    }
  }

  render() {
    const {
      title,
      description,
      imgUrl,
      imdbUrl,
      imdbId,
    } = this.state.values;

    const movie = this.state.values;
    const { addMovie } = this.props;

    const hasError = name => (
      this.state.errors[name] && this.state.touched[name]
    );

    return (
      <form
        name="addMovie"
        onSubmit={event => this.handleSubmit(event, addMovie, movie)}
      >
        <h1 className="form__header">
          Add new movie
        </h1>
        <label className="labelName">
          <span className="label__title">
            Title:
          </span>
          <input
            type="text"
            name="title"
            className={cn({ 'wrong-input': hasError('title') })}
            onChange={event => this.handleChange(event)}
            onBlur={event => this.handleBlur(event.target)}
            value={title}
            placeholder="Enter the title"
          />
          {hasError('title')
            && <span className="error">{this.state.errors.title}</span>}
        </label>
        <label className="labelName">
          <span className="label__title">
            Description:
          </span>
          <input
            type="textarea"
            name="description"
            className={cn({ 'wrong-input': hasError('description') })}
            onChange={event => this.handleChange(event)}
            // onBlur={event => this.handleBlur(event.target)}
            value={description}
            placeholder="Enter the description"
          />
          {hasError('description')
            && <span className="error">{this.state.errors.description}</span>}
        </label>
        <label className="labelName">
          <span className="label__title">
            Poster link:
          </span>
          <input
            type="text"
            name="imgUrl"
            className={cn({ 'wrong-input': hasError('imgUrl') })}
            onChange={event => this.handleChange(event)}
            onBlur={event => this.handleBlur(event.target)}
            value={imgUrl}
            placeholder="paste the link to poster"
          />
          {hasError('imgUrl')
            && <span className="error">{this.state.errors.imgUrl}</span>}
        </label>
        <label className="labelName">
          <span className="label__title">
            IMDB link:
          </span>
          <input
            type="text"
            name="imdbUrl"
            className={cn({ 'wrong-input': hasError('imdbUrl') })}
            onChange={event => this.handleChange(event)}
            onBlur={event => this.handleBlur(event.target)}
            value={imdbUrl}
            placeholder="paste the link to IMDB"
          />
          {hasError('imdbUrl')
            && <span className="error">{this.state.errors.imdbUrl}</span>}
        </label>
        <label className="labelName">
          <span className="label__title">
            IMDB ID:
          </span>
          <input
            type="textarea"
            name="imdbId"
            className={cn({ 'wrong-input': hasError('imdbId') })}
            onChange={event => this.handleChange(event)}
            onBlur={event => this.handleBlur(event.target)}
            value={imdbId}
            placeholder="paste the IMDB ID"
          />
          {hasError('imdbId')
            && <span className="error">{this.state.errors.imdbId}</span>}
        </label>
        <button
          disabled={!this.isFormValid()}
          type="submit"
          className="form__submit-button"
        >
          Submit
        </button>

        <h2 className="preview-header">
          Preview:
        </h2>

        <MovieCard key={movie.imdbId} {...movie} />
      </form>
    );
  }
}

NewMovie.propTypes = {
  addMovie: PropTypes.func.isRequired,
};
