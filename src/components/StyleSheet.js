import React from 'react';
import '../mystyle.css'

function StyleSheet(props) {
    let className = props.primary ? 'primary' : '';
  return (
    <div className={className}>
      StyleSheet
    </div>
  );
}

export default StyleSheet;
