import React, { useState, useEffect } from 'react';

const Last10WordsDisplay = ({ text }) => {
  const [viewText, setViewText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (text.length > viewText.length) {
        setViewText(text);
      }
    }, 10);

    return () => clearInterval(interval);
  }, [text, viewText]);

  const getLast10Words = (str) => {
    const words = str.trim().split(/\s+/);
    console.log(words)
    return words.slice(-10).join(' ');
  };

  const displayText = getLast10Words(viewText);

  return (
    <p>{displayText}</p>
  );
};

export default Last10WordsDisplay;