import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addItem } from '../store/actions/items';

export class AddItem extends Component {
  state = {
    item: {
      name: '',
    },
  }

  componentDidUpdate(prevProps) {
    const { items } = this.props;
    if (prevProps.items.length !== items.length) {
      this.setState({ item: { name: '' } });
    }
  }

  onChange = (event) => {
    const { value } = event.target;
    this.setState(prevState => ({ item: { ...prevState.item, name: value } }));
  }

  onSubmit = (event) => {
    const { addItem } = this.props;
    const { item } = this.state;

    event.preventDefault();
    addItem(item);
  }

  render() {
    const { item } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          style={{ width: 'auto', marginRight: '.5rem' }}
          onChange={this.onChange}
          value={item.name}
        />
        <input type="submit" value="ADD ITEM" className="btn -btn flat-btn" />
      </form>
    );
  }
}

export default connect(
  state => ({ items: state.items }),
  dispatch => ({ addItem: item => dispatch(addItem(item)) }),
)(AddItem);
