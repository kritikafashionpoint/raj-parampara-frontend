import React from 'react'
import PcHeader from '../headers/PcHeader'
import MobileHeader from '../headers/MobileHeader'

export default function Header() {
  return (
    <header className='sticky top-0 z-999 border-b border-gray-300'>
        <PcHeader/>
        <MobileHeader/>
    </header>
  )
}
