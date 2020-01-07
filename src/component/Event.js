import React, { Component } from 'react';

export const Event = () => (
  <div>
      <form>
          <input type="text" placeholder="Postcode" name="postcode" required></input>
          <input type="text" placeholder="Capacity" name="capacity" required></input>
          <p>If your event is more than one day, please select a day for your event that is available.</p>
          <button>Submit</button>
        </form>
  </div>
)
export default (Event);