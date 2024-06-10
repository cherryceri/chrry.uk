import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-12 lg:p-24">
      <div className="mb-8">
        <div className="z-10 w-auto text-center justify-between font-nunito text-[80px] md:text-[128px] font-bold tracking-wider">
          <h1 className="top-0 animated-title cursor-default">cherry</h1>
        </div>
        <p className="relative mb-[5vh] flex backdrop-blur-2xl w-fit m-auto rounded-xl border-solid border-2 bg-base3 border-base4 py-4 px-6">
          <code className="pl-1 font-mono font-bold typewriter">app/chrry.uk</code>
        </p>

        <div className="relative mb-[5vh] flex backdrop-blur-2xl w-fill m-auto rounded-xl border-solid border-2 bg-base3 border-base4 pt-2 pb-4 px-6">
          <div className="bio pl-1 font-nunito text-lg tracking-wide">
            <span className="one">my name is cherry. 🍒</span>
            <span className="two">i am a 23 year old living in bristol.</span>
            <span className="three">i am a designer, developer, and an ex esports player.</span>
            <span className="four">my favourite colour is <div className="group inline-block rounded-[20px] align-baseline mx-0.5 mb-[-2px] bg-main h-4 w-4 overflow-hidden whitespace-nowrap transition-all duration-200 hover:w-14">
              <div className="relative text-sm top-[-1px] text-center pointer-events-none transition-opacity duration-200 opacity-0 group-hover:opacity-100">cerise</div>
            </div>.</span>
          </div>
        </div>

        <div className="mb-32 grid gap-4 lg:gap-y-8 text-center md:mb-0 md:w-half md:max-w-4xl md:grid-cols-2 md:text-left">
          <Link
            href="/socials"
            className="group overflow-hidden relative border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl relative font-semibold">
              Socials{" "}
              <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              My socials & games that I play.
            </p>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-25%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
            </svg>
          </Link>

          <a
            href="https://github.com/cherryceri"
            className="group relative overflow-hidden border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl relative font-semibold">
              GitHub{" "}
              <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Rarely used admittedly.
            </p>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-25%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </a>

          <a
            href="http://www.linkedin.com/in/cherrydev"
            className="group relative overflow-hidden border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl w-full relative font-semibold">
              LinkedIn{" "}
              <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-sm opacity-50">
              Professional stuff.
            </p>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-25%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
            </svg>
          </a>

          <a
            href="https://amp.chrry.uk/"
            className="group relative overflow-hidden border-2 border-base3 rounded-xl px-5 py-6 transition-colors bg-base hover:bg-base3"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="mb-3 text-2xl relative font-semibold">
              AMP Panel{" "}
              <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
              My dedicated server hosting panel.
            </p>
            <svg className='absolute transition-transform duration-200 group-hover:scale-[1.1] top-[-25%] right-0 opacity-10' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="165" height="165" viewBox="0 0 50 50">
              <path d="M0,24.108v11.783c0,0.974,0.314,1.868,0.835,2.608h58.329C59.686,37.76,60,36.865,60,35.892V24.108 c0-0.974-0.314-1.868-0.835-2.608H0.835C0.314,22.24,0,23.135,0,24.108z M52,30.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1 S51.448,30.5,52,30.5z M50,27.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S49.448,27.5,50,27.5z M48,30.5c0.552,0,1,0.448,1,1 s-0.448,1-1,1s-1-0.448-1-1S47.448,30.5,48,30.5z M46,27.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S45.448,27.5,46,27.5z M44,30.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S43.448,30.5,44,30.5z M42,27.5c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S41.448,27.5,42,27.5z M40,30.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S39.448,30.5,40,30.5z M38,27.5 c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S37.448,27.5,38,27.5z M36,30.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1 S35.448,30.5,36,30.5z M34,27.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S33.448,27.5,34,27.5z M10.5,25.5 c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5S6,32.481,6,30S8.019,25.5,10.5,25.5z"></path> <path d="M59.165,19.5C59.686,18.76,60,17.865,60,16.892V5.108C60,2.567,57.933,0.5,55.392,0.5H4.608C2.067,0.5,0,2.567,0,5.108 v11.783c0,0.974,0.314,1.868,0.835,2.608H59.165z M52,11.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S51.448,11.5,52,11.5z M50,8.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S49.448,8.5,50,8.5z M48,11.5c0.552,0,1,0.448,1,1s-0.448,1-1,1 s-1-0.448-1-1S47.448,11.5,48,11.5z M46,8.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S45.448,8.5,46,8.5z M44,11.5 c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S43.448,11.5,44,11.5z M42,8.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1 S41.448,8.5,42,8.5z M40,11.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S39.448,11.5,40,11.5z M38,8.5c0.552,0,1,0.448,1,1 s-0.448,1-1,1s-1-0.448-1-1S37.448,8.5,38,8.5z M36,11.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S35.448,11.5,36,11.5z M34,8.5c0.552,0,1,0.448,1,1s-0.448,1-1,1s-1-0.448-1-1S33.448,8.5,34,8.5z M10.5,6.5c2.481,0,4.5,2.019,4.5,4.5 s-2.019,4.5-4.5,4.5S6,13.481,6,11S8.019,6.5,10.5,6.5z"></path> <path d="M0.835,40.5C0.314,41.24,0,42.135,0,43.108v11.783C0,57.433,2.067,59.5,4.608,59.5h50.783c2.541,0,4.608-2.067,4.608-4.608 V43.108c0-0.974-0.314-1.868-0.835-2.608H0.835z M10.5,53.5C8.019,53.5,6,51.481,6,49s2.019-4.5,4.5-4.5S15,46.519,15,49 S12.981,53.5,10.5,53.5z M34,48.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S34.552,48.5,34,48.5z M36,51.5 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S36.552,51.5,36,51.5z M38,48.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1 S38.552,48.5,38,48.5z M40,51.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S40.552,51.5,40,51.5z M42,48.5c-0.552,0-1-0.448-1-1 s0.448-1,1-1s1,0.448,1,1S42.552,48.5,42,48.5z M44,51.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S44.552,51.5,44,51.5z M46,48.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S46.552,48.5,46,48.5z M48,51.5c-0.552,0-1-0.448-1-1s0.448-1,1-1 s1,0.448,1,1S48.552,51.5,48,51.5z M50,48.5c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S50.552,48.5,50,48.5z M52,51.5 c-0.552,0-1-0.448-1-1s0.448-1,1-1s1,0.448,1,1S52.552,51.5,52,51.5z"></path>            </svg>
          </a>
        </div>
      </div>
    </main >
  );
}
