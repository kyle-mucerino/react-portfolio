import React from 'react';

function Footer() {
  const icons = [
    {
      name: "fab fa-github",
      link: "https://github.com/kyle-mucerino"
    },
    {
      name: 'fab fa-linkedin',
      link: 'https://www.linkedin.com/in/kyle-mucerino-95b112184/'
    }
  ]

  return (
    <footer className='flex-row px-1'>
      {icons.map(icon => 
      (
        <a href={icon.link} key={icon.name} target='_blank' rel='noopener noreferrer'><i className={icon.name}></i></a>
      )
        )}
    </footer>
  );
}

export default Footer;