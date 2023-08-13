import { useThree, extend, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { OrbitControls } from '@react-three/drei'
import StrawberryShortCake from "./StrawberryShortCake.jsx"

export default function App ()
{
    const testRef = useRef()
    console.log(testRef);

    useFrame((state, delta) => 
    {
        testRef.current.rotation.y += delta*0.4
    })
    return <>
        <OrbitControls makeDefault />   

        <directionalLight castShadow position={ [ 1, 3, 2 ] } intensity={ 0.8 } shadow-normalBias={ 0.04}/>
        <ambientLight intensity={ 0.45 } />    

        <group ref={ testRef }>
            <StrawberryShortCake receiveShadow position-y={ 0.4 } scale={ 2.5 }/>
        </group>
    </>
}