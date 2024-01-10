import React from 'react';

const Careers = () => {
  return (
    <div>
      <header className="header">
        <a href="#" className="logo"><img src="./images/image.png" alt="" /></a>
        <div className="fas fa-bars"></div>
        <nav className="navbar">
          <ul>
            <li><a href="index.html#home">home</a></li>
            <li><a href="index.html#about">about</a></li>
            <li><a href="index.html#service">services</a></li>
            <li><a href="index.html#portfolio">portfolio</a></li>
            <li><a href="index.html#team">team</a></li>
            <li><a href="careers.html">career</a></li>
            <li><a href="index.html#contact">contact</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
          </ul>
        </nav>
      </header>

      <section id="home" className="home">
        <h2>Home / Careers</h2>
      </section>

      <section id="career-heading" className="career-heading">
        <h1 className="heading">Career</h1>
        <p>Job Opening in IT Company. Apply Now!</p>
      </section>

      <div className="career">
        <div className="career-form">
          <form action="./careers.php" method="POST" enctype="multipart/form-data">
            <input type="text" name="name" placeholder="Name" className="career-form-txt" required />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required placeholder="Contact number" maxLength="10" className="career-form-phone" />
            <input type="email" name="email" placeholder="Email" className="career-form-email" required />
            <div className="radio-class">
              <h2 className="name">Apply For Which Post?</h2>
              <label className="radio">
                <input className="radio-one" type="radio" checked="checked" name="status" value="Web Designer" />
                <span className="checkmark"></span>
                Web Designer
              </label>
              <label className="radio">
                <input className="radio-one" type="radio" checked="checked" name="status" value="Web Designer" />
                <span className="checkmark"></span>
                Web Developer
              </label>
              <label className="radio">
                <input className="radio-one" type="radio" checked="checked" name="status" value="Web Designer" />
                <span className="checkmark"></span>
                Mobile App Designer
              </label>
              <label className="radio">
                <input className="radio-one" type="radio" checked="checked" name="status" value="Web Designer" />
                <span className="checkmark"></span>
                Mobile App Developer
              </label>
              <label className="radio">
                <input className="radio-one" type="radio" checked="checked" name="status" value="Web Designer" />
                <span className="checkmark"></span>
                Digital Marketer
              </label>
              
              
            </div>
            <input type="number" id="experience" name="experience" required placeholder="Years of Experience" className="career-form-experience" />
            <textarea placeholder="Other Details" name="details" className="career-form-txtarea" required></textarea>
            <div className="file">
              <h2 className="name">Upload Your Resume</h2>
              <input className="upload" type="file" name="fileToUpload" accept=".doc,.docx,.pdf" /><br /><br /><br />
            </div>
            <input type="submit" value="Submit" name="submit" className="career-form-btn" />
          </form>
        </div>
      </div>

      {/* Footer section */}
      {/* ... Paste the footer code here ... */}

      <a href="#" className="back-to-top"><i className="ion-ios-arrow-up"></i></a>

      {/* Script imports */}
      {/* ... Paste the script imports here ... */}
    </div>
  );
};

export default Careers;
