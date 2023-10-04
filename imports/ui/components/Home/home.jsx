import React from 'react';

function ButtonDemo() {
  const handleButtonClick = (buttonName) => {
    // Implement specific actions for each button here
    switch (buttonName) {
      case 'Button 1':
        alert('Button 1 clicked');
        break;
      case 'Button 2':
        alert('Button 2 clicked');
        break;
      case 'Button 3':
        alert('Button 3 clicked');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <h2>Button Demo</h2>
      <button onClick={() => handleButtonClick('Button 1')}>Button 1</button>
      <button onClick={() => handleButtonClick('Button 2')}>Button 2</button>
      <button onClick={() => handleButtonClick('Button 3')}>Button 3</button>
    </div>
  );
}

export default ButtonDemo;
