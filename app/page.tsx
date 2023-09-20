import Image from "next/image";
import meCoding from "../assets/images/me_coding.jpg";
import setup from "../assets/images/setup.jpg";
import natural from "../assets/images/natural.jpg";
import view from "../assets/images/view.jpg";
import profile from "../assets/images/profile.jpg";
import moto from "../assets/images/moto.jpg";
import githubProfile from "../assets/images/github_profile.jpeg";
import linkedinProfile from "../assets/images/linkedin_profile.jpeg";

export default function Page() {
  return (
    <section>
      <h1 className="font-bold text-2xl mb-8 tracking-tighter">
        welcome onboard, this is berkant.
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I write code, have fun with people and make the community happy.
        Currently working as a Software Engineer at{" "}
        <a
          href="https://fireflyon.com"
          target="_blank"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-neutral-100 no-underline"
        >
          <svg
            width="13"
            height="11"
            viewBox="0 0 13 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="inline-flex mr-1"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 0L13 11H0L6.5 0Z"
              fill="currentColor"
            ></path>
          </svg>
          Firefly
        </a>
        , where we build an Ad Server to light up city streets with smart
        screens and smarter data using the latest technologies.
      </p>

      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            className="rounded-lg object-cover"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={meCoding}
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            alt={"me coding"}
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me, Lydia, and Delba filming the Next.js Conf keynote"
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover object-[-16px] sm:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={profile}
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover object-[-16px] sm:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={setup}
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover object-[-16px] sm:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={natural}
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover object-[-16px] sm:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={moto}
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-0">
          <Image
            alt="Me standing on stage at Reactathon delivering the keynote"
            decoding="async"
            data-nimg="fill"
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover object-[-16px] sm:object-center"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              left: 0,
              top: 0,
              right: 0,
              bottom: 0,
              color: "transparent",
            }}
            src={view}
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          I specialize in crafting robust backend applications with a strong
          commitment to <strong>SOLID</strong> principles. My development
          approach consistently adheres to the <strong>Hexagonal</strong> and{" "}
          <strong>Clean Architecture</strong> paradigms, irrespective of the
          programming language in use. Whether working with <strong>Go</strong>,{" "}
          <strong>Python</strong>, or other languages, I consistently deliver
          well-structured and maintainable software solutions that prioritize
          scalability, maintainability, and code quality.
        </p>
      </div>
      <div className="my-8 flex flex-col sm:flex-row space-x-0 sm:space-x-4 space-y-4 sm:space-y-0 w-full">
        <a
          href="https://github.com/berkantay"
          target="_blank"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex items-center space-x-3">
            <div className="relative h-16">
            <Image alt="@berkantay" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16" sizes="33vw" src={githubProfile}/>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                berkantay
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                Github
              </p>
            </div>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/berkantay/"
          target="_blank"
          className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
        >
          <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image alt="@berkantay" loading="lazy" width="64" height="64" decoding="async" data-nimg="1" className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16" sizes="33vw" src={linkedinProfile}/>
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-neutral-900 dark:text-neutral-100">
                Berkant Ay
              </p>
              <p className="text-neutral-600 dark:text-neutral-400">
                LinkedIn
              </p>
            </div>
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </a>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>Over the past 6 years, I've improved my skills on making things look simple. You'll find writing about technologies I'm interested in at the time, or how I'm learning and growing in my career, sharing knowledge along the way.</p>
        </div>
        <h3 className="font-bold text-xl mb-8 tracking-tighter">
        what i have in my backpack
      </h3>
      <h3 className="font-bold text-l mb-8 tracking-tighter">
        languages
      </h3>
        <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Go</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Python</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Flutter | Dart</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div> C </div> 
          </div>
        </div>
        <h3 className="font-bold text-l mb-8 tracking-tighter">
        technologies
      </h3>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>RESTful | gRPC APIs</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>OpenTelemetry</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Grafana</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Prometheus</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Kubernetes</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>GCP | AWS</div> 
          </div>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Kafka</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>ZeroMQ</div> 
          </div>
      </div>
      <h3 className="font-bold text-l mb-8 tracking-tighter">
        databases
      </h3>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Postgres</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>TimescaleDB</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Redis</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>Sqlite</div> 
          </div>
          <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
            <div>MongoDB</div> 
          </div>
      </div>
      <a className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all" rel="noopener noreferrer" target="_blank" href="https://twitter.com/berkantay2"><svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z" fill="currentColor"></path></svg><p className="h-7 ml-2">follow me</p></a>
    </section>
  );
}
