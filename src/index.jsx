import App from './App.jsx'
import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'

const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <App/>
        <Canvas>

        </Canvas>
    </>
)