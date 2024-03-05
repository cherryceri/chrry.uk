import * as cmp from '../components/components.js';

const Home = () => {
    return (
        <div className="App bg-gradient-to-br from-neutral to-darker bg-cover background-animate">
            <cmp.Navbar />

            <div className="flex container flex-col h-screen relative pt-48 mx-auto items-center">
                <img className="w-20 relative brightness-75 animate-pulse" src="/logo.png"></img>

                <cmp.Title text="cherry" />

                <p className="tracking-widest text-secondary animate-pulse">Under Construction</p>

                <cmp.Divider />

                <div className="flex container flex-row items-center justify-center text-neutral text-3xl space-x-0.5 mt-1.5">
                    <cmp.IconButton icon="play-box" title="YouTube" link="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" />
                    <cmp.IconButton icon="alpha-x-box" title="X" link="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" />
                    <cmp.IconButton icon="code-braces-box" title="GitHub" link="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" />
                    <cmp.IconButton icon="earth-box" title="AMP Panel" link="https://amp.chrry.uk" />
                </div>
            </div>
        </div >
    )
}

export default Home;