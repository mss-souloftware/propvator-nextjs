import Link from "next/link";

export default function Menus() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 md:grid-cols-4 text-white mb-10 md:w-5/6 w-full mx-auto">
      <div className="col-span-2">
        <h5 className="font-bold mb-4">Learn and Participate</h5>
        <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
          <li>
            <Link href="#" className="flex items-center">
              Favorite Firms
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Prop Firm Lists
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              How it Works
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Loyalty Program
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Affiliate Program
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="flex items-center">
              Suggestions
            </Link>
          </li>
        </ul>
      </div>

      <div className="col-span-2">
        <h5 className="font-bold mb-4">Social</h5>
        <ul className="p-0 m-0 text-sm text-[#A8A8A8] leading-10">
          <li>
            <Link className="flex items-center" target="_blank" href="https://linktw.in/HhMIcH">
              <svg
                className="mr-2"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
                fill="#fff"
              >
                <path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z" />
              </svg>
              X.com
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://linktw.in/BBQHNW" className="flex items-center">
              <svg
                className="mr-2"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
                fill="#fff"
              >
                <path d="M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z" />
              </svg>
              Instagram
            </Link>
          </li>
          <li>
            <Link target="_blank" href="https://linktw.in/LGmuMx" className="flex items-center">
              <svg
                className="mr-2"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
                fill="#fff"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z" />
              </svg>
              YouTube
            </Link>
          </li>
          <li>
            <Link target="_blank"
              className="flex items-center"
              href="https://open.spotify.com/show/1uoJGqTgLdDwi3yRp9mHqT?si=a018aeeda5014ff5"
            >
              <svg
                className="mr-2"
                viewBox="0 0 50 50"
                width="25px"
                height="25px"
                fill="#fff"
              >
                <path d="M25.009,1.982C12.322,1.982,2,12.304,2,24.991S12.322,48,25.009,48s23.009-10.321,23.009-23.009S37.696,1.982,25.009,1.982z M34.748,35.333c-0.289,0.434-0.765,0.668-1.25,0.668c-0.286,0-0.575-0.081-0.831-0.252C30.194,34.1,26,33,22.5,33.001 c-3.714,0.002-6.498,0.914-6.526,0.923c-0.784,0.266-1.635-0.162-1.897-0.948s0.163-1.636,0.949-1.897 c0.132-0.044,3.279-1.075,7.474-1.077C26,30,30.868,30.944,34.332,33.253C35.022,33.713,35.208,34.644,34.748,35.333z M37.74,29.193 c-0.325,0.522-0.886,0.809-1.459,0.809c-0.31,0-0.624-0.083-0.906-0.26c-4.484-2.794-9.092-3.385-13.062-3.35 c-4.482,0.04-8.066,0.895-8.127,0.913c-0.907,0.258-1.861-0.272-2.12-1.183c-0.259-0.913,0.272-1.862,1.184-2.12 c0.277-0.079,3.854-0.959,8.751-1c4.465-0.037,10.029,0.61,15.191,3.826C37.995,27.328,38.242,28.388,37.74,29.193z M40.725,22.013 C40.352,22.647,39.684,23,38.998,23c-0.344,0-0.692-0.089-1.011-0.275c-5.226-3.068-11.58-3.719-15.99-3.725 c-0.021,0-0.042,0-0.063,0c-5.333,0-9.44,0.938-9.481,0.948c-1.078,0.247-2.151-0.419-2.401-1.495 c-0.25-1.075,0.417-2.149,1.492-2.4C11.729,16.01,16.117,15,21.934,15c0.023,0,0.046,0,0.069,0 c4.905,0.007,12.011,0.753,18.01,4.275C40.965,19.835,41.284,21.061,40.725,22.013z" />
              </svg>
              Spotify
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
