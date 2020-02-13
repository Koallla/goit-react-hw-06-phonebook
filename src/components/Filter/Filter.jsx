import React from 'react';
import T from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ filterDispatch }) => (
  <div>
    <p>Find contacts by name</p>
    <input
      className={styles.input_filter}
      type="text"
      name="filter"
      placeholder="To find contact ..."
      onChange={e => filterDispatch(e.target.value)}
    />
  </div>
);

Filter.propTypes = {
  filterDispatch: T.func.isRequired,
};

export default Filter;
