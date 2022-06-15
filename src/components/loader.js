import {react, useEffect} from 'react'
import ReactTypingEffect from 'react-typing-effect';
// const anime = require('animejs');
import anime from 'animejs/lib/anime.es.js';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loader() {
    const animate = () => {
        const loader = anime.timeline({
            complete: () => console.log("Completed"),
        })

        loader.add({
            targets: '#tag',
            translateY: 100,
            opacity: 1,
            delay: 300,
            duration: 1000,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#load',
            // translateY: 100,
            opacity: 1,
            delay: 2200,
            duration: 1000,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#tag',
            translateY: -100,
            opacity: 0,
            delay: 300,
            duration: 500,
            easing: 'easeInOutQuad'
        })
    }

    useEffect(() => {
        animate();
        
    }, [])

    return (
        <div className="absolute inset-0 min-w-screen min-h-screen" id="main">
            <div className="opacity-0 text-left pl-4 pt-12 md:pl-48 md:pt-40 2xl:pl-96 2xl:pt-64" id="tag">
                <CircularProgress color="secondary" id="load" className="opacity-0"/>
                <ReactTypingEffect
                    id="tag"
                    className="pl-5 l:text-5xl text-xl text-purple-500"
                    text={"npm start"}
                    staticText={"C:\\PrathikM\\>"}
                    typingDelay={1700}
                    speed={100}
                    displayTextRenderer={(text, i) => <code>{text}</code>}
                />
                
            </div>
        </div>
    )
}