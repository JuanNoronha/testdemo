import React from 'react';
import Card from '../../Components/Card';
import Navbar from '../Navbar/Navbar';

function Jobs() {
  const jobListings = [
    {
      id: 1,
      url: "undraw_design_tools_-42-tf.svg",
      title: "Digital Marketing Assistant",
      skills: "Figma, Adobe XD, Sketch, Responsive Design",
      salary: "$100,00 per year"
    },
    {
      id: 2,
      url: "undraw_futuristic_interface_re_0cm6.svg",
      title: "Web Designer",
      skills: "React, JavaScript, HTML, CSS, Node.js",
      salary: "$120,00 per year"
    },
    {
      id: 3,
      url: "undraw_mobile_development_re_wwsn.svg",
      title: "Web Developer",
      skills: "JavaScript, React, Redux, HTML, CSS",
      salary: "$90,000 per year"
    },
    {
      id: 4,
      url: "undraw_content_creator_re_pt5b.svg",
      title: "Content Creator",
      skills: "Content Writing, SEO, Social Media Management",
      salary: "$70,000 per year"
    },
    
  ];

  return (
    <div>
      <Navbar title="Jobs" />
      <div className="jobs-container">
        {jobListings.map(job => (
          <Card
            key={job.id}
            src={job.url}
            title={job.title}
            skills={job.skills}
            salary={job.salary}
            buttonText="APPLY"
            imageStyle="150px"
            galleryStyle="80%"
          />
        ))}
      </div>
    </div>
  );
}

export default Jobs;
