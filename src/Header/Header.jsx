import "../assets/CSS/Header.css";
const Header = () => {
  return (
    <>
      <header>
        <div className="top-bar py-1" style={{ display: "block" }}>
          <div className="container-fluid px-5">
            <div className="d-flex justify-content-lg-between justify-content-end align-items-center">
              <div className="d-flex flex-wrap">
                <div class="dropdown me-1">
                  <button
                    class="btn btn-white btn-sm py-1 px-3 rounded text-white rounded-1 border-1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Selected City: Ahmedabad{" "}
                    <span>
                      <i class="fa-solid fa-angle-down"></i>
                    </span>
                  </button>
                  <ul
                    class="dropdown-menu"
                    style={{
                      position: "absolute",
                      margin: "0px",
                      transform: "translate(0px, 28px)",
                    }}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        Surat
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Rajkot
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Bhavnagar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Amreli
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Navsari
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Vidyanagar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Gandhinagar
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Bharuch
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown ms-1">
                  <button
                    class="btn btn-white btn-sm py-1 px-3 rounded text-white rounded-1 border-1"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Select Language
                  </button>
                  <ul
                    class="dropdown-menu"
                    style={{
                      position: "absolute",
                      margin: "0px",
                      transform: "translate(0px, 28px)",
                    }}
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        English
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Hindi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Gujarati
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Arabic
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Spanish
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        French
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Punjabi
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Chinese
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-lg-block d-none">
                <div
                  className="d-flex justify-content-lg-between justify-content-end align-items-center"
                  style={{ width: "500px" }}
                >
                  <marquee behavior="scroll" direction="left">
                    <a
                      href="tel:+91 79847 11520"
                      className="text-white pe-3 text-decoration-none"
                    >
                      <i
                        className="fa fa-phone me-1"
                        style={{ color: "white" }}
                      ></i>
                      RW1 (A K Road) : +91 79847 11520
                    </a>
                    <a
                      href="tel:+91 63510 87408"
                      className="text-white pe-3 text-decoration-none"
                    >
                      <i
                        className="fa fa-phone me-1"
                        style={{ color: "white" }}
                      ></i>
                      RW2 (Yogi Chowk) : +91 63510 87408
                    </a>
                    <a
                      href="tel:+91 78787 80511"
                      className="text-white pe-3 text-decoration-none"
                    >
                      <i
                        className="fa fa-phone me-1"
                        style={{ color: "white" }}
                      ></i>
                      RW3 (Sarthana) : +91 78787 80511
                    </a>
                    <a
                      href="tel:+91 63522 95143"
                      className="text-white pe-3 text-decoration-none"
                    >
                      <i
                        className="fa fa-phone me-1"
                        style={{ color: "white" }}
                      ></i>
                      RW4 (Mota Varachha) : +91 63522 95143
                    </a>
                  </marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-menu mt-1 shadow-sm">
          <div className="container-fluid px-5">
            <div className="d-flex justify-content-between align-items-center py-2">
              <div className="logo">
                <a href="https://www.rnwmultimedia.edu.in/full-stack-development-course.php">
                  <img
                    src="/images/rnw-logo.png"
                    alt=""
                    style={{ width: "250px" }}
                  />
                </a>
              </div>
              <div className="nav-menu">
                <nav class="navbar navbar-expand-lg bg-body-tertiary">
                  <button
                    class="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div
                    class="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul class="navbar-nav mb-2 mb-lg-0">
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Home
                        </a>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          STD 10th & 12th <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              GIM (Graduation In Multimedia)
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Animation & VFX 2 year
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Career Courses <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Web Designing
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Front End Developing
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Web Development
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Android Development
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in iOS Development
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Game Development
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Game Development
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Master in Flutter
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Advance in Python
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Full Stack Development
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Courses <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Java
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Android
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              iOS
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              React Native
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              React.Js
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Node.Js
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              PHP
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Unity C# Script
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Angular Js
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              laravel
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Python
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          About Us <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Group of institutes
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Career With Us
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Affiliations / Authorised
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Press Notes
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item dropdown">
                        <a
                          class="nav-link"
                          href="#"
                          role="button"
                          data-bs-toggle="dropdown"
                          aria-expanded="false"
                        >
                          Student Corner <i class="fa-solid fa-angle-down"></i>
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a class="dropdown-item" href="#">
                              Apply job
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Placement
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Company Visit
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Expert Session
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Placement Drive
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Grievance
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Why I Choose RNW
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Placement Partners
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#">
                              Student Works
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
