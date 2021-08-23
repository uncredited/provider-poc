import React, { createContext, useState } from 'react';

export const DataContext = createContext()

export default function DataProvider({ children }) {
    const dataContextValue = {
        a: 1,
        b: 2,
        c: 3,
        examined: false
    }
    const [wager, setWager] = useState(dataContextValue);

    return (
        <DataContext.Provider value={{ wager, setWager}}>
            {children}
        </DataContext.Provider>
    )
}
