// eslint-disable-next-line no-unused-vars
import React from "react";

export default function Header() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">
            SM <span className=" text-lime-300">Food</span> Valley
          </a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="/src/Assets/SM RUHUL AMIN.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
