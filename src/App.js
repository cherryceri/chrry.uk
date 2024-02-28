import './App.css';
import * as Components from './components/components.js';

export default function App() {
    return (
        <div className="App bg-gradient-to-br from-neutral to-darker bg-cover background-animate">
            <div className="flex container flex-col h-screen relative bottom-[10vh] justify-center mx-auto items-center">

                <img className="w-20 relative brightness-75 animate-pulse" src="/logo.png"></img>
                <Components.title text="cherry" />

                <p className="tracking-widest text-secondary animate-pulse mt-[-2px]">Under Construction</p>

                <div className="w-[100px] h-[2px] bg-tertiary mt-3"></div>

                <div className="flex container flex-row items-center justify-center text-neutral text-3xl space-x-0.5 mt-1.5">
                    <a title="YouTube" href="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" className="hover:brightness-200 transition-all duration-15"><span className="mdi mdi-play-box"></span></a>
                    <a title="X" href="https://twitter.com/cerise_cherry" className="hover:brightness-200 transition-all duration-15"><span className="mdi mdi-file-excel-box"></span></a>
                    <a title="GitHub" href="https://github.com/cherryceri" className="hover:brightness-200 transition-all duration-15"><span className="mdi mdi-code-braces-box"></span></a>
                    <a title="AMP Server" href="https://amp.chrry.uk" className="hover:brightness-200 transition-all duration-15"><span className="mdi mdi-earth-box"></span></a>
                </div>
            </div>
        </div >
    )
}
