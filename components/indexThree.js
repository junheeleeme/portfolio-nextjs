import * as THREE from 'three'
import { useRef, useEffect, useState } from 'react'
import { Center } from '@chakra-ui/react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { throttle } from 'lodash'


const IndexThree = () => {

    const target = useRef(null);
    const width = window.innerWidth;
    const height = window.innerHeight;

    const [_width, setWidth] = useState( width > 1200 ? 1170 : (width-30) );
    const [_height, setHeight] = useState( width > 1200 ? 700 : (width/5*4) );
    const [maxD, setMaxD] = useState( width > 1200 ? 4 : 4);
    

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(80, _width/_height , 0.1, 1000);
    camera.position.x = 3;
    camera.position.y = 3;
    camera.position.z = 3;
    
    
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor(0x000000, 0); //투명배경
    renderer.setSize( _width, _height );
    
    const loader = new GLTFLoader();
    const light1 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
    const light2 = new THREE.DirectionalLight( 0xFFFFFF, 5 );
    light1.position.set(3, 3, 3); //광원 위치 설정
    light2.position.set(-3,-3, -3); //광원 위치 설정
    light1.castShadow = true;
    light2.castShadow = true;
    scene.add(light1); //light 추가
    scene.add(light2); //light 추가

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enabled = true;
    controls.enableDamping = true;
    controls.minAzimuthAngle = 0;
    controls.maxDistance = maxD;
    controls.minDistance = maxD;
    
    useEffect(async()=> {

        window.addEventListener('resize', handleResize);
        
        target.current.appendChild( renderer.domElement );

        loader.load( '/title.gltf', (gltf)=>{ //3d File Loader

            scene.add(gltf.scene); 
            
            const animate = () => {
                requestAnimationFrame( animate );
                controls.autoRotate = true;
                controls.update();
                renderer.render(scene, camera);
    
            }
            animate();
        }, undefined, function ( error ) {
            console.error( error );
        } );

        return () => {
            window.removeEventListener('resize', handleResize);
            target.current.removeChild( renderer.domElement);
        }

    }, []);

    const handleResize = throttle(() => {  //<-- 디바운스 적용
        const width = window.innerWidth;
        setWidth( width > 1200 ? 1170 : (width-30) );
        setHeight( width > 1200 ? 700 : (width/5*4) );
        setMaxD( width > 1200 ? 4 : 4);
        
        if(width < 1200){
            renderer.setSize( width-30, height/5*3 );
            controls.maxDistance = 4;
            controls.minDistance = 4;
            controls.update();
        }else{
            renderer.setSize( 1170, 700 );
            controls.maxDistance =4;
            controls.minDistance = 4;
            controls.update();
        }
    }, 500);


    return(
        <>             
            <Center ref={target}>
                
            </Center>
            <button>123</button>
        </>
    )
}

export default IndexThree