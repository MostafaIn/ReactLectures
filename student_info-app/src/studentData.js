const studentData = [
    {
        firstName: 'Evans ',
        lastName: 'Chaba',
        title: 'Junior Developer',
        nationality: 'Kenya',
        src: './studentsPhoto/evans.jpg',
        alt: 'evans',
        skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'psql'],
        whySofterDeveloper: 'love +dev-tools & crafting features',
        longTermVision: ' Remote Work  LOL',
        motivatesMe: ' basically everything ',
        favoriteQuote: ' No man is an island',
        joinedOn: '17-01-2019',
    },
    {
        firstName: 'Xurxe Toivo',
        lastName: 'García',
        title: 'Junior Web Developer',
        nationality: 'Galician/Spanish',
        src: './studentsPhoto/xurxe.jpg',
        alt: 'Xurxe Toivo García',
        skills: ['HTML', 'CSS', 'JS', 'C#', 'R'],
        whySofterDeveloper: 'I want to create effective and accessible ways to engage with the world.',
        longTermVision: 'To live a life where we can learn and teach each other as equals.',
        motivatesMe: 'Science, art, technology, and communities.',
        favoriteQuote:
            '“And stepped, not left or right, forward or back, but in another direction entirely” - The Long Mars, by Terry Pratchett and Stephen Baxter',
        joinedOn: 'January 2019',
    },
    {
        firstName: 'Sherry',
        lastName: 'Kaboli',
        title: 'Junior Frontend Developer',
        nationality: 'Iranian',
        src: './studentsPhoto/sherry.jpg',
        alt: 'Sherry Kaboli',
        skills: ['HTML', 'Css', 'JavaScript', 'Graphic Design', 'Adobe Illustrator', 'Adobe XD'],
        whySofterDeveloper: 'I am kinda interested in coding',
        longTermVision: 'Being good developer and designer',
        motivatesMe: 'Success, Money',
        favoriteQuote: '',
        joinedOn: '2019.01.21',
    },
    {
        firstName: 'Julia',
        lastName: 'Shumeyko',
        title: 'Junior Developer',
        nationality: 'Russian',
        src: './studentsPhoto/Julia.jpg',
        alt: 'Julia Shumeyko',
        skills: ['HTML', 'CSS', 'JavaScript'],
        whySofterDeveloper:
            'Software development provides an infinite amount of challenges and endless opportunities for growing, learning and self-development.',
        longTermVision: 'Happiness',
        motivatesMe: 'Adventures',
        favoriteQuote: 'The most amazing combinations can result if you shuffle the pack enough.',
        joinedOn: '21.1.2019',
    },
    {
        firstName: 'André',
        lastName: 'Vollrath',
        title: 'Junior Developer',
        nationality: 'German',
        src: './studentsPhoto/andre.jpg',
        alt: 'Beautiful portrait photo of André',
        skills: ['HTML', 'CSS', 'JavaScript', 'Photoshop', 'Illustrator', 'InDesign', 'After Effects'],
        whySofterDeveloper: 'You can pick your own journey',
        longTermVision: 'Success and Happiness as a Front-End Developer with a focus on UI Design',
        motivatesMe: 'Happiness',
        favoriteQuote: 'If you are the smartest person in the room, you are in the wrong room',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Sayed masood ',
        lastName: 'Musavy',
        title: 'Junior web Developer',
        nationality: 'Afghanistani',
        src: './studentsPhoto/masood.jpg',
        Alt: 'Musavy Masood',
        skills: ['Html', 'Css', 'javaScript'],
        whySofterDeveloper: 'I dream it and i will reach it',
        longTermVision: 'Success and happiness in the future',
        motivatesMe: 'positive energy and Happiness',
        favoriteQuote: "life is what happens when you're busy making other plans",
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Dean ',
        lastName: 'Phan',
        title: 'Junior Developer',
        nationality: 'Vietnam',
        src: './studentsPhoto/Dean.jpg',
        alt: 'Dean Phan',
        skills: ['HTML', 'CSS', 'Javascript', 'React'],
        whySofterDeveloper: 'Continuously changing, improving, learning new things',
        longTermVision: 'Full-stack Developer',
        motivatesMe: 'simplify the problem',
        favoriteQuote: 'Time will tell',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Phuc',
        lastName: 'Nguyen',
        title: 'Junior Developer',
        nationality: 'Vietnam',
        src: './studentsPhoto/phuc.jpg',
        Alt: 'Phuc Nguyen',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Nodejs', 'JavaScript', 'Wordpress', 'SEO'],
        whySofterDeveloper: 'make new and fix old thing',
        longTermVision: 'Full Stack Developer',
        motivatesMe: 'fixed it',
        favoriteQuote: 'Happiness is on the way not at the end',
        joinedOn: '21 January 2019',
    },
    {
        firstName: 'Johanna ',
        lastName: 'Rousi',
        title: 'Junior Developer',
        nationality: 'Finnish',
        src: './studentsPhoto/johanna.jpg',
        alt: 'Johanna Rousi',
        skills: ['HTML', 'CSS', 'JavaScript'],
        whySofterDeveloper: 'You can be creative and you can always get better',
        longTermVision: 'To be a professional developer',
        motivatesMe: 'Learning new things and noticing improvement',
        favoriteQuote: 'Every moment is a fresh beginning. T.S. Eliot',
        joinedOn: '21 January 2019',
    },
    {
        firstName: 'Alba ',
        lastName: 'Vrapi',
        title: 'Junior Developer',
        nationality: 'Albanian',
        src: './studentsPhoto/alba.jpeg',
        alt: 'Alba',
        skills: ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'JAVA', 'SQL', 'NODE JS'],
        whySofterDeveloper: 'It is a creative job , and gives the possibility to learn continuously.',
        longTermVision: 'Full-Stack Developer',
        motivatesMe: 'My Family',
        favoriteQuote: 'Be the change that you wish to see in the world. Mahatma Gandhi',
        joinedOn: '21 January 2019',
    },
    {
        firstName: 'Adrien',
        lastName: ' Fernandez',
        title: 'Junior Developer',
        nationality: 'French',
        src: './studentsPhoto/adrien.jpg',
        alt: 'Adrien Victor Fernandez',
        skills: ['HTML', 'CSS', 'JavaScript'],
        whySofterDeveloper: 'The opportunity to take a new career path in a dynamic industry',
        longTermVision: 'Be involved as a senior developer or team leader in a gaming related project',
        motivatesMe: 'learning something new, to be part of a creative and progressive group of people',
        favoriteQuote: '',
        joinedOn: '21.01.2019',
    },
    {
        firstName: ' Koray ',
        lastName: 'Dündar',
        title: 'Junior Developer',
        nationality: 'Turkish',
        src: './studentsPhoto/koray.jpg',
        alt: '',
        skills: ['HTML5', 'CSS3', 'JavaScript', 'Video and Photo Production'],
        whySofterDeveloper: '',
        longTermVision: 'Become a successful web developer',
        motivatesMe: 'Learning',
        favoriteQuote: '',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Hari',
        lastName: 'Basnet',
        title: 'Junior Developer',
        nationality: 'Nepalese',
        src: './studentsPhoto/hari.jpg',
        alt: 'hari',
        skills: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'React', 'Redux', 'MongoDB'],
        whySofterDeveloper:
            'Technology has always intrigued me. I have always wanted to learn how to develop those software.',
        longTermVision: 'Become a full-stack developer by 2023',
        motivatesMe: 'Building things by writing codes',
        favoriteQuote: 'The mind is everything. What you think, you become.',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Mostafa',
        lastName: 'Hazareh',
        title: 'Junior Web Developer',
        nationality: 'Afghan',
        src: './studentsPhoto/mostafa.jpg',
        alt: 'mostafa',
        skills: ['HTML', 'CSS', 'JAVASCRIPT'],
        whySofterDeveloper: 'creative and productive',
        longTermVision: 'develop an online marketing web App',
        motivatesMe: ' learning new features',
        favoriteQuote: 'online marketing',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Ernest',
        lastName: 'Cherry',
        title: 'Junior Developer @Integrify',
        nationality: 'Saint Lucian',
        src: './studentsPhoto/cherry.jpg',
        alt: '',
        skills: ['HTML', 'CSS', 'JavaScript'],
        whySofterDeveloper: 'Because technology is omnipresent and I believe its the best way to make an impact',
        longTermVision: 'Full stack developer/e-learning developer',
        motivatesMe: 'Becoming a better version of myself and making the most of my life while I am still alive.',
        favoriteQuote: 'To be without dreams is to be without hope, to be without hope is to be without purpose!',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Muhammad Husham',
        lastName: 'Yousaf',
        title: 'Junior Developer.',
        nationality: 'Pakistani',
        src: './studentsPhoto/Husham.jpg',
        alt: '',
        skills: ['HTML', 'JavaScript', 'CSS'],
        whySofterDeveloper: 'To solve problems',
        longTermVision: 'To solve problems with the help of Technology',
        motivatesMe: 'Problems',
        favoriteQuote: 'Try Try again',
        joinedOn: '21.01.2019',
    },
    {
        firstName: 'Mirela',
        lastName: 'Viitanen',
        title: 'Junior developer',
        nationality: 'Croatian',
        src: './studentsPhoto/mirela.jpg',
        alt: 'Mirela Viitanen',
        skills: ['HTML', 'CSS', 'JavaScript', 'React'],
        whySofterDeveloper: 'I love to learn and gain new skills and coding is all about learning ',
        longTermVision: 'Continue to learn, gain skills  and better myself every day of my life',
        motivatesMe: 'Knowledge. I love to have power of knowing things',
        favoriteQuote: 'With great power comes great initial confusion',
        joinedOn: '21-1-2019',
    },
    {
        firstName: 'Sulaymon',
        lastName: 'Tajudeen',
        title: 'Web developer',
        nationality: 'Nigerian',
        src: './studentsPhoto/sulaymon.jpg',
        alt: 'Sulaymon Tajudeen',
        skills: ['HTML', 'CSS', 'Javascript', 'React', 'Firebase', 'Adobe XD', 'Figma', 'PHP', 'Python'],
        whySofterDeveloper: 'I feel satisfied and fulfilled when I can solve real life problems with code',
        longTermVision: 'Become a problem solver and helping other people using technology',
        motivatesMe: 'When I can use my code to solve a real life problem',
        favoriteQuote: 'Code solve problems, and it can make the world a better place. Do good with code',
        joinedOn: '21.01.2019',
    },
];


export default studentData;