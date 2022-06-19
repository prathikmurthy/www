import { react } from 'react';
import FadeInSection from '../FadeInSection';
import ReactTypingEffect from 'react-typing-effect';

export default function About() {

    return (
        <div class="min-h-screen">
            <FadeInSection>
                <div className="section-header">
                    <span className="text-4xl text-purple-500">{'< about me / >'}</span>
                </div>
            </FadeInSection>
        </div>
    )

}

