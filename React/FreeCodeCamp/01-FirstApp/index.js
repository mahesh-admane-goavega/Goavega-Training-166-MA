/****First Program****/
/*
ReactDOM.render(
  <React.Fragment>
    <h3>Computer Languages</h3>
    <ol>
      <li>C-Language</li>
      <li>C++</li>
      <li>Java</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>React</li>
    </ol>
  </React.Fragment>,

  document.getElementById("root")
);
*/

/*****Why React*******/
/*
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Link
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#">
              Disabled
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

function MainContent() {
  return <h1>Main Content</h1>;
}

ReactDOM.render(
  <div>
    <Navbar />
    <MainContent />
  </div>,

  document.getElementById("root")
);
*/

/******JSX******/

//Vannila Java Script
// const h1 = document.createElement("h1");
// h1.textContent = "Hello Mahesh";
// h1.className = "header";
// document.getElementById("root").append(h1);

//Jsx
// ReactDOM.render(
//   <h1 className="header">Hello Admane</h1>,
//   document.getElementById("root")
// );

/*****Chalange-1******/
/*
Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

// const navBar = (
//   <nav>
//     <h1>My Website</h1>
//     <ul>
//       <li>Pricing</li>
//       <li>About</li>
//       <li>Contact</li>
//     </ul>
//   </nav>
// );

// ReactDOM.render(navBar, document.getElementById("root"));

/****Challage-2******/
/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

// const website = (
//   <div>
//     <h1>Google.com</h1>
//     <p>You can serach anything here you will get result</p>
//     <input type="text" placeholder="serach anything here..." />
//     <button>Search</button>
//   </div>
// );
// document.getElementById("root").append(JSON.stringify(website));

/******Challange-3*******/
/*
Challenge: fix our code! Which is used in challange 2
Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.
 */
// const website = (
//   <div>
//     <h1>Google.com</h1>
//     <p>You can serach anything here you will get result</p>
//     <input type="text" placeholder="serach anything here..." />
//     <button>Search</button>
//   </div>
// );

// ReactDOM.render(website, document.getElementById("root"));

/*******Challage-4 Project-MarkUp******* */
/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

// function Mypage() {
//   return (
//     <div>
//       <img src="./react-logo.png" width="40px"></img>
//       <h1>Fun facts about React</h1>
//       <ul>
//         <li>Was first released in 2013</li>
//         <li>Was originally created by Jordan Walke</li>
//         <li>Has well over 100K stars on GitHub</li>
//         <li>Is maintained by Facebook</li>
//         <li>Powers thousands of enterprise apps, including mobile apps</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<Mypage />, document.getElementById("root"));

/**********Challange-5(Custom-Components)**************/
/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

// function Page() {
//   return (
//     <div>
//       <h1>Why React?</h1>
//       <ul>
//         <li>Using React we can make UI</li>
//         <li>Nowadays highly used react</li>
//         <li>Best framework of JavaScript</li>
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<Page />, document.getElementById("root"));

/***********Challange-6(Custom-Components)*************/
/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Header() {
  return (
    <nav className="nav">
      <img className="nav-logo" src="./react-logo.png" alt="react-logo" />
      <h2>www.learnreact.com</h2>
      <ul className="nav-items">
        <li>Home</li>
        <li>Courses</li>
        <li>About</li>
      </ul>
    </nav>
  );
}

function Body() {
  return (
    <div className="body-ele">
      <h4>What is React used for?</h4>
      <p>
        It's used for building interactive user interfaces and web applications
        quickly and efficiently with significantly less code than you would with
        vanilla JavaScript. In React, you develop your applications by creating
        reusable components that you can think of as independent Lego blocks
      </p>
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <small>&#169; 2023 All rights reserved.</small>
    </footer>
  );
}

ReactDOM.render(
  <React.Fragment>
    <Header />
    <Body />
    <Footer />
  </React.Fragment>,
  document.getElementById("root")
);
