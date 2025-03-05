export const initiatives = [
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
    imageUrl: "/Logo/alreza.png",
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
    imageUrl: "/Logo/jamelogo.png",
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
    id: "welfare",
    title: "Az-Zehra Welfare Society",
    description: "Supporting underprivileged families and providing essential community services.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "bg-purple-500",
    link: "/organizations/welfare",
    imageUrl: "/Logo/az-zehralogo.png",
    stats: [
      { value: "500+", label: "Families Supported" },
      { value: "₹50L+", label: "Annual Aid" },
      { value: "100+", label: "Volunteers" }
    ],
    services: [
      "Financial Aid",
      "Skill Training",
      "Education Support",
      "Healthcare Aid",
      "Housing Support",
      "Emergency Relief"
    ],
    contactInfo: {
      address: "Az-Zehra Center, Welfare Complex, Kargil",
      email: "help@azzehrawelfare.org",
      phone: "+91-123-456-7892"
    }
  },
  {
    id: "dawah",
    title: "Dawah & Publications",
    description: "Spreading Islamic knowledge through publications, lectures, and digital media.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "bg-yellow-500",
    link: "/organizations/dawah",
    imageUrl: "/Logo/makatiblogo.png",
    stats: [
      { value: "100+", label: "Publications" },
      { value: "50K+", label: "Digital Reach" },
      { value: "200+", label: "Annual Programs" }
    ],
    services: [
      "Book Publishing",
      "Digital Content",
      "Lectures & Seminars",
      "Youth Programs",
      "Research Work",
      "Translations"
    ],
    contactInfo: {
      address: "Islamic Publication House, Main Market, Kargil",
      email: "info@dawahpublications.org",
      phone: "+91-123-456-7893"
    }
  },
  {
    id: "youth",
    title: "Hayat e Fatimiya (Women)",
    description: "Empowering young Muslims through leadership programs and skill development.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "bg-pink-500",
    link: "/organizations/youth",
    imageUrl: "/Logo/hayatftimalogo.png",
    stats: [
      { value: "1000+", label: "Active Members" },
      { value: "30+", label: "Annual Programs" },
      { value: "200+", label: "Success Stories" }
    ],
    services: [
      "Leadership Training",
      "Skill Development",
      "Islamic Education",
      "Career Counseling",
      "Health Programs",
      "Community Service"
    ],
    contactInfo: {
      address: "Hayat e Fatimiya Center, Women's Complex, Kargil",
      email: "contact@hayatefatimiya.org",
      phone: "+91-123-456-7894"
    }
  },
  {
    id: "women",
    title: "Jamiat e Batool (Women)",
    description: "Promoting women's education, rights, and economic independence.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    color: "bg-red-500",
    link: "/organizations/women",
    imageUrl: "/Logo/jamiatbatoollogo.png",
    stats: [
      { value: "2000+", label: "Members" },
      { value: "40+", label: "Programs" },
      { value: "300+", label: "Entrepreneurs" }
    ],
    services: [
      "Education Programs",
      "Business Training",
      "Rights Awareness",
      "Health Programs",
      "Social Support",
      "Cultural Events"
    ],
    contactInfo: {
      address: "Jamiat e Batool Center, Women's Zone, Kargil",
      email: "info@jamiatebatool.org",
      phone: "+91-123-456-7895"
    }
  },
  {
    id: "finance",
    title: "Khidmat Guzaran Ahl Albaith",
    description: "Managing financial resources and implementing development projects.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-indigo-500",
    link: "/organizations/finance",
    imageUrl: "/Logo/khidmatlogo.png",
    stats: [
      { value: "₹2Cr+", label: "Annual Budget" },
      { value: "50+", label: "Projects" },
      { value: "95%", label: "Efficiency Rate" }
    ],
    services: [
      "Financial Planning",
      "Project Management",
      "Resource Allocation",
      "Development Work",
      "Infrastructure",
      "Auditing"
    ],
    contactInfo: {
      address: "Khidmat Center, Main Complex, Kargil",
      email: "info@khidmatguzaran.org",
      phone: "+91-123-456-7896"
    }
  },
  {
    id: "media",
    title: "Media Cell",
    description: "Handling public relations and managing digital presence across platforms.",
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "bg-orange-500",
    link: "/organizations/media",
    imageUrl: "/Logo/mediacell.png",
    stats: [
      { value: "100K+", label: "Digital Reach" },
      { value: "500+", label: "Media Releases" },
      { value: "24/7", label: "Coverage" }
    ],
    services: [
      "Digital Media",
      "Public Relations",
      "Content Creation",
      "Event Coverage",
      "Social Media",
      "Press Relations"
    ],
    contactInfo: {
      address: "Media Center, JUIAKL Complex, Kargil",
      email: "media@juiakl.org",
      phone: "+91-123-456-7897"
    }
  }
]; 