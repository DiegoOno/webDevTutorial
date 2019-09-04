import React from 'react'
import { ChildrenWithProps } from '../utils/utils'

export default props => 
    <div>
        <h1>{props.name} {props.lastName}</h1>
        <h2>Son</h2>
        <ul>
            {ChildrenWithProps(props)}
        </ul>
    </div>