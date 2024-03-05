import * as cmp from '../components/components.js';

const Home = () => {
    return (
        <div className="App bg-gradient-to-br from-neutral to-darker bg-cover background-animate">
            <cmp.Navbar />

            <div className="flex container flex-col h-screen relative pt-48 mx-auto items-center">
                <img className="w-20 relative brightness-75 animate-pulse" src="/logo.png"></img>

                <cmp.Title text="cherry" />

                <cmp.Divider />

                <cmp.SubTitle text="personal links" />
                <div className="flex container flex-row items-center justify-center text-neutral text-3xl space-x-0.5">
                    <cmp.IconButton icon="play-box" title="YouTube" link="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw" />
                    <cmp.IconButton icon="alpha-x-box" title="X" link="https://twitter.com/cerise_cherry" />
                    <cmp.IconButton icon="code-braces-box" title="GitHub" link="https://github.com/cherryceri" />
                    <cmp.IconButton icon="earth-box" title="AMP Panel" link="https://amp.chrry.uk" />
                    <cmp.IconButton icon="alpha-w-box" title="WoW (i'm bad)" link="https://sod.warcraftlogs.com/character/id/78739921" />
                </div>
            </div>
        </div >
    )
}

export default Home;