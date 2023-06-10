import { useState } from 'react'
import './App.css'
import React from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center'>
        <a href="https://react.dev" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" className="iconify iconify--logos" width="35.93" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 256 228"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621c6.238-30.281 2.16-54.676-11.769-62.708c-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848a155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233C50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165a167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266c13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923a168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586c13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488c29.348-9.723 48.443-25.443 48.443-41.52c0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.4.463-2.836.91-4.3 1.345c-3.24-10.257-7.612-21.163-12.963-32.432c5.106-11 9.31-21.767 12.459-31.957c2.619.758 5.16 1.557 7.61 2.4c23.69 8.156 38.14 20.213 38.14 29.504c0 9.896-15.606 22.743-40.946 31.14Zm-10.514 20.834c2.562 12.94 2.927 24.64 1.23 33.787c-1.524 8.219-4.59 13.698-8.382 15.893c-8.067 4.67-25.32-1.4-43.927-17.412a156.726 156.726 0 0 1-6.437-5.87c7.214-7.889 14.423-17.06 21.459-27.246c12.376-1.098 24.068-2.894 34.671-5.345a134.17 134.17 0 0 1 1.386 6.193ZM87.276 214.515c-7.882 2.783-14.16 2.863-17.955.675c-8.075-4.657-11.432-22.636-6.853-46.752a156.923 156.923 0 0 1 1.869-8.499c10.486 2.32 22.093 3.988 34.498 4.994c7.084 9.967 14.501 19.128 21.976 27.15a134.668 134.668 0 0 1-4.877 4.492c-9.933 8.682-19.886 14.842-28.658 17.94ZM50.35 144.747c-12.483-4.267-22.792-9.812-29.858-15.863c-6.35-5.437-9.555-10.836-9.555-15.216c0-9.322 13.897-21.212 37.076-29.293c2.813-.98 5.757-1.905 8.812-2.773c3.204 10.42 7.406 21.315 12.477 32.332c-5.137 11.18-9.399 22.249-12.634 32.792a134.718 134.718 0 0 1-6.318-1.979Zm12.378-84.26c-4.811-24.587-1.616-43.134 6.425-47.789c8.564-4.958 27.502 2.111 47.463 19.835a144.318 144.318 0 0 1 3.841 3.545c-7.438 7.987-14.787 17.08-21.808 26.988c-12.04 1.116-23.565 2.908-34.161 5.309a160.342 160.342 0 0 1-1.76-7.887Zm110.427 27.268a347.8 347.8 0 0 0-7.785-12.803c8.168 1.033 15.994 2.404 23.343 4.08c-2.206 7.072-4.956 14.465-8.193 22.045a381.151 381.151 0 0 0-7.365-13.322Zm-45.032-43.861c5.044 5.465 10.096 11.566 15.065 18.186a322.04 322.04 0 0 0-30.257-.006c4.974-6.559 10.069-12.652 15.192-18.18ZM82.802 87.83a323.167 323.167 0 0 0-7.227 13.238c-3.184-7.553-5.909-14.98-8.134-22.152c7.304-1.634 15.093-2.97 23.209-3.984a321.524 321.524 0 0 0-7.848 12.897Zm8.081 65.352c-8.385-.936-16.291-2.203-23.593-3.793c2.26-7.3 5.045-14.885 8.298-22.6a321.187 321.187 0 0 0 7.257 13.246c2.594 4.48 5.28 8.868 8.038 13.147Zm37.542 31.03c-5.184-5.592-10.354-11.779-15.403-18.433c4.902.192 9.899.29 14.978.29c5.218 0 10.376-.117 15.453-.343c-4.985 6.774-10.018 12.97-15.028 18.486Zm52.198-57.817c3.422 7.8 6.306 15.345 8.596 22.52c-7.422 1.694-15.436 3.058-23.88 4.071a382.417 382.417 0 0 0 7.859-13.026a347.403 347.403 0 0 0 7.425-13.565Zm-16.898 8.101a358.557 358.557 0 0 1-12.281 19.815a329.4 329.4 0 0 1-23.444.823c-7.967 0-15.716-.248-23.178-.732a310.202 310.202 0 0 1-12.513-19.846h.001a307.41 307.41 0 0 1-10.923-20.627a310.278 310.278 0 0 1 10.89-20.637l-.001.001a307.318 307.318 0 0 1 12.413-19.761c7.613-.576 15.42-.876 23.31-.876H128c7.926 0 15.743.303 23.354.883a329.357 329.357 0 0 1 12.335 19.695a358.489 358.489 0 0 1 11.036 20.54a329.472 329.472 0 0 1-11 20.722Zm22.56-122.124c8.572 4.944 11.906 24.881 6.52 51.026c-.344 1.668-.73 3.367-1.15 5.09c-10.622-2.452-22.155-4.275-34.23-5.408c-7.034-10.017-14.323-19.124-21.64-27.008a160.789 160.789 0 0 1 5.888-5.4c18.9-16.447 36.564-22.941 44.612-18.3ZM128 90.808c12.625 0 22.86 10.235 22.86 22.86s-10.235 22.86-22.86 22.86s-22.86-10.235-22.86-22.86s10.235-22.86 22.86-22.86Z"></path></svg>
        </a>
        <a href="https://parceljs.org/recipes/react/" target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1068.58691 218.40186" role="img" className="iconify iconify--logos ml-4" width="160" height="160" preserveAspectRatio="xMidYMid meet" fill="currentColor" aria-hidden="true"><path d="M134.10156,41.99756c25.2002,0,42.6001,17.40039,42.6001,42.60059v54.60059c0,25.2002-17.3999,42.60059-42.6001,42.60059H66.90088v76.20117H23.7002V41.99756Zm24,46.80078c0-18.6001-10.80029-29.40039-29.40039-29.40039H42.30029V240.6001h6V164.39893h80.40088c18.6001,0,29.40039-10.7998,29.40039-29.40039ZM128.70117,65.39795c15.00049,0,23.40039,8.40039,23.40039,23.40039v46.2002c0,15.00049-8.3999,23.40039-23.40039,23.40039H48.30029v-93.001Zm-5.3999,75.60107c6.6001,0,10.2002-3.6001,10.2002-10.2002V92.99854c0-6.6001-3.6001-10.2002-10.2002-10.2002H66.90088V140.999Z" transform="translate(-23.7002 -40.79785)"></path><path d="M223.79834,258.00049H179.09766L248.69873,41.99756h50.40039L368.7002,258.00049h-46.501l-14.09961-48.60156H238.19873ZM343.19922,240.6001l-55.5-181.20215H260.09863L203.69824,240.6001h5.7002l15-48.60059H322.7998L337.499,240.6001ZM263.69873,65.39795,226.19824,185.99951H320.999L284.09912,65.39795Zm9.8999,24.00049,22.80029,79.20068h-46.2002Z" transform="translate(-23.7002 -40.79785)"></path><path d="M509.99512,258.00049l-34.7998-80.10107H440.39453v80.10107h-43.2002V41.99756H507.2959c25.2002,0,42.59961,17.40039,42.59961,42.60059v50.70068c0,20.3999-11.39941,35.7002-29.39941,40.80029l36,81.90137Zm18.90039-17.40039-34.7998-79.80127h7.7998c18.60059,0,29.40039-10.7998,29.40039-29.3999V88.79834c0-18.6001-10.7998-29.40039-29.40039-29.40039H415.79492V240.6001h6V160.79883h66L522.5957,240.6001ZM525.2959,131.39893c0,15-8.40039,23.3999-23.40039,23.3999H421.79492V65.39795h80.10059c15,0,23.40039,8.40039,23.40039,23.40039Zm-28.80078,6.2998c6.60059,0,10.2002-3.6001,10.2002-10.2002v-34.5c0-6.6001-3.59961-10.2002-10.2002-10.2002H440.39453v54.90039Z" transform="translate(-23.7002 -40.79785)"></path><path d="M697.49316,91.79834c0-6.6001-3.59961-10.2002-10.2002-10.2002h-46.7998c-6.60059,0-10.2002,3.6001-10.2002,10.2002V208.19971c0,6.59961,3.59961,10.19922,10.2002,10.19922H687.293c6.60059,0,10.2002-3.59961,10.2002-10.19922V181.79932h43.20117V216.6001c0,25.19922-17.40039,42.59961-42.60059,42.59961H629.69238c-25.2002,0-42.59961-17.40039-42.59961-42.59961V83.39844c0-25.20068,17.39941-42.60059,42.59961-42.60059h68.40137c25.2002,0,42.60059,17.3999,42.60059,42.60059v34.80029H697.49316Zm-4.7998-27.6001c15,0,23.40039,8.3999,23.40039,23.3999v13.80029h6V87.59814c0-18.6001-10.7998-29.40039-29.40039-29.40039H635.09277c-18.59961,0-29.40039,10.80029-29.40039,29.40039V212.39893c0,18.60059,10.80078,29.40039,29.40039,29.40039h57.60059c18.60059,0,29.40039-10.7998,29.40039-29.40039V199.19971h-6v13.19922c0,15.001-8.40039,23.40039-23.40039,23.40039H635.09277c-15,0-23.40039-8.39941-23.40039-23.40039V87.59814c0-15,8.40039-23.3999,23.40039-23.3999Z" transform="translate(-23.7002 -40.79785)"></path><path d="M920.38965,41.99756V82.79834H822.28809v44.40039h79.501V167.999h-79.501v49.20068h98.10156v40.80078H779.08789V41.99756ZM901.78906,240.6001v-6H803.68848v-84.001h79.501v-6.00049h-79.501V65.39795h98.10059v-6H797.68848V240.6001Z" transform="translate(-23.7002 -40.79785)"></path><path d="M1001.68555,41.99756V217.19971h90.60156v40.80078H958.48535V41.99756Zm72.001,198.60254v-6H983.08594V59.39795h-6V240.6001Z" transform="translate(-23.7002 -40.79785)"></path></svg>
        </a>
      </div>
      <h1>React + Parcel + TypeScript</h1>
      <div className="card">
        <button className='mb-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-md" >
        Click on the Parcel and React logos to learn more
      </p>
    </>
  )
}

export default App