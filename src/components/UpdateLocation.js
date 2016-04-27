import React, { Component, PropTypes } from 'react';

let UpdateLocation = ({ actions }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        actions.fetchWeather(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Update Location
        </button>
      </form>
    </div>
  )
}

UpdateLocation.propTypes = {
  actions: PropTypes.object.isRequired
};

export default UpdateLocation
