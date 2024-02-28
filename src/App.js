import './App.css';
import * as Components from './components/components.js';

export default function App() {
    return (
        <div className="App bg-gradient-to-tl from-dark to-darker bg-cover background-animate">
            <div className="flex container flex-col h-screen relative bottom-[10vh] justify-center mx-auto items-center">
                <img className="w-20 relative transition-all duration-750" src="/logo.png"></img>
                <Components.title text="cherry" />
                <p className="tracking-widest text-secondary animate-pulse mt-[-2px]">Under Construction</p>
                <div className="w-[100px] h-[2px] bg-tertiary mt-3"></div>
                <div className="flex container flex-row items-center justify-center text-neutral text-3xl space-x-3 mt-1.5">
                    <a href="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" className="hover:brightness-150 transition-all duration-25"><span className="mdi mdi-youtube"></span></a>
                    <a href="https://twitter.com/cerise_cherry" className="hover:brightness-150 transition-all duration-25"><span className="mdi mdi-twitter"></span></a>
                </div>
            </div>
        </div >
    )
}
