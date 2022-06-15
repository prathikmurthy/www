import {react, useEffect} from 'react'
import ReactTypingEffect from 'react-typing-effect';
// const anime = require('animejs');
import anime from 'animejs/lib/anime.es.js';

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
            targets: '#tag',
            translateY: -100,
            opacity: 0,
            delay: 3200,
            duration: 1000,
            easing: 'easeInOutQuad'
        })
        // loader.add({
        //     targets: '#main',
        //     zIndex: -1,
        //     opacity: 0,
        //     delay: 0,
        //     duration: 1000,
        //     easing: 'easeInOutQuad'
        // })
    }

    useEffect(() => {
        animate();
        
    }, [])

    return (
        <div className="absolute inset-0 min-w-screen min-h-screen" id="main">
            <div className="opacity-0 text-left pl-36" id="tag">
                <ReactTypingEffect
                    id="tag"
                    className="text-5xl text-purple-500"
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