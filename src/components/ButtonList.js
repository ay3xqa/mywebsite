import React from 'react';
import {Button} from './Button'
import './Button.css'
import './ButtonList'

export default function buttonList({buttons}) {
  return (
    buttons.map(butt =>{
        console.log(butt)
        return (
            <div className='job3'>
                <Button buttonStyle={butt.bStyle} buttonSize = {butt.bSize}><span>{butt.name}</span></Button>
            </div>
        )
    })
  )
}

/* <div  className='job3'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--job'>Leidos</Button>
                    </div>
                    <div className='job3'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--job'><span>Storage Scholars</span></Button>
                    </div>
                    <div className='job3'>
                    <Button buttonStyle='btn--outline' buttonSize='btn--job'><span className='jobItem'>Leidos</span></Button>
                    </div> */
              