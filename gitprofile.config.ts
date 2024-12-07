// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'AmosKhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/amosportfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Final Year Project',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Acute Effects of Cloth Mask on Physiological Indices (Lactate Threshold, VO2, VO2max, Rate of Perceived Exertion',
          description:
            'Purpose: Examine the effects of cloth mask conditions on exercise performance between bothgenders in physiological indices such as Lactate Threshold (LT), Oxygen Consumption (VO2),Maximal Oxygen Consumption (VO2max) and Rate of Perceived Exhaustion (RPE).',
          imageUrl:
            'https://media.licdn.com/dms/image/C4E12AQEzgELbed6NFw/article-cover_image-shrink_600_2000/0/1542629984029?e=2147483647&v=beta&t=ANNFaIE5YwDBBY_tghdPTEqMSxUOsVPLmJ0v5ohqhhc',
          link: 'https://entuedu-my.sharepoint.com/:b:/g/personal/nie21_kjma_e_ntu_edu_sg/EakQZl_q1UNNghVa9SmYakoB6UAO0MsXUJ9m3WuOAn4XnA?e=7vtcpK',
        },
        {
          // title: 'Project Name',
          // description:
          //   'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          // imageUrl:
          //   'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          // link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Amos Khan',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'Amos Khan',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://amoskhan.github.io/amosportfolio/',
    phone: '',
    email: 'khanamos1@gmail.com',
  },
  resume: {
    fileUrl:
      'https://entuedu-my.sharepoint.com/:b:/g/personal/nie21_kjma_e_ntu_edu_sg/EWTZ_odYdXBGnAZqXs4s31sBORrTGj4x3WIFFbdjyLUfyA?e=mEI21t', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Microsoft Office',
    'HTML',
    'Python',
    'SQL',
    'R Programming',
    'Tableau',
  ],
  experiences: [
    {
      company: 'Diagnostic Development Hub',
      position: 'Corporate Communications, Outreach and Talent Development Intern',
      from: 'July 2024',
      to: 'December 2024',
      companyLink: 'https://www.a-star.edu.sg/dxdhub',
    },
    {
      company: 'NTUC Health',
      position: 'Assistant Data Analyst',
      from: 'Jan 2023',
      to: 'April 2023',
      companyLink: 'https://ntuchealth.sg',
    },
    {
      company: 'Phillip Securities Pte Ltd',
      position: 'Data Processing Executive',
      from: 'Feb 2021',
      to:'July 2021',
      companyLink: 'https://www.phillip.com.sg/sg/',
    },
    {
      company: 'ST Logistics Pte Ltd',
      position: 'Data Admin Supervisor',
      from: 'Nov 2018',
      to:'Jan 2019',
      companyLink: 'https://www.stlogs.com',
    }
  ],
  certifications: [
    {
      name: 'Google Professional Certificates (Google Data Analytics)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Jan 2023',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/T4HC2NQTR8XN',
    },
    {
      name: 'Google Professional Certificates (Google IT Support)',
      // body: 'Lorem ipsum dolor sit amet',
      year: 'Sept 2022',
      link: 'https://www.coursera.org/account/accomplishments/professional-cert/K7U4T22D987M',
    },
  ],
  educations: [
    {
      institution: 'Nanyang Technological University Singapore',
      degree: 'Bachelor of Science (Sports Science & Management)',
      from: '2021',
      to: '2025',
    },
    {
      institution: 'Loughborough University',
      degree: 'Sport and Exercise Science (Sports Science)',
      from: 'Feb 2024',
      to: 'June 2024',
    },
    {
      institution: 'Raffles Institution',
      degree: 'A Levels',
      from: 'Jan 2013',
      to: 'Dec 2018',
    },
  ],
  publications: [
    {
      title: 'Badminton Athlete',
      // conferenceName: '',
      // journalName: 'Journal Name',
      // authors: 'Amos Khan',
      // link: 'https://entuedu-my.sharepoint.com/:b:/g/personal/nie21_kjma_e_ntu_edu_sg/EakQZl_q1UNNghVa9SmYakoB6UAO0MsXUJ9m3WuOAn4XnA?e=7vtcpK',
      description:
        ' Played badminton since 12 years old.',
    },
    {
      title: 'Badminton Coach',
      description: 'Coaching was where I started to educate younger ones on how to play the sport better.'
    },

    {title: 'Sports Data Analysis',
    description: 'I find data analysis an intricate process. I find immense joy towards it.'
    },

    {title: 'Educator',
    description: 'Through sports, I hope to educate more people on its benefits and outcomes.'
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: 'arifszn', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
