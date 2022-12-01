import {createContext, useState} from 'react'

export const PageContext = createContext()

export function PageContextProvider(props) {
    const [namePage, setNamePage] = useState('home')

    function updatePage(name){
        setNamePage(name)
    }

    return (
        <PageContext.Provider value={{
            namePage,
            updatePage,
        }}>
            {props.children}
        </PageContext.Provider>
    )
}