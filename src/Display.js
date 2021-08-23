import React, { useContext, useEffect } from 'react'
import { DataContext } from './DataProvider'

export default function Display() {
    const { wager } = useContext(DataContext)

    useEffect(() => {
        console.log('Display render')     
    }, [wager.examined])

    return (
        <h3>
            Examined is currently set to: "{`${wager.examined}`}"
        </h3>
    )
}
