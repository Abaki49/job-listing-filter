import "./index.css";
import { ReactComponent as Logo } from "./images/insure.svg";
export default function App() {
  return (
    <div className="container">
      <Header />
      <JobsList />
    </div>
  );
}

function Header() {
  return <header className="header"></header>;
}

function Filter() {
  return (
    <div className="filter">
      <div className="filterby_list">
        <div className="filterby">
          <span className="filter_item_name">Javascript</span>
          <button className="btn">X</button>
        </div>
        <div className="filterby">
          <span className="filter_item_name">Javascript</span>
          <button className="btn">X</button>
        </div>
      </div>

      <button className="btn-clear">Clear</button>
    </div>
  );
}
function JobsList() {
  return (
    <div className="jobs_container">
      <Filter />
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
      <Job />
    </div>
  );
}

function Job() {
  return (
    <>
      <div className="description">
        <div className="main">
          <Logo />
          <div className="detail_group">
            <span className="new">NEW!</span>
            <span className="featured">FEATURED</span>
            <h5 className="company">Account</h5>
            <h3 className="job_title"> Junior Frontend Developer</h3>
            <ul className="details">
              <li className="date">1d ago</li>
              <li className="contract_type">Part Time</li>
              <li className="place">USA only</li>
            </ul>
          </div>
        </div>

        <ul className="tags">
          <li>Frontend</li>
          <li>React</li>
          <li>Junior</li>
          <li>JavaScript</li>
        </ul>
      </div>
    </>
  );
}
