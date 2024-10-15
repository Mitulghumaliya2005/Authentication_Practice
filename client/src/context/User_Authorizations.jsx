import { createContext, useState } from "react";

export const Usercontext = createContext()

export const Usercontextprovider = (props) => {

    const h = "Hello";

    const [isUser, setUser] = useState()

    return (
        <Usercontext.Provider value={{ name: "mitul", h, isUser, setUser }}>
            {
                props.children
            }
        </Usercontext.Provider>
    )

}