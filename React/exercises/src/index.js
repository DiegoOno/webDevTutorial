import React from 'react'
import ReactDOM from 'react-dom'
//import Greeting from './components/Greeting'
// import First from './components/FirstComponent'
// import GoodMorning from './components/GoodMorning'
// import { GoodAfternoon, GoodNight } from './components/MultiplesComponents'
import Father from './components/Father'
import Son from './components/Son'


// const elements = []
// elements.push(<First />)
// elements.push(<GoodMorning name={'Diego'}/>)
// elements.push(<GoodAfternoon name={'Diego'}/>)
// elements.push(<GoodNight name={'Diego'}/>)

// ReactDOM.render(
//     <div>
//         <Greeting type="Good Morning" name="Joseph"/>
//     </div>,
//     document.getElementById('root'))

ReactDOM.render(
    <div>
        <Father name="Joseph" lastName="Joestar">
            <Son name="Holy" lastName="Kujo" />
            <Son name="Josuke" lastName="Higashikata" />
        </Father>
    </div>,
document.getElementById('root'))