
import React from 'react'
import { createRoot } from 'react-dom/client'

//import App from './App.jsx'



/*function MyApp() {
    return (
        <div>
            <h1>Hi Rahul!!</h1>
            <p>How are you?</p>
        </div>
       
        
    
    );

}
    */

const anotheruser = "Rahul"

//created by ourselves

/*const ReactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me'
};
*/


//creatiung by react
const ReactElement  = React.createElement(
    'a',
    {
        href: 'https://google.com',
        target: '_blank'
    },
    'Click me',
    anotheruser
)


//create element joo he vo react element me convert ho jata he


/*const anotherElement=(
    <a href="https://www.google.com" target='_blank'>Google</a>
)
    */

createRoot(document.getElementById('root')).render(
  
    
    ReactElement
    

 
)
