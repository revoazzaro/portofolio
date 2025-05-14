import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="flex flex-col md:flex-row h-screen md:justify-center justify-start w-full items-center md:text-left text-center overflow-x-hidden px-6">
        <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden md:mt-0 mt-20">
          <Image
            src="/revo.jpg"
            alt="Revo"
            width={300}
            height={300}
            className="object-cover w-full h-full object-top"
          />
        </div>
        <div className="md:ml-20 ml-0 mt-6 md:mt-0 px-6">
          <h1 className="md:text-5xl text-3xl font-bold text-[#10B981]">
            Revo Sasta Azzaro
          </h1>
          <p className="md:text-lg text-md md:mt-3 mt-2 break-words whitespace-normal max-w-[650px]">
            Hi, I'm Student and have an interest in Web Development, especially
            Frontend. I'm currently learning React, Next.js, and Tailwind.
          </p>
          <div className="flex space-x-4 md:mt-6 mt-4 justify-center md:justify-start">
            <a
              className="border-2 border-[#10B981] hover:bg-[#10B981] transition-all duration-300 px-5 py-2 rounded-full text-lg"
              href="mailto:revosastaazzaro16@gmail.com"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-4 mt-6 md:justify-start justify-center">
            <a
              href="https://instagram.com/rvoazro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/revoazzaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.386c.6.11.793-.26.793-.578v-2.234c-3.338.727-4.033-1.61-4.033-1.61-.546-1.388-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.24 1.838 1.24 1.07 1.833 2.809 1.303 3.493.996.108-.775.42-1.303.763-1.602-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.467-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.69.8.573A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/revo-sasta-azzaro-5229b12a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4.99V24H.5V8zm7.498 0h4.785v2.224h.07c.668-1.265 2.3-2.6 4.737-2.6 5.066 0 6.003 3.332 6.003 7.66V24h-5v-7.46c0-1.778-.034-4.07-2.482-4.07-2.482 0-2.861 1.94-2.861 3.94V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-screen justify-start pt-28 w-full items-start md:text-left text-center overflow-x-hidden px-40">
        <h1 className="md:text-5xl text-3xl font-bold text-[#10B981]">Project</h1>
        <div className="mt-6 md:mt-0">
          <h1 className="md:text-5xl text-3xl font-bold text-[#10B981]">
            Revo Sasta Azzaro
          </h1>
          <p className="md:text-lg text-md md:mt-3 mt-2 break-words whitespace-normal max-w-[650px]">
            Hi, I'm Student and have an interest in Web Development, especially
            Frontend. I'm currently learning React, Next.js, and Tailwind.
          </p>
          <div className="flex space-x-4 md:mt-6 mt-4 justify-center md:justify-start">
            <a
              className="border-2 border-[#10B981] hover:bg-[#10B981] transition-all duration-300 px-5 py-2 rounded-full text-lg"
              href="mailto:revosastaazzaro16@gmail.com"
            >
              Contact
            </a>
          </div>
          <div className="flex space-x-4 mt-6 md:justify-start justify-center">
            <a
              href="https://instagram.com/rvoazro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
              >
                <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="https://github.com/revoazzaro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.386c.6.11.793-.26.793-.578v-2.234c-3.338.727-4.033-1.61-4.033-1.61-.546-1.388-1.334-1.757-1.334-1.757-1.09-.744.083-.729.083-.729 1.205.085 1.838 1.24 1.838 1.24 1.07 1.833 2.809 1.303 3.493.996.108-.775.42-1.303.763-1.602-2.665-.305-5.467-1.335-5.467-5.933 0-1.31.467-2.382 1.236-3.222-.124-.303-.536-1.523.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 013.003-.404 11.5 11.5 0 013.003.404c2.292-1.553 3.3-1.23 3.3-1.23.653 1.653.241 2.873.118 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.48 5.922.43.372.823 1.102.823 2.222v3.293c0 .319.192.69.8.573A12 12 0 0024 12c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/revo-sasta-azzaro-5229b12a5/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.98 3.5c0 1.38-1.12 2.5-2.5 2.5S0 4.88 0 3.5 1.12 1 2.5 1 5 2.12 5 3.5zM.5 8h4.99V24H.5V8zm7.498 0h4.785v2.224h.07c.668-1.265 2.3-2.6 4.737-2.6 5.066 0 6.003 3.332 6.003 7.66V24h-5v-7.46c0-1.778-.034-4.07-2.482-4.07-2.482 0-2.861 1.94-2.861 3.94V24h-5V8z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      
    </>
  );
}
