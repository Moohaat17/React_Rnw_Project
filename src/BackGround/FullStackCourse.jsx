import '../assets/CSS/FullStackCourse.css'
import FeatureCard from './FeatureCard';
const FullStackCourse = () => {
  const features = [
    { image: "/images/tutor.png", title: "Experienced Tutors" },
    { image: "/images/web-programming.png", title: "Practical-based Teaching Approach" },
    { image: "/images/solution.png", title: "Rich Learning Content" },
    { image: "/images/briefing.png", title: "Industry-oriented Projects" },
  ];
  return (
    <>
      <section>
        <div className="fullbg pb-5">
          <div className="container-fluid px-5 py-4">
            <div className="row">
              <div className="col-lg-6 text-white py-5">
                <h2 className="py-2">Full Stack Development Course</h2>
                <h6>
                  Master the skill of programming browsers, servers, and
                  databases with our experts while working on live projects.
                </h6>
                <h3 className="py-3 text-white">Job Support</h3>

                <ul className="feature-list">
                  <div className="row">
                    <div className="col-md-6">
                      <li className="feature-item py-2">
                        <FeatureCard
                          image={features[0].image}
                          title={features[0].title}
                        />
                      </li>
                      <li className="feature-item py-2">
                        <FeatureCard
                          image={features[1].image}
                          title={features[1].title}
                        />
                      </li>
                    </div>

                    <div className="col-md-6">
                      <li className="feature-item py-2">
                        <FeatureCard
                          image={features[2].image}
                          title={features[2].title}
                        />
                      </li>
                      <li className="feature-item py-2">
                        <FeatureCard
                          image={features[3].image}
                          title={features[3].title}
                        />
                      </li>
                    </div>
                  </div>
                </ul>

                <div className="d-flex mt-4">
                  <button className="btn bg-light me-2 mb-1" style={{color:'#e31e25'}}>
                    Apply Now
                  </button>
                  <button
                    className="btn me-2 mb-1 text-white"
                    style={{ backgroundColor: "#e31e25" }}
                  >
                    Watch the Intro Video
                  </button>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/full-bg.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FullStackCourse