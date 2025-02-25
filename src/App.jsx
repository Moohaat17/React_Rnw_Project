import FullStackCourse from "./BackGround/FullStackCourse";
import Header from "./Header/Header";
import CourseInfo from "./CourseInfo/CourseInfo";
import CourseModules from "./CourseModules/CourseModules";
import CourseForm from "./CourseForm/CourseForm";
import { languages, topics } from "./WebFrontEndCoding/topic";
import FrontEndCoding from "./WebFrontEndCoding/FrontEndCoding";
import ProgrammingFoundation from "./ProgrammingFoundation/ProgrammingFoundation";
import AdvancedProgramming from "./AdvanceProgramming/AdvanceProgramming";
import JSFrameworks from "./JsFrameWorks/JSFrameworks";
import MongoDb from "./MONGOD/MongoDb";
import FAQ from "./FAQ/FAQ";
import Footer from "./Footer/Footer";
var App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid p-0">
        <FullStackCourse />
        <div className="row g-0">
          <div className="col-lg-8 px-0 bg-white shadow-sm">
            <CourseInfo
              title="Full-Stack Development Course"
              description="A full-stack web developer is a person who can develop both client and server software. In addition to mastering HTML and CSS, they also know how to Program a browser, a server, and a database. You can enroll for Game Design Development Course in Surat at RednWhite."
              duration="15 Months"
              dailyTime="2 Hours"
              eligibility={["PG, UG, Diploma/ 12th pass out (Minimum 50%)"]}
              features={[
                "Job Support",
                "Rich Learning Content",
                "Taught by Experienced Professors",
                "Industry Oriented Projects",
              ]}
            />
            <CourseModules />
            <FrontEndCoding
              title="Web Front End Coding"
              subtitle="Front End Coding"
              topics={topics}
              languages={languages}
            />
            <ProgrammingFoundation />
            <AdvancedProgramming />
            <JSFrameworks />
            <MongoDb />
            <FAQ />
          </div>
          <div className="col-lg-4 p-3">
            <CourseForm />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default App;
