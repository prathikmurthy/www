import { react } from 'react';
import JobGrid from '../jobgrid.js'

export default function About() {

    return (
        <div class="min-h-screen">
            <div class="flex flex-col space-y-4 pt-10 divide-y-2 divide-purple-500 mr-64">

                <code class="font-bold text-purple-500 text-2xl pr-5 bb-10 divide-y divide-purple-500">1. Experience</code>
                <p class="text-xl text-slate-400 max-w-md pt-10"></p>
            </div>
            <JobGrid />
        </div>
    )

}

