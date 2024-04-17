import "./index.css";
import data from "./data.json";
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
      {data.map((job) => (
        <Job key={job.id} job={job} />
      ))}
    </div>
  );
}

function Job({ job }) {
  const tags = [
    job.role,
    job.level,
    ...(job.languages ?? []).flat(),
    ...(job.tools ?? []).flat(),
  ].flatMap((tag) => tag);
  return (
    <>
      <div className="description">
        <div className="main">
          <Logo />

          <div className="detail_group">
            <div className="company-wrapper">
              <h5 className="company">{job.company}</h5>
              {job.new && <span className="new">NEW!</span>}
              {job.featured && <span className="featured">FEATURED</span>}
            </div>

            <h3 className="job_title">{job.position}</h3>
            <ul className="details">
              <li className="date">{job.postedAt}</li>
              <li className="contract_type">{job.contract}</li>
              <li className="place">{job.location}</li>
            </ul>
          </div>
        </div>

        <ul className="tags">
          {tags.map((tag) => (
            <button className="btn-tag" key={tag}>
              {tag}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}
