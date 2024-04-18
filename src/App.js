import "./index.css";
import data from "./data.json";
import { ReactComponent as Logo } from "./images/insure.svg";
import { useState, useEffect } from "react";
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

function JobsList() {
  const [isFilterVisible, setFilterVisible] = useState(false);
  const [filterList, setFilterList] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  function filterJobs(jobs, filterList) {
    if (!filterList.length) {
      return data;
    }

    return data.filter((job) => {
      const combinedSet = new Set([
        job.role,
        job.level,
        ...job.languages,
        ...job.tools,
      ]);

      return filterList.every((filter) => combinedSet.has(filter));
    });
  }

  useEffect(() => {
    setFilteredJobs(filterJobs(data, filterList));
  }, [filterList]);

  return (
    <div
      className="jobs_container"
      style={{ marginTop: isFilterVisible ? 65 : 0 }}
    >
      {isFilterVisible && (
        <Filter
          filterList={filterList}
          setFilterList={setFilterList}
          setFilterVisible={setFilterVisible}
        />
      )}
      {filteredJobs.map((job) => (
        <Job
          key={job.id}
          job={job}
          filterList={filterList}
          setFilterList={setFilterList}
          setFilterVisible={setFilterVisible}
        />
      ))}
    </div>
  );
}

function Job({ job, filterList, setFilterList, setFilterVisible }) {
  const handleTagClick = (tag) => {
    if (!filterList.includes(tag)) {
      setFilterList((prevFilterList) => [...prevFilterList, tag]);
      setFilterVisible(true);
    }
  };
  const tags = [
    job.role,
    job.level,
    ...(job.languages ?? []).flat(),
    ...(job.tools ?? []).flat(),
  ].flatMap((tag) => tag);
  return (
    <>
      <div
        className="description"
        style={
          job.featured
            ? {
                borderLeft: "5px solid",
                borderLeftColor: "#5ba4a4",
              }
            : undefined
        }
      >
        <div className="main">
          <Logo className="company_image" />

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
            <button
              onClick={() => handleTagClick(tag)}
              className="btn-tag"
              key={tag}
            >
              {tag}
            </button>
          ))}
        </ul>
      </div>
    </>
  );
}

function Filter({ filterList, setFilterList, setFilterVisible }) {
  const handleRemoveFilter = (filter) => {
    setFilterList((prevFilterList) =>
      prevFilterList.filter((element) => element !== filter)
    );
  };
  useEffect(() => {
    setFilterVisible(filterList.length > 0 ? true : false);
  }, [filterList, setFilterVisible]);

  return (
    <div className="filter">
      <div className="filterby_list">
        {filterList.map((filter) => (
          <div key={filter} className="filterby">
            <span className="filter_item_name">{filter}</span>
            <button onClick={() => handleRemoveFilter(filter)} className="btn">
              X
            </button>
          </div>
        ))}
      </div>

      <button
        className="btn-clear"
        onClick={() => {
          setFilterList([]);
          setFilterVisible(false);
        }}
      >
        Clear
      </button>
    </div>
  );
}
