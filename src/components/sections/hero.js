import { react, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export default function Hero() {

    const animate = () => {
        const loader = anime.timeline({
            complete: () => document.body.style.overflow = "visible"
        })

        loader.add({
            targets: '#one',
            translateY: -50,
            opacity: 1,
            delay: 5500,
            duration: 200,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#two',
            translateY: -50,
            opacity: 1,
            delay: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#three',
            translateY: -50,
            opacity: 1,
            delay: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#four',
            translateY: -50,
            opacity: 1,
            delay: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })
        loader.add({
            targets: '#five',
            translateY: -50,
            opacity: 1,
            delay: 0,
            duration: 200,
            easing: 'easeInOutQuad'
        })
    }

    useEffect(() => {
        animate();
        
    }, [])
    
    return (
        <div class="min-h-screen " >

            <p class="text-xl text-purple-500 max-w-md opacity-0" id="one">Hi! My name is</p>
            <h1 class="text-7xl text-slate-300 font-bold pb-10 pt-5 opacity-0" id="two">Prathik Murthy 👋</h1>
            <p class="text-xl text-slate-400 max-w-md opacity-0" id="three">I'm a Computer Science major at the University of Michigan
            with a passion for software development and engineering.</p>
            <br/>
            <p class="text-xl text-slate-400 max-w-md opacity-0" id="four">I'm currently working with <a className="text-purple-500" href="https://www.steelcase.com/" target="_blank">Steelcase</a> as a Web Developer creating responsive, scaleable web pages and tools.</p>
            <br/>
            <p class="text-xl text-slate-400 max-w-md opacity-0" id="five">You can check out some of my work on my <a className="text-purple-500" href='https://github.com/prathikmurthy' target='_blank'>Github</a> or <a className="text-purple-500" href='https://www.linkedin.com/in/prathikmurthy/' target='_blank'>LinkedIn</a>.</p>
            <p></p>

        </div>
    )
}