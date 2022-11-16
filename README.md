# Twitter Clone

* A Simple full-stack app that displays a list of messages ('tweets') generated on the client side.   

## :page_facing_up: Table of contents

* [:zap: Twitter Clone](#zap-twitter-clone)
	* [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
	* [:books: General info](#books-general-info)
	* [:camera: Screenshots](#camera-screenshots)
	* [:signal_strength: Technologies](#signal_strength-technologies)
	* [:floppy_disk: Setup](#floppy_disk-setup)
	* [:computer: Code Examples](#computer-code-examples)
  * [:cool: Live-Solution](#cool-live-solution)
	* [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
	* [:clap: Inspiration](#clap-inspiration)
	* [:envelope: Contact](#envelope-contact)
  * [:pen: Contributors](#pen-contributors)

## :books: General info

* A simplified Twitter clone using simple front and backends. Dependencies updated aug 2020.

## :camera: Screenshots

![Example screenshot](./img/tweets-frontend.png).

## :signal_strength: Technologies

* [React](https://reactjs.org/) JS Library.
* [python](https://www.python.org/) for backend logic, link to [repo](https://github.com/osadolortech/twitter_clone).
* [Postgresql](https://www.postgresql.org/) used for external database.
* [CSS](https://nodejs.org/en/) for stlying.

## :floppy_disk: Setup

* Backend: Built with python and hosted seperately [link](https://robot-twitter.herokuapp.com/api/v2).
* Frontend: Built with React and you can run command `npm install` and `npm start`. Also Install the following for API calls `Axios`, for ICONS `react-icons` and `react-router-dom@6` for React Router. For styling `CSS` was used.

## :computer: Code Examples

* An inital part of the Widgets component styled with css
```css
.widgets {
    flex: 0.3;
    position: sticky;
    top: 0;
    height: 100%;
}

.widgets-input {
    display: flex;
    align-items: center;
    background-color: var(--twitter-background);
    padding: 10px;
    border-radius: 20px;
    margin-top: 10px;
    margin-left: 20px;
}
```

* `login/LoginForm.js` - A component with functions that handles user details in order to have access to the authorized page. 

```javascript
const LoginForm = ({ setAuthUser, closeLoginModal }) => {
  const [logDetails, setLogDetails] = useState({ username: "", password: "" });
  const [logErr, setLogErr] = useState("");

  const handleChange = (e) => {
    setLogDetails((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axiosInstanceLog.post("login", logDetails);
      localStorage.setItem("logDetails", JSON.stringify(data));
      setAuthUser(true)
    } catch (e) {
      setLogErr("Invalid login details");
      console.log(e);
    
    }
route-adjust
  }; 
=======
  };
  
main
```

* `sideBar/SideBar.js` - A SideBar component returning SideBarOptions with Icons.
```javascript
 route-adjust
const SideBar = () => {

import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaBookmark } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { CgProfile, CgMoreO } from 'react-icons/cg'
import './SideBar.css'
import SideBarOptions from '../sidebarOptions/SideBarOptions';
import { NavLink } from 'react-router-dom';

const SideBar = () => {

 main
  return (
    <div className="sidebar">
        <FaTwitter className="sidebar-twitter-icon"/>
    <NavLink to="/"><SideBarOptions Icon={FaHome} text="Home" active/></NavLink>
    <SideBarOptions Icon={FaHashtag} text="Explore"/>
    <SideBarOptions Icon={FaBell} text="Notifications"/>
    <SideBarOptions Icon={FaEnvelope} text="Messages"/>
    <SideBarOptions Icon={FaBookmark} text="Bookmarks"/>
    <SideBarOptions Icon={IoMdListBox} text="Lists"/>
    <NavLink to="/profile"><SideBarOptions Icon={CgProfile} text="Profile" /></NavLink>
    <SideBarOptions Icon={CgMoreO} text="More"/>
    <button className='sidebar-tweet-btn'>Tweet</button>

```

## :cool: Live-Solution

* Here is the [Link](https://react-twitter-clone-gamma.vercel.app/) to live solution.

## :clipboard: Status & To-Do List


* Status: Basic working app that saves tweets to external database.
* User can signup and sign in with their details. It uses only their username and password to login. 
* To-Do: Correct `ProfileEdit.js` Component and perfect it stlying. Implement `Tweet` function and `retweet` function. 
* Status: basic working app that saves tweets to external database.
* To-Do: Correct `ProfileEdit.js` Component and perfect it stlying. Implement `Tweet` function and `retweet` function.


## :clap: Inspiration

* [Tutorial: Build Twitter Clone using React | Hooks | States | Props | With React-twitter-embed features](https://www.youtube.com/watch?v=g-bY6hf6GCw&t=765s)

## :envelope: Contact

* Repo created by [Ponmile](https://github.com/pjmiles), email: ponmileadebisi@gmail.com

## :pen: Contributors
* Reviewer [Asylcreek](https://github.com/Asylcreek)
* Frontend by [Ponmile](https://github.com/pjmiles) 
* Backender [Osadolortech](https://github.com/osadolortech)
