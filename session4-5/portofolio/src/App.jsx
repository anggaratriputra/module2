import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <section>
      <div className="header animate__animated animate__backInDown" id="header">
        <div className="intro" id="intro">
          <p className="hello">
            Hello, I'm <b>Anggara.</b> <br />
            a Junior Web Developer.
          </p>

          <div className="socialMedia">
            <img className="logoLinkedin" src="/assets/linkedin.png" />
            <a href="https://www.linkedin.com/in/anggaratriputra">anggaratriputra</a>
            <img className="logoInstagram" src="/assets/instagram.png" />
            <a href="https://www.instagram.com/anggaratriputra">anggaratriputra</a>
          </div>
        </div>
        <div className="photo" id="photo">
          <img className="photoAnggara" src="/assets/photo.png" />
        </div>
      </div>
      <div id="content1Container">
        <div id="content1">
          <div id="profile">
            PROFILE
          </div>
          <div className="text-wrapper">
            <div className="biodateContainer">
              <span id="biodate"> BIODATE </span><br />
              <p id="biodate2">
                <span>Fullname : Anggara Tri Putra</span>
                <span>DoB : August 11th, 1998. </span>
                <span>e-mail : anggaratriputra@gmail.com</span>
              </p>
            </div>
            <div className="photo2">
              <img className="photoAnggara2" src="/assets/photo3.png" />
            </div>

            <div className="aboutmeContainer">
              <span id="aboutme">ABOUT ME</span> <br />
              <p id="aboutme2">Graduate with a bachelor degree in Informatics Engineering, Eager to contribute
                to
                the digital world by continuing to learn new things. Currently studying Fullstack Web
                Development in Purwadhika Digital Technology School.</p>
            </div>
          </div>
        </div>
      </div>
      <div id="content2">
        <div>
          <span id="edu">EDUCATION</span>
          <ul id="eduList">
            <li>Purwadhika Digital Technology School<br />
              (2023 - present).</li>
            <br />
            <li>Gunadarma University<br />
              (2016 - 2020)</li>
          </ul>
        </div>
      </div>
      <div id="content3">
        <div id="skill">
          <span>SKILLS</span>
        </div>
        <div id="skillDesc">
          <div>
            <img className="logo" src="/assets/html.png" />
          </div>
          <div>
            <img className="logo" src="/assets/css.png" />
          </div>
          <div>
            <img className="logo" src="/assets/javascript.png" />
          </div>
          <div>
            <img className="logo" src="/assets/reactjs.png" />
          </div>
          <div>
            <img className="logo" src="/assets/nodejs.png" />
          </div>
          <div>
            <img className="logo" src="/assets/photoshop.png" />
          </div>
        </div>
      </div>
    </section >
  );
}

export default App;
