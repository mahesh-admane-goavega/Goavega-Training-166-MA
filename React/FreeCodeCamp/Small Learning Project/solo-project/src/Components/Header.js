import React from "react";

export default function Header() {
  return (
    <div className="card">
      <img className="profile" src="./profile.jpg" alt="profile-image" />
      <h3>Full Name</h3>
      <h5>Developer</h5>
      <p>www.example@mail.com</p>
      <div className="btns">
        <button>Email</button>
        <button>LinkedIn</button>
      </div>
      <h5>About us</h5>
      <p>
        As a Lead Front End Engineer, one of my main tasks was to mentor
        coworkers of my team, contributing to their personal and professional
        growth. I worked very close to stakeholders to define, organise and
        breakdown new projects.
      </p>

      <h5>Interest</h5>
      <p>
        One of the biggest challenges I faced with my team was to migrate the
        ulabox.com website to a new business model while refactoring the entire
        technology stack to Next.js and React. We had to integrate this pivot
        into the Ulabox application too. I've worked with the logistics team to
        build Android applications with React-Native for our supply chain and
        dark stores.
      </p>
    </div>
  );
}
