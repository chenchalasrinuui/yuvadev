import { createContext, useContext } from 'react'

const defaultValues = {};

export const appCtx = createContext(defaultValues)

export const useAppContext = () => {
    return useContext(appCtx)
}

export const AppCtxProvider = ({ children, myData }) => {
    return <appCtx.Provider value={myData}>
        {children}
    </appCtx.Provider>

}