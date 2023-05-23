import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

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

type TitleProps = {
    title: string
}

const Title = ({ title }: TitleProps) => {
    return <h1>Hello {title} component</h1>
}

const Content = () => {
    return (
        <React.Fragment>
            <p className="red">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                consequuntur itaque consequatur reiciendis nulla vero officia
                ipsam iusto esse rem, temporibus libero ullam vitae cupiditate
                ipsa quam blanditiis expedita enim?
            </p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                at distinctio, vero officia aliquid iusto eos placeat omnis
                laboriosam incidunt, amet quis et quos earum molestiae
                aspernatur aut labore! Et!
            </p>
        </React.Fragment>
    )
}

const App = () => {
    return (
        <>
            <Title title="App" />
            <Title title="React" />
            <Content />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
