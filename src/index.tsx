import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element

// const title = React.createElement('h1', { id: 'title' }, 'Hello React')
// console.log(title)

// JSX

const app = (
    <div>
        <h1 id="text">Hello App</h1>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
            iste fugit, recusandae consectetur, ratione porro libero magni
            accusantium minima amet aperiam dolor, aliquam labore odio
            consequatur sapiente! Soluta, error excepturi.
        </p>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{app}</React.StrictMode>)
