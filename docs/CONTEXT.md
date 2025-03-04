# JUIAKL Website Project Context

## 🌐 Project Overview

### Core Concept
The JUIAKL website is a **Single Page Application (SPA)** designed to serve the **Jamiat ul Ulama Isna Asharia Kargil Ladakh** religious organization.

### Key Architecture
- **Primary Domain:** juiakl.org
- **Subdomain Ecosystem:** Multiple organizational websites
- **Technology:** React with Next.js (App Router)

## 🏗️ Website Components & Features

### 1. Header Configuration
- **Layout:**
  - Logo: Left-aligned
  - Navigation: Right-aligned
  - Social Media: Above navigation menu

### 2. Dynamic Content Sections

#### Hero Banner
- 🖼️ Adaptive, theme-based full-screen display
- High-resolution imagery
- Event and organizational highlights

#### Islamic Calendar Card
- 📅 Dual-calendar display
  - Gregorian date
  - Islamic calendar date
- Important religious event markers

#### Events Management
- 🎉 Event Card System
  - 3-4 expandable event cards
  - Detailed event page navigation
  - Live streaming capabilities

### 3. Content Ecosystem

| Section | Purpose | Media Types |
|---------|---------|-------------|
| Friday Sermon | Religious discourse updates | Audio/Video |
| Gallery | Organizational memory | Images, Videos |
| Majalis | Religious gathering info | Textual, Media |
| Prayer Times | Scheduling | Calendrical Data |
| Organizational Projects | Initiative showcase | Multimedia |

## 🌐 Subdomain Strategy

### Affiliated Organization Websites

| Subdomain | Organization | Focus |
|-----------|--------------|--------|
| projectcare.juiakl.org | Project Care | Community Services |
| fatimahospital.juiakl.org | Fatima Hospital | Healthcare |
| orphanage.juiakl.org | Orphanage Home | Child Welfare |
| highschool.juiakl.org | High School | Education |
| girlsorphanage.juiakl.org | Girls Orphan School | Female Education |
| media.juiakl.org | Media Cell | Communication |

### Subdomain Design Principles
- 🔍 Dedicated landing pages
- 🖼️ Consistent branding
- 📊 Mission and project details
- 🔄 Regular content updates

## 💻 Technical Specifications

### Frontend
- React.js
- Next.js (App Router)
- TypeScript

### Potential Backend
- Node.js
- Express.js

### Data Management
- MongoDB
- Firebase

### Hosting Options
- Vercel
- AWS

## 🚀 User Experience Enhancements

- Single Page Application (SPA)
- Smooth inter-section transitions
- Lazy loading optimization
- Mobile-responsive design
- Dark/Light mode support

## 🔮 Future Development Roadmap

- [ ] Live event streaming integration
- [ ] Comprehensive donation portal
- [ ] Personalized user accounts
- [ ] Multilingual support (Arabic, Urdu, English)

## 🛠️ Development Setup

### Quick Start
```bash
# Initialize project
npx create-next-app@latest juiakl-website --ts --use-npm

# Navigate and install
cd juiakl-website
npm install
```

### Project Structure
```
juiakl-website/
├── public/           # Static assets
├── components/       # Reusable UI components
├── pages/            # Page components
│   ├── index.tsx
│   └── ...
├── styles/           # Styling
├── utils/            # Utility functions
└── next.config.js    # Configuration
```

## 💡 Guiding Philosophy

This website aims to create a **seamless, informative, and engaging digital platform** that represents the JUIAKL organization's mission, connects with the community, and showcases its diverse initiatives.

---

**Crafted with dedication to serve the Jamiat ul Ulama Isna Asharia Kargil Ladakh community** 🕌
