import { useDeferredValue } from "react"

function Message(){
    const name = 'Programmer';
    if(name)
        return <h1>This is {name}</h1>
    return <h1>There was no name here</h1>

}

export default Message;