import React, { useContext } from 'react'
import { DataContext } from './DataProvider'

export default function Display() {
    console.log('DISPLAY RENDER')  
    const { wager } = useContext(DataContext)

    return (
        <h3>
            Examined is currently set to: "{`${wager.examined}`}"
        </h3>
    )
}
