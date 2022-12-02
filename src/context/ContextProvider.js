import React, {createContext, useContext, useState} from 'react'

const StateContext = createContext()

const initialState = {
    chat:false,
    cart:false,
    userProfile:false,
    notification:false,
}

export const ContextProvider = ({children})=>{
    const [activeMenu, setactiveMenu] = useState(true)
    const [isClicked, setisClicked] = useState(initialState)
    const [currentColor, setcurrentColor] = useState('#03C9D7')
    const [currentMode, setcurrentMode] = useState('Light')
    const [themeSettings, setthemeSettings] = useState(false)
    const setMode = (e) =>{
        console.log(e)
        setcurrentMode(e.target.value)
        localStorage.setItem('themeMode', e.target.value)
        setthemeSettings(false)
    }
    const setColor = (e) =>{
        console.log(e)
        setcurrentColor(e)
        localStorage.setItem('themeColor', e)
        setthemeSettings(false)
    }
    const handleClick = (clicked)=>{
        setisClicked({...initialState, [clicked]:true})
    }
    const [screenSize, setscreenSize] = useState(undefined)
    return (
        <StateContext.Provider
        value={{
            activeMenu:activeMenu,
            setactiveMenu:setactiveMenu,
            isClicked: isClicked,
            setisClicked:setisClicked,
            handleClick:handleClick,
            screenSize: screenSize,
            setscreenSize:setscreenSize,
            currentColor:currentColor,
            currentMode:currentMode,
            setColor:setColor,
            setMode:setMode,
            setThemeSettings:setthemeSettings,
            themeSettings:themeSettings
        }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext (StateContext)