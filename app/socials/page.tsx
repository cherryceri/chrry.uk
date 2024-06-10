import Link from 'next/link'
import '../globals.css'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
      <div className="mb-8 w-[333px] md:w-[666px] relative">
        <div className="text-6xl w-4 h-16 right-[2.75rem] md:right-[8.85rem] top-[6rem] md:top-[9.85rem] z-5 absolute mt-[-3rem] mb-[-1rem] animated-droplet cursor-default">.</div>

        <Link className="group fixed top-4 left-5 md:left-10 md:top-8 tracking-widest" href="/">
          <h2 className="mb-3 text-4xl font-semibold transition-transform group-hover:translate-x-[-0.5rem]">
            <span className="inline-block transform scale-x-[-1] transition-transform">
              -&gt;
            </span>
          </h2>
        </Link>
        <div className="z-10 w-auto text-center justify-between font-nunito text-[80px] md:text-[128px] font-bold tracking-[0.15em]">
          <h1 className="top-0 animated-title cursor-default z-10">cherry</h1>
        </div>

        <p className="relative mb-16 flex backdrop-blur-2xl w-fit m-auto rounded-xl border-solid border-2 bg-base3 border-base4 py-4 px-6">
          <code className="pl-1 font-mono font-bold typewriter tw20">app/chrry.uk/socials</code>
        </p>


        <div className="relative mb-16 flex backdrop-blur-2xl w-fill m-auto rounded-xl border-solid border-2 bg-base3 border-base4 pt-2 pb-4 px-6">
          <div className="bio pl-1 font-nunito text-lg tracking-wide">
            <span className="one">these are my personal & hobby links.</span>
            <span className="two">they do not at all represent me professionally.</span>
            <span className="three">visit at your own risk.</span>
          </div>
        </div>

        <div className="mb-32 grid gap-4 lg:gap-y-8 text-center md:mb-0 md:w-half md:max-w-4xl md:grid-cols-2 md:text-left">
          <a
            href="https://www.youtube.com/channel/UCFdFRJM_tyKdw3TdBRqi9vw"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Youtube
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-40%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
            </svg>
          </a>
          <a
            href="https://www.twitch.tv/cherikaeru"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Twitch
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-40%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M 5.3125 1 L 2 9.8125 L 2 43 L 13 43 L 13 49 L 20.40625 49 L 26.40625 43 L 35.40625 43 L 48 30.4375 L 48 1 Z M 11 6 L 43 6 L 43 28 L 37 34 L 25 34 L 19 40 L 19 34 L 11 34 Z M 20 13 L 20 27 L 26 27 L 26 13 Z M 30 13 L 30 27 L 36 27 L 36 13 Z"></path>
            </svg>
          </a>

          <a
            href="https://www.allaboutbirds.org/news/"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors  bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Twitter
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-25%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
          </a>

          <a
            href="https://www.vlr.gg/player/29649/cherry"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              VLR
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-40%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M4.781 6.375C4.515 6.044 4.067 5.916 3.669 6.057 3.268 6.197 3 6.575 3 7v18c0 .232.081.457.228.636l14 17C17.418 42.866 17.701 43 18 43h14c.384 0 .735-.221.901-.566.167-.347.12-.758-.121-1.059L4.781 6.375zM46.336 7.059c-.396-.146-.842-.02-1.11.309l-18 22c-.245.299-.295.712-.13 1.062C27.262 30.777 27.614 31 28 31h14c.304 0 .591-.138.781-.375l4-5C46.923 25.447 47 25.228 47 25V8C47 7.577 46.734 7.2 46.336 7.059z"></path>            </svg>
          </a>

          <a
            href="https://www.thespike.gg/player/cherry/52889"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              Spike
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-40%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M4.781 6.375C4.515 6.044 4.067 5.916 3.669 6.057 3.268 6.197 3 6.575 3 7v18c0 .232.081.457.228.636l14 17C17.418 42.866 17.701 43 18 43h14c.384 0 .735-.221.901-.566.167-.347.12-.758-.121-1.059L4.781 6.375zM46.336 7.059c-.396-.146-.842-.02-1.11.309l-18 22c-.245.299-.295.712-.13 1.062C27.262 30.777 27.614 31 28 31h14c.304 0 .591-.138.781-.375l4-5C46.923 25.447 47 25.228 47 25V8C47 7.577 46.734 7.2 46.336 7.059z"></path>            </svg>
          </a>

          <a
            href="https://sod.warcraftlogs.com/character/eu/lone-wolf/oober"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl font-semibold">
              WarcraftLogs
            </h2>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-40%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M 25 2 C 20.793 2 16.851455 3.1305957 13.458984 5.1035156 C 12.974346 5.3853613 12.500438 5.684625 12.039062 6 L 6 6 L 6 12.039062 C 3.477 15.730063 2 20.192 2 25 C 2 29.808 3.477 34.269937 6 37.960938 L 6 44 L 12.039062 44 C 15.730063 46.523 20.192 48 25 48 C 29.808 48 34.269937 46.523 37.960938 44 L 44 44 L 44 37.960938 C 44.315375 37.499562 44.614639 37.025654 44.896484 36.541016 C 46.869404 33.148545 48 29.207 48 25 C 48 24.399 47.976955 23.804201 47.931641 23.214844 C 47.614439 19.089342 46.207625 15.268688 44 12.039062 L 44 6 L 37.960938 6 C 34.269938 3.477 29.808 2 25 2 z M 10.998047 14.958984 L 18.699219 14.958984 C 18.349219 15.841984 18.466219 17.609187 18.699219 18.492188 L 21.265625 26.324219 L 25 16.726562 L 28.732422 26.324219 L 31.300781 18.492188 C 31.533781 17.609188 31.650781 15.841984 31.300781 14.958984 L 39 14.958984 C 38.176 15.965984 37.583953 17.104453 37.251953 18.314453 L 34.099609 32.507812 C 33.866609 33.390813 33.982031 35.156062 34.332031 36.039062 L 26.865234 36.039062 C 26.865234 36.039062 27.006234 35.465438 26.865234 34.273438 C 26.725234 33.071438 25 28.091797 25 28.091797 C 25 28.091797 23.273813 33.072437 23.132812 34.273438 C 22.991813 35.465438 23.132812 36.039063 23.132812 36.039062 L 15.666016 36.039062 C 16.016016 35.156062 16.132438 33.388859 15.898438 32.505859 L 12.748047 18.314453 C 12.416047 17.104453 11.822047 15.965984 10.998047 14.958984 z"></path>
            </svg>
          </a>
        </div>
      </div >
    </main >
  );
}
