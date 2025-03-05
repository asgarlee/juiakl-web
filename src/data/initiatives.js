export const initiatives = [
  {
    id: 'ulama-council',
    title: 'Ulama Council',
    description: 'The chief body of Shia clerics in the district.',
    imageUrl: '/images/initiatives/juiakl-logo.png',
    link: '/organizations/ulama-council',
    stats: [
      { label: 'Established', value: '1990' },
      { label: 'Members', value: '50+' }
    ],
    services: ['Religious Guidance', 'Community Leadership', 'Islamic Education']
  },
  {
    id: 'howza-e-ilmiyah',
    title: 'Howza-e-Ilmiyah Isna Asharia, Kargil',
    description: 'Provides religious education to selected students and prepares them for higher studies in Islamic theology.',
    imageUrl: '/images/initiatives/juiakl-logo.png',
    link: '/organizations/howza-e-ilmiyah',
    affiliation: 'Al-Mustafa International University, Qom',
    stats: [
      { label: 'Students', value: '100+' },
      { label: 'Programs', value: '3' }
    ],
    services: ['Religious Education', 'Higher Studies', 'Theological Training']
  },
  {
    id: 'jamiat-mashhad',
    title: 'Jamiat ul Ulama Mashhad Office',
    description: 'Branch office serving the region from Mashhad.',
    imageUrl: '/images/initiatives/juiakl-logo.png',
    link: '/organizations/jamiat-mashhad',
    location: 'Islamic Republic of Iran',
    stats: [
      { label: 'Location', value: 'Mashhad' },
      { label: 'Region', value: 'Iran' }
    ],
    services: ['Regional Coordination', 'International Relations']
  },
  {
    id: "education",
    title: "Jaffaria Academy of Modern Education",
    description: "Established in 1995, providing quality modern and religious education to over 900 students in Kargil.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-green-500",
    link: "/organizations/education",
    imageUrl: "/images/initiatives/jame-logo.png",
    stats: [
      { value: "900+", label: "Students" },
      { value: "40+", label: "Teachers" },
      { value: "95%", label: "Pass Rate" }
    ],
    services: [
      "Modern Education",
      "Religious Studies",
      "Sports Activities",
      "NCC Training",
      "Cultural Programs",
      "Career Guidance"
    ],
    contactInfo: {
      address: "JAME Campus, Educational Zone, Kargil",
      email: "info@jame.edu",
      phone: "+91-123-456-7891"
    },
    introduction: `Established in 1995, the Jaffaria Academy of Modern Education in Kargil operates under the patronage of Jamiatul Ulama Isna Asharia Kargil. It is a non-profit institution established with the objective of providing quality education. At present there are over 900 students, including many from underprivileged sections of society, who are being imparted modern quality education along with religious education.`,
    structure: {
      lowerWing: {
        location: "Heart of Kargil town, adjacent to JUIA-Kargil",
        grades: "Nursery to Class 7",
        students: "550 students"
      },
      higherWing: {
        location: "Lower Kurbathang Plateau",
        grades: "Classes 8 to 12",
        students: "318 students"
      },
      staff: {
        teachers: "40 teachers",
        totalStaff: "70 members"
      }
    },
    achievements: {
      academic: [
        {
          year: "2020-21",
          highlights: [
            "Excellent pass rate in board examinations",
            "Class 10: Sania Kulsum secured 2nd position in district (487/500 marks)",
            "Class 8: Mohammad Hassanian Nasiri (99%) and Zainab Banoo (96%) secured 1st and 3rd positions in DIET Kargil Board Exams"
          ]
        }
      ],
      extracurricular: [
        {
          year: "2021",
          events: [
            "1st place in Inter-School Cyber Jagrookta Diwas Celebration"
          ]
        },
        {
          year: "2022",
          events: [
            "Inter-House Competitions in Tilawat-e-Quran-e-Paak, painting, debates, volleyball, and table tennis",
            "1st and 3rd positions in Tilawat-e-Quran-e-Paak competitions at MPS Baroo",
            "Multiple awards in painting competitions (Indian Army Vijay Diwas)",
            "2nd position in Inter-School Naat competition",
            "1st place in Inter-School Badminton Doubles Championship (U-14)",
            "Represented Kargil District in 76th Independence Day parade at Leh"
          ]
        }
      ],
      ncc: {
        establishment: "2023",
        details: [
          "Established with 01 Ladakh Bn of NCC, Leh",
          "25 cadets enrolled (Junior Division)",
          "Separate NCC Unit established in 2024 as 02 Ladakh NCC Bn Kargil",
          "10 Senior Division vacancies expected in 2024"
        ]
      }
    },
    futurePlans: {
      unifiedCampus: {
        location: "Kurbathang Plateau near Higher Wing",
        features: [
          "Spacious, well-lit classrooms",
          "Specialized nursery classrooms",
          "Science laboratories",
          "Libraries and activity rooms",
          "Sports room and multipurpose hall",
          "Large playground"
        ]
      },
      longTermVision: [
        "Establish combined academic setup merging Higher and Lower Wings",
        "Construct new school building with complete infrastructure",
        "Establish proper sections for Nursery, Middle, Higher, and Higher Secondary levels",
        "Establish a college for higher education"
      ]
    },
    gallery: {
      categories: [
        {
          name: "Academic Events",
          images: [
            { src: "/gallery/education/academic/board-results.jpg", alt: "Board Results Celebration" },
            { src: "/gallery/education/academic/competition-winners.jpg", alt: "Competition Winners" }
          ]
        },
        {
          name: "Sports Activities",
          images: [
            { src: "/gallery/education/sports/badminton.jpg", alt: "Badminton Championship" },
            { src: "/gallery/education/sports/volleyball.jpg", alt: "Volleyball Match" }
          ]
        },
        {
          name: "Cultural Programs",
          images: [
            { src: "/gallery/education/cultural/naat.jpg", alt: "Naat Competition" },
            { src: "/gallery/education/cultural/quran.jpg", alt: "Quran Competition" }
          ]
        },
        {
          name: "NCC Activities",
          images: [
            { src: "/gallery/education/ncc/parade.jpg", alt: "NCC Parade" },
            { src: "/gallery/education/ncc/training.jpg", alt: "NCC Training" }
          ]
        }
      ]
    }
  },
  {
    id: 'maktab-e-isna',
    title: 'Maktab e Isna Asharia (Daar ul Quran)',
    description: 'Governs and provides Quranic education in seminaries across several villages.',
    imageUrl: '/images/initiatives/maktab-e-isna.png',
    link: '/organizations/maktab-e-isna',
    stats: [
      { label: 'Villages', value: '20+' },
      { label: 'Students', value: '1000+' }
    ],
    services: ['Quranic Education', 'Village Seminaries', 'Religious Training']
  },
  {
    id: 'jawadiah-project',
    title: 'Jawadiah Project CARE',
    description: 'An educational project supporting students from underprivileged backgrounds and preparing them for competitive examinations.',
    imageUrl: '/images/initiatives/jawadiah-project.webp',
    link: '/organizations/jawadiah-project',
    stats: [
      { label: 'Students', value: '200+' },
      { label: 'Success Rate', value: '85%' }
    ],
    services: ['Educational Support', 'Competitive Exam Prep', 'Student Welfare']
  },
  {
    id: 'az-zahra-orphanage',
    title: 'Az-Zahra Girls Orphanage',
    description: 'Cares for the orphans of the region.',
    imageUrl: '/images/initiatives/az-zahra-orphanage.png',
    link: '/organizations/az-zahra-orphanage',
    stats: [
      { label: 'Residents', value: '50+' },
      { label: 'Staff', value: '15+' }
    ],
    services: ['Orphan Care', 'Education', 'Healthcare']
  },
  {
    id: 'haye-te-fatimiyah',
    title: 'Haye\'te Fatimiyah',
    description: 'The women\'s wing of the organization.',
    imageUrl: '/images/initiatives/haye-te-fatimiyah.png',
    link: '/organizations/haye-te-fatimiyah',
    stats: [
      { label: 'Members', value: '100+' },
      { label: 'Programs', value: '5+' }
    ],
    services: ['Women\'s Empowerment', 'Community Programs', 'Social Welfare']
  },
  {
    id: 'isna-asharia-network',
    title: 'Isna Asharia Network (Media Cell ISK)',
    description: 'Handles public and media relations for the organization.',
    imageUrl: '/images/initiatives/isna-asharia-network.png',
    link: '/organizations/isna-asharia-network',
    stats: [
      { label: 'Platforms', value: '5+' },
      { label: 'Reach', value: '10K+' }
    ],
    services: ['Media Relations', 'Public Communication', 'Digital Presence']
  },
  {
    id: 'ansar-ul-mahdi',
    title: 'Ansar ul Mahdi Isna Asharia Youths',
    description: 'Youth wing focused on engaging and empowering the younger community.',
    imageUrl: '/images/initiatives/ansar-ul-mahdi.webp',
    link: '/organizations/ansar-ul-mahdi',
    stats: [
      { label: 'Members', value: '300+' },
      { label: 'Events', value: '20+' }
    ],
    services: ['Youth Programs', 'Community Engagement', 'Leadership Development']
  },
  {
    id: 'shoba-e-adab',
    title: 'Shoba e Adab',
    description: 'A wing dedicated to poetry, literature, and publishing, established by renowned local writers and poets.',
    imageUrl: '/images/initiatives/juiakl-logo.png',
    link: '/organizations/shoba-e-adab',
    stats: [
      { label: 'Publications', value: '50+' },
      { label: 'Members', value: '30+' }
    ],
    services: ['Literature', 'Poetry', 'Publishing']
  },
  {
    id: "health",
    title: "Al Reza Health & Research Foundation",
    description: "A Health Wing of Jamiat Ul Ulama Isna Asharia Kargil, providing comprehensive healthcare services and conducting vital medical research for the community.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    color: "bg-blue-500",
    link: "/organizations/health",
    imageUrl: "/images/initiatives/al-reza-logo.png",
    stats: [
      { value: "50K+", label: "Patients Served" },
      { value: "1000+", label: "Surgeries Performed" },
      { value: "24/7", label: "Emergency Services" }
    ],
    services: [
      "Multi-Speciality Camps",
      "Blood Donation Drives",
      "Eye Camps",
      "Surgical Procedures",
      "Health Education",
      "Emergency Ambulance"
    ],
    contactInfo: {
      address: "Al Reza Medical Complex, Main Road, Kargil, UT Ladakh",
      email: "info@alrezahealth.org",
      phone: "+91-123-456-7890"
    },
    introduction: `The Al-Reza Healthcare & Research Foundation was founded on 5th August 2017 under the esteemed banner of Jamiat Ul Ulama Isna Asharia Kargil, led by its visionary president, Sheikh Nazir Mehdi Mohammadi. The foundation was established with the noble vision of improving healthcare standards and extending support to the underprivileged sections of society in Kargil and beyond. Officially registered on 24th March 2018, the foundation has since been a beacon of hope and service, driven by the unwavering commitment of its leadership and members.`,
    objectives: [
      "To provide selfless service in healthcare through super-speciality and multi-speciality camps",
      "To assist poor and needy patients with financial support for medical expenses",
      "To donate medical equipment and supplies to hospitals within the district",
      "To organize regular blood donation camps for District Hospital Kargil",
      "To support the district administration during disasters and natural calamities",
      "To provide 24-hour ambulance services for the needy",
      "To conduct health education and disease awareness programs",
      "To establish a state-of-the-art Fatimiya Super-Specialty Hospital in Kargil"
    ],
    achievements: {
      timeline: [
        {
          year: "2017",
          events: [
            "Multi-speciality camp at Itchoo, Kargil, benefiting 200 patients",
            "Health check-up for students at Al-Mehdi Yateem Trust's Boys Hostel",
            "Blood donation camp on Ashoora with 67 donors",
            "Mega eye camp with 800 check-ups and 16 surgeries"
          ]
        },
        {
          year: "2018",
          events: [
            "Mega multi-speciality camp benefiting 4,000 patients",
            "First advanced procedures like laparoscopy and micro-spine surgery",
            "Blood donation camp with 20 donors and 82 registered"
          ]
        },
        {
          year: "2019",
          events: [
            "Neurosurgery camp with 50 consultations and 6 surgeries",
            "Health camp at Parkachik benefiting 317 patients",
            "Orthopaedic knee camp with 900 consultations"
          ]
        },
        {
          year: "2020",
          events: [
            "COVID-19 pandemic support with N-95 masks and PPE kits",
            "Door-to-door campaigns and free ambulance services",
            "Donated ABG analyser cartridges worth ₹43,500"
          ]
        },
        {
          year: "2021",
          events: [
            "Distributed 10 oxygen concentrators",
            "19 knee replacement surgeries",
            "6 gynaecological surgeries"
          ]
        },
        {
          year: "2022",
          events: [
            "Super-speciality medical camps serving 1,200+ patients",
            "15 major surgeries in gynaecology and psychiatry",
            "Support for TB patients under PM TB Mukt Abhiyaan"
          ]
        },
        {
          year: "2023",
          events: [
            "Medical and blood donation camps during Muharram",
            "27 surgeries in knee replacement and gynaecological camps"
          ]
        },
        {
          year: "2024",
          events: [
            "Laparoscopic surgical camp with 12 major surgeries",
            "Eye camp with 750 consultations and 52 cataract surgeries",
            "Super-speciality camp with multiple specialists"
          ]
        }
      ]
    },
    executiveBody: [
      { position: "President", name: "Sheikh Nazir Mehdi Mohammadi" },
      { position: "Vice President", name: "To be updated" },
      { position: "General Secretary", name: "To be updated" },
      { position: "Spokesperson", name: "To be updated" },
      { position: "Cashier", name: "To be updated" }
    ],
    gallery: {
      categories: [
        {
          name: "Medical Camps",
          images: [
            { src: "/gallery/health/camps/camp1.jpg", alt: "Multi-speciality Medical Camp" },
            { src: "/gallery/health/camps/camp2.jpg", alt: "Eye Camp" }
          ]
        },
        {
          name: "Surgeries",
          images: [
            { src: "/gallery/health/surgeries/surgery1.jpg", alt: "Surgical Procedure" },
            { src: "/gallery/health/surgeries/surgery2.jpg", alt: "Operation Theatre" }
          ]
        },
        {
          name: "Blood Donation",
          images: [
            { src: "/gallery/health/blood/blood1.jpg", alt: "Blood Donation Camp" },
            { src: "/gallery/health/blood/blood2.jpg", alt: "Donors" }
          ]
        }
      ]
    }
  },
  {
    id: 'hawza-ilmiyah-batool',
    title: 'Hawza Ilmiyah Jamiat-ul-Batool',
    description: 'A women\'s college providing Islamic education.',
    imageUrl: '/images/initiatives/hawza-ilmiyah-batool.png',
    link: '/organizations/hawza-ilmiyah-batool',
    stats: [
      { label: 'Students', value: '100+' },
      { label: 'Programs', value: '3' }
    ],
    services: ['Women\'s Education', 'Islamic Studies', 'Religious Training']
  },
  {
    id: 'khitmat-guzaraan',
    title: 'Khitmat Guzaraan e Ahlulbait',
    description: 'A committee dedicated to helping poor families by providing basic necessities.',
    imageUrl: '/images/initiatives/khitmat-guzaraan-logo.png',
    link: '/organizations/khitmat-guzaraan',
    stats: [
      { label: 'Families', value: '200+' },
      { label: 'Support Programs', value: '5+' }
    ],
    services: ['Family Support', 'Basic Necessities', 'Social Welfare']
  },
  {
    id: 'al-askari-disaster',
    title: 'Al Askari Disaster Management',
    description: 'Responsible for managing disaster relief and supporting affected communities.',
    imageUrl: '/images/initiatives/juiakl-logo.png',
    link: '/organizations/al-askari-disaster',
    stats: [
      { label: 'Response Time', value: '<24h' },
      { label: 'Relief Programs', value: '10+' }
    ],
    services: ['Disaster Relief', 'Emergency Response', 'Community Support']
  }
]; 