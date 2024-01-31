import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const TeamSection = () => {
  const teamMembers = [
    {
      name: 'Asad Ishaq',
      role: 'Web Developer',
      imageUrl: 'https://media.licdn.com/dms/image/D4E03AQFji5H7zm9Hug/profile-displayphoto-shrink_800_800/0/1684594352791?e=2147483647&v=beta&t=q4SNnUats0mLwFZZdq5Vn2qYQ6cxs2ETGFfcyBlo08I',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/login',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
    {
      name: 'Jahanzeb Khalid',
      role: 'Marketing Manager',
      imageUrl: 'https://media.licdn.com/dms/image/D4D03AQH7ftvcAbk_uQ/profile-displayphoto-shrink_400_400/0/1686430412153?e=1708560000&v=beta&t=RIQGQnvTnTBxrKF6YiIhQHABDC8YlcB26X726EIRY4I',
      socialLinks: {
        facebook: 'https://www.facebook.com/',
        twitter: 'https://twitter.com/login',
        instagram: 'https://www.instagram.com/',
        linkedin: 'https://www.linkedin.com/',
      },
    },
  ];

  return (
    <section className="team" style={{ marginTop: '7rem' }}>
      <h1 className="heading" style={{ marginTop: '-1.5rem' }} id="team">
        our team
      </h1>
      <p></p>
      {teamMembers.map((member, index) => (
        <div className="row" key={index}>
          <div className="card">
            <div className="image">
              <img src={member.imageUrl} alt={`Team member ${index + 1}`} />
            </div>
            <div className="info">
              <h3>{member.name}</h3>
              <span>{member.role}</span>
              <div className="icons">
          <a href={member.socialLinks.facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon/>
          </a>
          <a href={member.socialLinks.twitter} target="_blank" rel="noopener noreferrer">
            <TwitterIcon />
          </a>
          <a href={member.socialLinks.instagram} target="_blank" rel="noopener noreferrer">
            <InstagramIcon />
          </a>
          <a href={member.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon />
          </a>
        </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default TeamSection;
