import React from 'react';

function MyButtonComponent() {
  return (
    <button 
        onClick={() => {
        console.log("Button clicked!");
      }}
    >
      Add
    </button>
  );
}

export default MyButtonComponent;