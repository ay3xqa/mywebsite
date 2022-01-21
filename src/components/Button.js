import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';
import Pdf from '../components/AlexYuResume.pdf'

const STYLES = ['btn--primary', 'btn--outline', 'btn--test', 'btn--resume'];

const SIZES = ['btn--medium', 'btn--large', 'btn--job', 'btn--active'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  activated
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  if(checkButtonStyle === 'btn--trying'){
    return(
    <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick()}
        type={type}
      >
        {children}
      </button>
    )
  }
  if(checkButtonStyle === 'btn--resume'){

    
        return (

          <a href={Pdf} target="_blank">
          <button 
            className={`btn ${checkButtonStyle} ${checkButtonSize}`}
            type={type}
          >
            {children}
          </button>
          </a>
        )
  }
  if(checkButtonStyle === 'btn--outline'){
    return(
    <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    )
  }
  return (
    <Link to='/' className='btn-mobile'>
      <button 
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};