import React from 'react'
import ReactDOM from 'react-dom/client'
import App from 'Container/App/App'
import { BrowserRouter } from 'react-router-dom'

// React Element

// const title = React.createElement('h1', { id: 'title' }, 'Hello React')
// console.log(title)

// JSX

// const app = (
//     <div>
//         <h1 id="text">Hello App</h1>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
//             iste fugit, recusandae consectetur, ratione porro libero magni
//             accusantium minima amet aperiam dolor, aliquam labore odio
//             consequatur sapiente! Soluta, error excepturi.
//         </p>
//     </div>
// )

// для того щоб викликати // React Element і // JSX треба вставити в root.render(<React.StrictMode>{const назва}</React.StrictMode>

// Компоненти

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
