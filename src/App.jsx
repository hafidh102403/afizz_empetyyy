import { useState } from "react";
import "./App.css";
import profileImage from "./assets/profile.jpeg";

/* =========================================================
   EXPERIENCE
========================================================= */

const experiences = [
  {
    date: "DEC 2025 – JUN 2026",
    company: "PERPUSTAKAAN POLITEKNIK APP JAKARTA",
    role: {
      en: "LIBRARY STAFF",
      id: "STAF PERPUSTAKAAN",
    },
    description: {
      en: [
        "Supported daily library operations and services.",
        "Assisted students and library users with their needs.",
        "Managed library services and maintained an organized environment.",
        "Supported the management and monitoring of library facilities.",
      ],
      id: [
        "Mendukung kegiatan operasional dan pelayanan perpustakaan sehari-hari.",
        "Membantu mahasiswa dan pengguna perpustakaan dalam memenuhi kebutuhan mereka.",
        "Mengelola layanan perpustakaan dan menjaga lingkungan tetap tertata.",
        "Mendukung pengelolaan dan monitoring fasilitas perpustakaan.",
      ],
    },
  },

  {
    date: "DEC 2025 – JUN 2026",
    company: "POLITEKNIK APP JAKARTA",
    role: {
      en: "WEB DEVELOPER INTERN",
      id: "WEB DEVELOPER INTERN",
    },
    description: {
      en: [
        "Developed a web-based library locker management system.",
        "Implemented locker borrowing and return features.",
        "Developed dashboard and monitoring features.",
        "Used Laravel and MySQL for application development.",
      ],
      id: [
        "Mengembangkan sistem manajemen loker perpustakaan berbasis web.",
        "Mengimplementasikan fitur peminjaman dan pengembalian loker.",
        "Mengembangkan fitur dashboard dan monitoring.",
        "Menggunakan Laravel dan MySQL dalam pengembangan aplikasi.",
      ],
    },
  },

  {
    date: "AUG 2024 – JAN 2025",
    company: "PT. PRAWATHIYA KARSA PRADIPTHA",
    role: {
      en: "MOBILE DEVELOPER & QA",
      id: "MOBILE DEVELOPER & QA",
    },
    description: {
      en: [
        "Developed mobile application features for Mobile LOS using Flutter and Dart.",
        "Worked with Java and Android Studio during mobile application development.",
        "Implemented and supported application features based on project requirements.",
        "Performed QA testing activities for Mobile LCS.",
        "Created test scenarios, performed functional testing, identified bugs, and reported issues.",
        "Performed retesting to verify fixes and validate application functionality.",
      ],
      id: [
        "Mengembangkan fitur aplikasi mobile Mobile LOS menggunakan Flutter dan Dart.",
        "Menggunakan Java dan Android Studio dalam proses pengembangan aplikasi mobile.",
        "Mengimplementasikan dan mendukung pengembangan fitur berdasarkan kebutuhan proyek.",
        "Melakukan aktivitas pengujian QA pada Mobile LCS.",
        "Membuat test scenario, melakukan functional testing, mengidentifikasi bug, dan melaporkan masalah.",
        "Melakukan retesting untuk memastikan perbaikan bug dan validasi fungsi aplikasi.",
      ],
    },
  },
];

/* =========================================================
   PROJECTS
========================================================= */

const projects = [
  {
    number: "01",
    title: "BagSpace",
    category: "WEB APPLICATION",
    description: {
      en: "Web-based library locker management system for managing locker availability, borrowing, monitoring, and user activities.",
      id: "Sistem manajemen loker perpustakaan berbasis web untuk mengelola ketersediaan loker, peminjaman, monitoring, dan aktivitas pengguna.",
    },
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/projects/bagspace.jpeg",
  },

  {
    number: "02",
    title: "PMB MI Islamiyah GUPPI Cilengkrang",
    category: "WEB APPLICATION",
    description: {
      en: "New Student Admission (PMB) website for MI Islamiyah GUPPI Cilengkrang, featuring school information, educational programs, and the new student registration process.",
      id: "Website Penerimaan Peserta Didik Baru (PMB) untuk MI Islamiyah GUPPI Cilengkrang yang menyediakan informasi sekolah, program pendidikan, dan proses pendaftaran siswa baru.",
    },
    tags: ["Laravel", "PHP", "MySQL", "Tailwind CSS"],
    image: "/projects/mi1.jpeg",
  },

  {
    number: "03",
    title: "CashFlow",
    category: "WEB APPLICATION",
    description: {
      en: "Personal finance management application for recording income, expenses, savings, debts, reports, and financial activities.",
      id: "Aplikasi pengelolaan keuangan pribadi untuk mencatat pemasukan, pengeluaran, tabungan, utang piutang, laporan, dan aktivitas keuangan.",
    },
    tags: ["Laravel", "PHP", "MySQL"],
    image: "/projects/cashflow.jpeg",
  },

  {
    number: "04",
    title: "CBT System",
    category: "WEB APPLICATION",
    description: {
      en: "Computer Based Test system for online examinations, question management, student access, and examination results.",
      id: "Sistem Computer Based Test untuk pelaksanaan ujian online, pengelolaan soal, akses siswa, dan hasil ujian.",
    },
    tags: ["PHP", "MySQL", "Web"],
    image: "/projects/ujian-1.jpeg",
  },

  {
    number: "05",
    title: "Mobile LOS",
    category: "MOBILE DEVELOPER",
    description: {
      en: "Mobile application development project involving feature development and application implementation using Flutter, Dart, Java, and Android Studio.",
      id: "Proyek pengembangan aplikasi mobile yang meliputi pengembangan fitur dan implementasi aplikasi menggunakan Flutter, Dart, Java, dan Android Studio.",
    },
    tags: ["Flutter", "Dart", "Java", "Android Studio"],
    image: "/projects/los1.jpeg",
  },

  {
    number: "06",
    title: "Mobile LCS",
    category: "QUALITY ASSURANCE",
    description: {
      en: "Mobile application testing project involving test scenarios, functional testing, positive and negative testing, bug identification, bug reporting, and retesting.",
      id: "Proyek pengujian aplikasi mobile yang meliputi test scenario, functional testing, positive dan negative testing, identifikasi bug, pelaporan bug, dan retesting.",
    },
    tags: ["QA Testing", "Mobile", "Testing"],
    image: "/projects/mobile-lcs.jpeg",
  },
];

/* =========================================================
   CERTIFICATES
========================================================= */

const certificates = [
  {
    number: "01",
    title: "SERTIFIKAT KOMPETENSI (LSP UBSI)",
    category: "CERTIFICATE",
    year: "2024",
    detail: "SN : 62010 2514 0003229 2024",
    file: "/certificates/certificate-01.pdf",
  },

  {
    number: "02",
    title: "TOEFL PREDICTION TEST",
    category: "LANGUAGE CERTIFICATION",
    year: "2025",
    detail: "TOTAL SCORE : 510",
    file: "/certificates/certificate-02.pdf",
  },

  {
    number: "03",
    title: "UJI PROFISIENSI ERP ODOO PT. JIDOKA SYSTEM INDONESIA",
    category: "CERTIFICATION",
    year: "2025",
    detail: "SN : 2024",
    file: "/certificates/certificate-03.pdf",
  },
];

/* =========================================================
   SKILLS
========================================================= */

const qualityAssuranceSkills = [
  "Manual Testing",
  "Test Scenario",
  "Test Case",
  "Functional Testing",
  "Positive Testing",
  "Negative Testing",
  "Regression Testing",
  "Smoke Testing",
  "Retesting",
  "Bug Reporting",
  "UAT",
  "API Testing",
  "Test Documentation",
];

const webDevelopmentSkills = [
  "PHP",
  "Laravel",
  "MySQL",
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
];

const tools = [
  "Git / GitHub",
  "Postman",
  "Figma",
  "VS Code",
  "phpMyAdmin",
];

/* =========================================================
   QA WORKFLOW
========================================================= */

const qaWorkflow = [
  {
    number: "01",
    title: "TEST SCENARIO",
    description: {
      en: "Define the scenarios and conditions that need to be tested based on application requirements.",
      id: "Menentukan skenario dan kondisi yang perlu diuji berdasarkan kebutuhan aplikasi.",
    },
  },

  {
    number: "02",
    title: "TEST CASE",
    description: {
      en: "Prepare detailed test steps, test data, and expected results for each scenario.",
      id: "Menyiapkan langkah pengujian, data testing, dan hasil yang diharapkan untuk setiap skenario.",
    },
  },

  {
    number: "03",
    title: "FUNCTIONAL TESTING",
    description: {
      en: "Execute test cases to verify that application features work according to the expected behavior.",
      id: "Menjalankan test case untuk memastikan fitur aplikasi bekerja sesuai dengan yang diharapkan.",
    },
  },

  {
    number: "04",
    title: "BUG REPORTING",
    description: {
      en: "Identify unexpected behavior, document the issue, and report bugs with clear reproduction steps.",
      id: "Mengidentifikasi perilaku yang tidak sesuai, mendokumentasikan masalah, dan melaporkan bug dengan langkah reproduksi yang jelas.",
    },
  },

  {
    number: "05",
    title: "RETESTING",
    description: {
      en: "Verify the reported issue after the fix and make sure the affected functionality works correctly.",
      id: "Memastikan kembali bug yang telah diperbaiki dan memastikan fitur terkait berjalan dengan baik.",
    },
  },
];

/* =========================================================
   PROJECT PREVIEW
========================================================= */

function ProjectPreview({ project }) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="project-preview">
      {!imageError ? (
        <img
          src={project.image}
          alt={`${project.title} project`}
          className="project-preview-image"
          loading="lazy"
          onError={() => setImageError(true)}
        />
      ) : (
        <div className="project-image-error">
          <span>IMAGE NOT FOUND</span>
          <small>{project.image}</small>
        </div>
      )}
    </div>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  // English is the default language
  const [language, setLanguage] = useState("en");
  const [moreOpen, setMoreOpen] = useState(false);

  // Language check
  const isEnglish = language === "en";

  return (
    <div className="portfolio">

      {/* =====================================================
          NAVBAR
      ===================================================== */}

      <nav className="navbar">

        <a href="#home" className="navbar-name">
          HAFIDH NUR SYA BANI
        </a>

        <div className="navbar-menu">

          <a href="#summary">
            {isEnglish ? "SUMMARY" : "RINGKASAN"}
          </a>

          <a href="#experience">
            {isEnglish ? "EXPERIENCE" : "PENGALAMAN"}
          </a>

          <a href="#qa-testing">
            QA & TESTING
          </a>

          <a href="#projects">
            {isEnglish ? "PROJECTS" : "PROYEK"}
          </a>

          <div className="navbar-dropdown">

            <button
              type="button"
              className="navbar-dropdown-button"
              onClick={() => setMoreOpen(!moreOpen)}
            >
              {isEnglish ? "MORE" : "LAINNYA"}

              <span
                className={
                  moreOpen
                    ? "dropdown-arrow open"
                    : "dropdown-arrow"
                }
              >
                ▾
              </span>
            </button>

            {moreOpen && (
              <div className="navbar-dropdown-menu">

                <a
                  href="#education"
                  onClick={() => setMoreOpen(false)}
                >
                  {isEnglish
                    ? "EDUCATION"
                    : "PENDIDIKAN"}
                </a>

                <a
                  href="#qa-case-study"
                  onClick={() => setMoreOpen(false)}
                >
                  {isEnglish
                    ? "QA CASE STUDY"
                    : "STUDI KASUS QA"}
                </a>

                <a
                  href="#certificates"
                  onClick={() => setMoreOpen(false)}
                >
                  {isEnglish
                    ? "CERTIFICATES"
                    : "SERTIFIKAT"}
                </a>

                <a
                  href="#skills"
                  onClick={() => setMoreOpen(false)}
                >
                  {isEnglish
                    ? "SKILLS"
                    : "KEAHLIAN"}
                </a>

              </div>
            )}

          </div>

          <a href="#contact">
            {isEnglish ? "CONTACT" : "KONTAK"}
          </a>

        </div>

        {/* =====================================================
            LANGUAGE SWITCHER
        ===================================================== */}

        <div className="navbar-language">

          <span className="globe">
            ◎
          </span>

          <button
            type="button"
            className={
              language === "id"
                ? "language-active"
                : "language-muted"
            }
            onClick={() => setLanguage("id")}
          >
            INA
          </button>

          <span className="language-divider">
            |
          </span>

          <button
            type="button"
            className={
              language === "en"
                ? "language-active"
                : "language-muted"
            }
            onClick={() => setLanguage("en")}
          >
            EN
          </button>

        </div>

      </nav>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section
        className="profile-section"
        id="home"
      >

        <div className="profile-content">

          <div className="profile-label">
            QA ENGINEER
          </div>

          <h1 className="profile-title">

            {isEnglish
              ? "HELLO! I'M"
              : "HALO! SAYA"}

            <br />

            HAFIDH

            <br />

            <span>
              NUR SYA BANI.
            </span>

          </h1>

          <p className="profile-description">

            {isEnglish
              ? "QA Engineer focused on software testing, quality assurance, and application validation, with additional experience in web and mobile development."
              : "QA Engineer yang berfokus pada software testing, quality assurance, dan validasi aplikasi, dengan pengalaman tambahan dalam pengembangan web dan mobile."}

          </p>

          <div className="profile-buttons">

            <a
              href="/cv-hafidh.pdf"
              download="CV-Hafidh-Nur-Sya-Bani.pdf"
              className="profile-button button-dark"
            >
              <span className="download-icon">
                ↓
              </span>

              {isEnglish
                ? "DOWNLOAD RESUME"
                : "DOWNLOAD CV"}
            </a>

            <a
              href="#projects"
              className="profile-button button-outline"
            >
              {isEnglish
                ? "VIEW PROJECTS"
                : "LIHAT PROYEK"}
            </a>

          </div>

        </div>

        <div className="profile-image-area">

          <div className="profile-image">

            <img
              src={profileImage}
              alt="Hafidh Nur Sya Bani"
            />

          </div>

        </div>

      </section>

      {/* =====================================================
          SUMMARY
      ===================================================== */}

      <section
        className="content-section summary-section"
        id="summary"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "SUMMARY"
                : "RINGKASAN"}
            </h2>

            <p>
              {isEnglish
                ? "PROFILE & PROFESSIONAL OVERVIEW"
                : "PROFIL & GAMBARAN PROFESIONAL"}
            </p>

          </div>

        </div>

        <div className="summary-layout">

          <div className="summary-side">

            <span>
              QA
              <br />
              ENGINEER
            </span>

          </div>

          <div className="summary-card">

            <p className="summary-quote">
              "Find the Problem. Build the Solution. Make It Better."
            </p>

            <p className="summary-text">

              {isEnglish
                ? "I am an Information Systems graduate with experience in Quality Assurance, software testing, and application development. I have experience creating test scenarios and test cases, performing functional, positive, negative, regression, and API testing, identifying and reporting bugs, conducting retesting, and validating application functionality. I also have development experience using Laravel, PHP, MySQL, Flutter, Dart, Java, and related technologies."
                : "Saya merupakan lulusan Sistem Informasi dengan pengalaman di bidang Quality Assurance, software testing, dan pengembangan aplikasi. Saya memiliki pengalaman membuat test scenario dan test case, melakukan functional, positive, negative, regression, dan API testing, mengidentifikasi serta melaporkan bug, melakukan retesting, dan memvalidasi fungsi aplikasi. Saya juga memiliki pengalaman pengembangan menggunakan Laravel, PHP, MySQL, Flutter, Dart, Java, dan teknologi terkait."}

            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section
        className="content-section experience-section"
        id="experience"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "EXPERIENCE"
                : "PENGALAMAN"}
            </h2>

            <p>
              {isEnglish
                ? "WORK HISTORY"
                : "RIWAYAT PEKERJAAN"}
            </p>

          </div>

        </div>

        <div className="experience-list">

          {experiences.map(
            (experience, index) => (

              <article
                className="experience-card"
                key={index}
              >

                <div className="experience-date">
                  {experience.date}
                </div>

                <div className="experience-detail">

                  <h3>
                    {experience.company}
                  </h3>

                  <h4>
                    {isEnglish
                      ? experience.role.en
                      : experience.role.id}
                  </h4>

                  <ul className="experience-description">

                    {(isEnglish
                      ? experience.description.en
                      : experience.description.id
                    ).map(
                      (item, itemIndex) => (
                        <li key={itemIndex}>
                          {item}
                        </li>
                      )
                    )}

                  </ul>

                </div>

              </article>

            )
          )}

        </div>

      </section>

      {/* =====================================================
          QA TESTING
      ===================================================== */}

      <section
        className="content-section qa-testing-section"
        id="qa-testing"
      >

        <div className="section-heading">

          <div>

            <h2>
              QA & TESTING
            </h2>

            <p>
              {isEnglish
                ? "QA ENGINEER WORKFLOW"
                : "ALUR KERJA QA ENGINEER"}
            </p>

          </div>

        </div>

        <div className="qa-intro">

          <div className="qa-intro-label">
            {isEnglish
              ? "QA ENGINEERING PROCESS"
              : "PROSES QA ENGINEER"}
          </div>

          <p>
            {isEnglish
              ? "A structured software testing process focused on validating application functionality, identifying defects, documenting issues, and verifying fixes to improve software quality."
              : "Proses software testing terstruktur yang berfokus pada validasi fungsi aplikasi, identifikasi defect, dokumentasi masalah, dan verifikasi perbaikan untuk meningkatkan kualitas software."}
          </p>

        </div>

        <div className="qa-workflow">

          {qaWorkflow.map(
            (step, index) => (

              <article
                className="qa-card"
                key={step.number}
              >

                <div className="qa-card-top">

                  <span className="qa-number">
                    {step.number}
                  </span>

                  {index <
                    qaWorkflow.length - 1 && (
                    <span className="qa-arrow">
                      →
                    </span>
                  )}

                </div>

                <h3>
                  {step.title}
                </h3>

                <p>
                  {isEnglish
                    ? step.description.en
                    : step.description.id}
                </p>

              </article>

            )
          )}

        </div>

        <div className="qa-tools">

          <div className="qa-tools-heading">

            <span>
              {isEnglish
                ? "QA ENGINEER FOCUS"
                : "FOKUS QA ENGINEER"}
            </span>

            <h3>
              {isEnglish
                ? "TESTING ACTIVITIES"
                : "AKTIVITAS TESTING"}
            </h3>

          </div>

          <div className="qa-focus-list">

            <span>
              Functional Testing
            </span>

            <span>
              Positive Testing
            </span>

            <span>
              Negative Testing
            </span>

            <span>
              Regression Testing
            </span>

            <span>
              {isEnglish
                ? "Bug Identification"
                : "Identifikasi Bug"}
            </span>

            <span>
              {isEnglish
                ? "Bug Reporting"
                : "Pelaporan Bug"}
            </span>

            <span>
              API Testing
            </span>

            <span>
              Retesting
            </span>

          </div>

        </div>

      </section>

      {/* =====================================================
          QA CASE STUDY
      ===================================================== */}

      <section
        className="content-section qa-case-study-section"
        id="qa-case-study"
      >

        <div className="section-heading">

          <div>

            <h2>
              QA CASE STUDY
            </h2>

            <p>
              {isEnglish
                ? "MOBILE LCS · SOFTWARE TESTING"
                : "MOBILE LCS · SOFTWARE TESTING"}
            </p>

          </div>

        </div>

        <div className="qa-case-study">

          <div className="qa-case-study-header">

            <div>

              <span>
                MOBILE LCS
              </span>

              <h3>
                SOFTWARE TESTING
              </h3>

            </div>

            <div className="qa-case-study-label">
              QA / TESTING
            </div>

          </div>

          <div className="qa-case-flow">

            <div className="qa-case-step">
              <span>01</span>
              <h4>TEST SCENARIO</h4>
            </div>

            <div className="qa-case-arrow">
              ↓
            </div>

            <div className="qa-case-step">
              <span>02</span>
              <h4>LOGIN FUNCTIONALITY</h4>
            </div>

            <div className="qa-case-arrow">
              ↓
            </div>

            <div className="qa-case-step">
              <span>03</span>
              <h4>POSITIVE & NEGATIVE TESTING</h4>
            </div>

            <div className="qa-case-arrow">
              ↓
            </div>

            <div className="qa-case-step">
              <span>04</span>
              <h4>BUG IDENTIFICATION</h4>
            </div>

            <div className="qa-case-arrow">
              ↓
            </div>

            <div className="qa-case-step">
              <span>05</span>
              <h4>BUG REPORT</h4>
            </div>

            <div className="qa-case-arrow">
              ↓
            </div>

            <div className="qa-case-step">
              <span>06</span>
              <h4>RETESTING</h4>
            </div>

          </div>

          <div className="qa-case-study-footer">

            <p>
              {isEnglish
                ? "Testing workflow focused on validating login functionality, identifying issues, reporting bugs, and verifying fixes through retesting."
                : "Alur pengujian yang berfokus pada validasi fungsi login, identifikasi masalah, pelaporan bug, dan verifikasi perbaikan melalui retesting."}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section
        className="content-section education-section"
        id="education"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "EDUCATION"
                : "PENDIDIKAN"}
            </h2>

            <p>
              {isEnglish
                ? "ACADEMIC BACKGROUND"
                : "LATAR BELAKANG PENDIDIKAN"}
            </p>

          </div>

        </div>

        <div className="education-card">

          <div className="education-date">
            2021 – 2025
          </div>

          <div className="education-detail">

            <h3>
              BINA SARANA INFORMATIKA UNIVERSITY
            </h3>

            <h4>
              INFORMATION SYSTEMS
            </h4>

            <p>
              {isEnglish
                ? "Studied Information Systems with a focus on information technology, software development, databases, system analysis, application implementation, and software quality."
                : "Mempelajari Sistem Informasi dengan fokus pada teknologi informasi, pengembangan software, database, analisis sistem, implementasi aplikasi, dan kualitas software."}
            </p>

          </div>

        </div>

      </section>

      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section
        className="content-section projects-section"
        id="projects"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "PROJECTS"
                : "PROYEK"}
            </h2>

            <p>
              {isEnglish
                ? "SELECTED WORKS & PROJECT EXPERIENCE"
                : "HASIL KARYA & PENGALAMAN PROYEK"}
            </p>

          </div>

          <div className="project-scroll-hint">

            <span>
              {isEnglish
                ? "DRAG / SCROLL"
                : "GESER / SCROLL"}
            </span>

            <span>
              →
            </span>

          </div>

        </div>

        <div className="projects-grid">

          {projects.map((project) => (

            <article
              className="project-card"
              key={project.number}
            >

              <ProjectPreview
                project={project}
              />

              <div className="project-card-info">

                <div className="project-card-number">
                  {project.number}
                </div>

                <div className="project-card-heading">

                  <span>
                    {project.category}
                  </span>

                  <h3>
                    {project.title}
                  </h3>

                </div>

                <p>
                  {isEnglish
                    ? project.description.en
                    : project.description.id}
                </p>

                <div className="project-tags">

                  {project.tags.map((tag) => (

                    <span key={tag}>
                      {tag}
                    </span>

                  ))}

                </div>

              </div>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          CERTIFICATES
      ===================================================== */}

      <section
        className="content-section certificates-section"
        id="certificates"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "CERTIFICATES"
                : "SERTIFIKAT"}
            </h2>

            <p>
              {isEnglish
                ? "CERTIFICATIONS & ACHIEVEMENTS"
                : "SERTIFIKASI & PENCAPAIAN"}
            </p>

          </div>

        </div>

        <div className="certificates-list">

          {certificates.map((certificate) => (

            <article
              className="certificate-card"
              key={certificate.number}
            >

              <div className="certificate-number">
                {certificate.number}
              </div>

              <div className="certificate-main">

                <span className="certificate-category">
                  {certificate.category}
                </span>

                <h3>
                  {certificate.title}
                </h3>

                <p>
                  {certificate.detail}
                </p>

              </div>

              <div className="certificate-year">
                {certificate.year}
              </div>

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
                className="certificate-view"
              >

                {isEnglish
                  ? "VIEW CERTIFICATE"
                  : "LIHAT SERTIFIKAT"}

                <span>
                  ↗
                </span>

              </a>

            </article>

          ))}

        </div>

      </section>

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <section
        className="content-section skills-section"
        id="skills"
      >

        <div className="section-heading">

          <div>

            <h2>
              {isEnglish
                ? "SKILLS"
                : "KEAHLIAN"}
            </h2>

            <p>
              {isEnglish
                ? "TECHNICAL & PROFESSIONAL SKILLS"
                : "KEAHLIAN TEKNIS & PROFESIONAL"}
            </p>

          </div>

        </div>

        <div className="skills-wrapper">

          <div className="skills-row">

            <div className="skills-title">

              <span>
                01
              </span>

              <h3>
                QA ENGINEER
              </h3>

            </div>

            <div className="skills-list">

              {qualityAssuranceSkills.map(
                (skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                )
              )}

            </div>

          </div>

          <div className="skills-row">

            <div className="skills-title">

              <span>
                02
              </span>

              <h3>
                WEB DEVELOPMENT
              </h3>

            </div>

            <div className="skills-list">

              {webDevelopmentSkills.map(
                (skill) => (

                  <span key={skill}>
                    {skill}
                  </span>

                )
              )}

            </div>

          </div>

          <div className="skills-row">

            <div className="skills-title">

              <span>
                03
              </span>

              <h3>
                TOOLS
              </h3>

            </div>

            <div className="skills-list">

              {tools.map(
                (tool) => (

                  <span key={tool}>
                    {tool}
                  </span>

                )
              )}

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          CONTACT
      ===================================================== */}

      <section
        className="content-section contact-section"
        id="contact"
      >

        <div className="contact-layout">

          <div className="contact-title">

            <p>
              {isEnglish
                ? "HAVE A PROJECT OR OPPORTUNITY?"
                : "PUNYA PROJECT ATAU KESEMPATAN?"}
            </p>

            <h2>

              {isEnglish ? (
                <>
                  LET'S
                  <br />
                  TALK.
                </>
              ) : (
                <>
                  MARI
                  <br />
                  BICARA.
                </>
              )}

            </h2>

          </div>

          <div className="contact-info">

            <p>
              {isEnglish
                ? "I'm open to opportunities related to QA Engineering, Software Testing, Quality Assurance, Web Development, and other technology-related roles."
                : "Saya terbuka untuk kesempatan di bidang QA Engineering, Software Testing, Quality Assurance, Web Development, dan bidang teknologi lainnya."}
            </p>

            <div className="contact-links">

              <a
                href="mailto:hafidsyabani24@gmail.com"
                className="contact-link"
              >
                <span>
                  GMAIL
                </span>

                <span>
                  ↗
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/hafid-syabani"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>
                  LINKEDIN
                </span>

                <span>
                  ↗
                </span>
              </a>

              <a
                href="https://wa.me/6282129096033"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <span>
                  WHATSAPP
                </span>

                <span>
                  ↗
                </span>
              </a>

            </div>

          </div>

        </div>

        <footer className="contact-footer">

          <span>
            HAFIDH NUR SYA BANI
          </span>

          <span>
            QA ENGINEER
          </span>

          <span>
            © 2026
          </span>

        </footer>

      </section>

    </div>
  );
}

export default App;