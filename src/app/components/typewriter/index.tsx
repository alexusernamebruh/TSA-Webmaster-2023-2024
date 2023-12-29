'use client';
import { useState, useEffect } from 'react';
//@ts-ignore
const Typewriter = ({ text, delay, infinite }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [textListIndex, setTextListIndex] = useState(0);

  //   useEffect(() => {
  //     let timeout: any;

  //     if (currentIndex <= text.length) {
  //       timeout = setTimeout(() => {
  //         setCurrentText((prevText) => prevText + text[currentIndex]);
  //         setCurrentIndex((prevIndex) => prevIndex + 1);
  //       }, delay);
  //     } else if (infinite) {
  //       // ADD THIS CHECK
  //       setCurrentIndex(0);
  //       setCurrentText('');
  //     }

  //     return () => clearTimeout(timeout);
  //   }, [currentIndex, delay, infinite, text]);
  console.log(currentText);
  useEffect(() => {
    console.log(textListIndex + ' textListIndex');
    let timeout: any;
    console.log(text.length);
    if (textListIndex === text.length - 1) {
      setCurrentText('');
      setCurrentIndex(0);
      setTextListIndex(0);
    } else {
      if (currentIndex <= text[textListIndex].length) {
        console.log('what');
        timeout = setTimeout(() => {
          setCurrentText(
            (prevText) => prevText + text[textListIndex][currentIndex],
          );
          setCurrentIndex((prevIndex) => prevIndex + 1);
        }, delay);
      } else {
        console.log('running?');
        const currentTextLength = currentText.length;
        for (let i = 0; i < currentTextLength; i++) {
          setTimeout(() => {
            setCurrentText(currentText.slice(0, -1));
          }, 150);
        }
        setCurrentText('');
        setCurrentIndex(0);
        setTextListIndex(textListIndex + 1);
      }
    }
  }, [currentIndex, delay, infinite, text]);

  return <span>{currentText}</span>;
};

export default Typewriter;
