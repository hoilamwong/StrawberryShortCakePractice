import './style.css'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import App from './App.jsx'
import EatenPercentage from "./EatenPercentage.jsx";


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
    <>
        <h1> Nom Nom Nom </h1>
        <h2> I love Strawberry Shortcakes ! </h2>
        <EatenPercentage/>
        <Canvas
            flat
            shadows
            camera={ {
                fov: 45,
                near: 0.1,
                far: 200,
                position: [ - 4, 3, 6 ]
            } }
        >
            <App/>
        </Canvas>
    </>
)