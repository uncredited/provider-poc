import React, { useContext, useMemo } from 'react'
import { DataContext } from './DataProvider'

export default function Edit(props) {
    const { wager, setWager } = useContext(DataContext);

    function handleExaminedChange(e) {
        const boolVal = !!parseInt(e.target.value, 10)
        setWager({ ...wager, examined: boolVal })
    }

    return useMemo(() => {
        console.log('EDIT RENDER')
        return (
        <select onChange={handleExaminedChange}>
            <option value={0}>false</option>
            <option value={1}>true</option>
        </select>
    // eslint-disable-next-line react-hooks/exhaustive-deps
    )}, [])
}
