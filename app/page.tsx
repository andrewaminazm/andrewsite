export default function Home() {
  return (
    <div className="min-h-screen bg-[#0f1419] text-[#e2e8f0]">
      {/* Sticky nav */}
      <nav className="sticky top-0 z-10 border-b border-white/10 bg-[#0f1419]/95 backdrop-blur">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-4 px-6 py-3 text-sm">
          <a href="#about" className="text-[#94a3b8] hover:text-[#60a5fa]">About</a>
          <a href="#experience" className="text-[#94a3b8] hover:text-[#60a5fa]">Experience</a>
          <a href="#writing" className="text-[#94a3b8] hover:text-[#60a5fa]">Writing</a>
          <a href="#certifications" className="text-[#94a3b8] hover:text-[#60a5fa]">Certifications</a>
          <a href="#contact" className="text-[#94a3b8] hover:text-[#60a5fa]">Contact</a>
          <a href="/Andrew_Amin_Azmy_CV.pdf" download className="rounded-full bg-[#3b82f6] px-4 py-2 text-white hover:bg-[#2563eb]">
            Download CV
          </a>
        </div>
      </nav>

      {/* Hero */}
      <header id="about" className="border-b border-white/10 bg-[#1a2332]/80 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-10">
          <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
            <img
              src="/images/page_04_img_01.jpeg"
              alt="Andrew Amin Azmy"
              className="h-36 w-36 shrink-0 rounded-full border-2 border-[#3b82f6]/50 object-cover object-center shadow-lg sm:h-44 sm:w-44 md:h-52 md:w-52"
            />
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
                Andrew Amin Azmy
              </h1>
              <p className="mt-1 text-lg text-[#94a3b8]">
                Senior Automation Test Engineer
              </p>
              <p className="mt-3 max-w-xl text-sm text-[#cbd5e1]">
                QA Engineer focused on test automation (UI & API), security testing with OWASP ZAP, and performance testing with JMeter. I build frameworks and workflows that save time, catch bugs early, and scale quality — open to new opportunities.
              </p>
              <div className="mt-4 flex flex-wrap gap-6 text-sm text-[#94a3b8]">
                <span><strong className="text-[#93c5fd]">10+</strong> years QA &amp; automation</span>
                <span><strong className="text-[#93c5fd]">3</strong> languages (AR, EN, FR)</span>
                <span><strong className="text-[#93c5fd]">500+</strong> automated tests maintained</span>
                <span>Regression time reduced by <strong className="text-[#93c5fd]">40%</strong></span>
                <span>Riyadh · <strong className="text-[#93c5fd]">Open to opportunities</strong></span>
              </div>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-sm text-[#94a3b8]">
                <span>📱 +966 547 984 666</span>
                <span>📞 +20 121 178 2855</span>
                <a href="mailto:andrewamin878@gmail.com" className="text-[#60a5fa] hover:underline">
                  ✉ andrewamin878@gmail.com
                </a>
                <a href="https://www.linkedin.com/in/andrew-amin-48763a194/" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline">
                  💼 LinkedIn
                </a>
                <a href="https://github.com/andrewaminazm" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline">
                  GitHub
                </a>
                <span>📍 Riyadh, Saudi Arabia</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10">
        {/* Personal */}
        <section className="mb-12">
          <h2 className="section-title text-[#60a5fa]">Personal Info</h2>
          <div className="card grid gap-2 rounded-xl border border-white/5 bg-[#1a2332] p-5 sm:grid-cols-2">
            <p><span className="text-[#94a3b8]">Date of birth</span> August 1, 1992</p>
            <p><span className="text-[#94a3b8]">Nationality</span> Egyptian</p>
            <p><span className="text-[#94a3b8]">Marital status</span> Single</p>
            <p><span className="text-[#94a3b8]">Languages</span> Arabic (Native), English & French (Advanced)</p>
          </div>
        </section>

        {/* Core skills */}
        <section className="mb-12">
          <h2 className="section-title text-[#60a5fa]">Core Skills</h2>
          <div className="card flex flex-wrap gap-2 rounded-xl border border-white/5 bg-[#1a2332] p-5">
            {["Selenium", "Cypress", "Appium", "WebdriverIO", "Playwright", "JMeter", "Postman", "REST API", "OWASP ZAP", "TestNG", "CI/CD", "Git", "SQL", "Agile/Scrum"].map((s) => (
              <span key={s} className="rounded-full bg-[#3b82f6]/20 px-3 py-1 text-sm text-[#93c5fd]">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* Type of Projects & Domain */}
        <section className="mb-12">
          <h2 className="section-title text-[#60a5fa]">Type of Projects & Domain</h2>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { num: 1, name: "Bank domain" },
              { num: 2, name: "E-commerce domain" },
              { num: 3, name: "Insurance domain" },
              { num: 4, name: "E-marketing" },
              { num: 5, name: "Education systems" },
              { num: 6, name: "Gaming system" },
              { num: 7, name: "ERP & CRM systems" },
              { num: 8, name: "GPS navigator systems" },
              { num: 9, name: "Order tracking systems" },
              { num: 10, name: "Mail systems" },
            ].map((item) => (
              <div
                key={item.num}
                className="card flex items-center gap-3 rounded-xl border border-white/5 bg-[#1a2332] p-4"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#3b82f6]/30 text-sm font-semibold text-[#93c5fd]">
                  {item.num}
                </span>
                <span className="text-[#e2e8f0]">{item.name}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="mb-12 scroll-mt-20">
          <h2 className="section-title text-[#60a5fa]">Professional Experience</h2>
          <div className="space-y-6">
            {[
              { role: "Senior Automation Test Engineer", org: "General Organization for Social Insurance (GOSI)", period: "October 2024 – Present", location: "Riyadh, Saudi Arabia", bullets: ["Lead design and implementation of test automation frameworks for enterprise social insurance applications (web and mobile).", "Architect and maintain end-to-end automated test suites using Cypress, Selenium WebDriver, and WebdriverIO for web; Appium for Android and iOS.", "Implement API automation with Postman and REST Assured; validate microservices integration and contract compliance.", "Conduct performance and load testing with JMeter; define scenarios and analyze results to validate scalability and reliability.", "Run security vulnerability assessments with OWASP ZAP; define and follow security testing protocols.", "Integrate automated tests into CI/CD (Jenkins, Azure DevOps); maintain pipelines and improve feedback time.", "Mentor junior QA engineers; run knowledge-transfer sessions on automation design, patterns, and best practices.", "Participate in Agile/Scrum ceremonies; align test strategy with sprint goals and quality criteria."] },
              { role: "Senior Automation Test Engineer", org: "Saudi Authority for Data and Artificial Intelligence (SDAIA)", period: "February 2022 – September 2024", location: "Riyadh", bullets: ["Drive automation testing for AI-driven government applications and national data platforms.", "Build and maintain mobile automation with Appium and WebdriverIO for cross-platform (iOS/Android) regression.", "Implement web functional automation with Cypress; achieve and report on test coverage for critical flows.", "Design and execute API test strategies; perform performance benchmarking and security assessments.", "Define and document UI automation standards and best practices; align multiple project teams.", "Contribute to QA processes and quality gates for critical national data infrastructure."] },
              { role: "Software Quality Assurance Engineer", org: "Trufla Technology", period: "September 2021 – January 2022", location: "Cairo", bullets: ["Execute full testing for Android, iOS, and web insurance applications (functional, regression, smoke).", "Perform performance testing; define load profiles and analyze responsiveness under load.", "Conduct API testing and validation for backend and third-party integrations; document expected behavior.", "Implement security testing; identify and document vulnerabilities; support remediation verification.", "Develop and maintain functional automation using Selenium, Cypress, Protractor, Appium, and Katalon; integrate with CI where applicable."] },
              { role: "QA Team Lead", org: "Devartlab", period: "September 2020 – September 2021", location: "Cairo", bullets: ["Lead and mentor the software support and testing team; assign tasks and ensure quality deliverables.", "Manage daily test execution; establish and improve QA workflows, test documentation, and reporting.", "Execute regression testing for all software updates and releases; own release sign-off criteria.", "Conduct performance and security testing; track findings and retest after fixes.", "Perform database testing and validation; verify data integrity, constraints, and migration scripts.", "Develop mobile automation (iOS/Android) to reduce manual regression effort.", "Create and maintain user documentation, training materials, and technical guides for products (ERP, LiveDoctor, CMS, e‑commerce, HR)."] },
              { role: "Quality Control Engineer", org: "United for Transport", period: "September 2019 – September 2020", location: "Cairo", bullets: ["Own functional testing from test planning through execution and reporting; maintain test plans and cases.", "Conduct performance and security testing; document results and support root-cause analysis.", "Prepare and maintain test plans, test cases, traceability, and quality documentation.", "Support software deployment and configuration at client sites; perform smoke and sanity checks post-deploy.", "Administer server and database operations; perform data validation and integrity checks.", "Execute regression and confirmation testing for change requests; report status to stakeholders."] },
              { role: "Software Test Engineer", org: "ibex-solutions", period: "October 2017 – August 2019", location: "Egypt", bullets: ["Execute full software testing lifecycle: unit (where applicable), integration, system, and acceptance testing.", "Perform API testing and data flow validation for complex system integrations; document defects and expected behavior.", "Manage software deployment, configuration, and post-release support; verify installs and upgrades.", "Conduct regression testing for new product models and feature releases; maintain test data and environments."] },
              { role: "Freelance QA Consultant", org: "Independent", period: "January 2016 – January 2020", location: "Cairo", bullets: ["Deliver functional testing using black-box and white-box approaches; define test scenarios and coverage.", "Develop automated test scripts with Selenium WebDriver, Java, and TestNG; structure suites for reusability.", "Perform database testing (SQL Server, MySQL); validate schemas, queries, and data consistency.", "Conduct performance testing with JMeter; design scenarios and report on bottlenecks.", "Execute API testing with Postman; validate endpoints, status codes, and response payloads.", "Run security assessments with OWASP ZAP; document findings and recommend mitigations."] },
            ].map((job) => (
              <div key={job.org} className="card rounded-xl border border-white/5 bg-[#1a2332] p-5">
                <h3 className="font-semibold text-white">{job.role}</h3>
                <p className="text-[#60a5fa]">{job.org}</p>
                <p className="text-sm text-[#94a3b8]">📅 {job.period} · 📍 {job.location}</p>
                <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[#cbd5e1]">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Projects / GitHub */}
        <section className="mb-12">
          <h2 className="section-title text-[#60a5fa]">Projects &amp; Repositories</h2>
          <div className="card space-y-4 rounded-xl border border-white/5 bg-[#1a2332] p-5">
            <p className="text-sm text-[#cbd5e1]">
              Automation scripts, test frameworks, and tools on GitHub. Smart test data generation (IBAN, VISA, Saudi formats), reporting with Allure, and CI with GitHub Actions.
            </p>
            <a
              href="https://github.com/andrewaminazm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-[#3b82f6]/50 bg-[#3b82f6]/10 px-4 py-2 text-[#93c5fd] hover:bg-[#3b82f6]/20"
            >
              View GitHub profile →
            </a>
          </div>
        </section>

        {/* Writing / Blog */}
        <section id="writing" className="mb-12 scroll-mt-20">
          <h2 className="section-title text-[#60a5fa]">Writing &amp; Articles</h2>
          <p className="mb-6 text-sm text-[#94a3b8]">
            Short notes on automation testing and building a career in QA.
          </p>

          <article className="card mb-6 rounded-xl border border-white/5 bg-[#1a2332] p-5">
            <h3 className="mb-3 text-lg font-semibold text-white">What is test automation (and why it matters)</h3>
            <div className="space-y-3 text-sm text-[#cbd5e1]">
              <p>
                Test automation means using code and tools to run tests instead of clicking through the app by hand. You write scripts (e.g. with Selenium, Cypress, or Appium) that open the app, perform actions, and check results. These scripts can run in minutes and be repeated on every build or release.
              </p>
              <p>
                <strong className="text-[#94a3b8]">Why automate?</strong> Manual testing is slow and doesn’t scale. Automation gives you fast feedback, catches regressions early, and frees testers for exploratory and edge-case testing. In modern teams, automated tests often run in CI/CD (e.g. Jenkins, GitHub Actions) so every change is validated before it reaches production.
              </p>
              <p>
                <strong className="text-[#94a3b8]">What to automate first:</strong> Start with stable, high-value flows: login, critical business paths, and API contracts. Add UI automation for main user journeys, and use API tests for speed and reliability. Keep tests maintainable: clear structure, good selectors, and shared utilities make a big difference over time.
              </p>
            </div>
          </article>

          <article className="card mb-6 rounded-xl border border-white/5 bg-[#1a2332] p-5">
            <h3 className="mb-3 text-lg font-semibold text-white">How to become a software tester</h3>
            <div className="space-y-3 text-sm text-[#cbd5e1]">
              <p>
                Software testers make sure products work as expected and find bugs before users do. You need a mix of curiosity, attention to detail, and the ability to think like a user and like an attacker. You don’t have to be a developer first, but basic programming and SQL help a lot, especially for automation roles.
              </p>
              <p>
                <strong className="text-[#94a3b8]">Steps that help:</strong> (1) Learn testing fundamentals — test types (functional, regression, smoke), test design, and the testing lifecycle. A foundation like ISTQB is useful. (2) Practice on real apps — test websites or open-source projects, write bug reports, and get used to test cases and traceability. (3) Add automation — pick one stack (e.g. Selenium + Java/JavaScript or Cypress) and build a small framework; run API tests with Postman or REST Assured. (4) Get experience — internships, freelance, or junior QA roles. Even a few months of real projects make a big difference.
              </p>
              <p>
                <strong className="text-[#94a3b8]">Skills that stand out:</strong> Manual testing and test design, one automation tool (Selenium, Cypress, or similar), API testing, basic SQL, and familiarity with Agile and tools like JIRA. Security basics (e.g. OWASP) and performance testing (e.g. JMeter) will set you apart. Keep learning and share what you do — a blog or GitHub with scripts and small projects shows initiative to employers.
              </p>
            </div>
          </article>

          <p className="mb-3 text-sm text-[#94a3b8]">Blogs &amp; resources</p>
          <ul className="space-y-3">
            <li>
              {/* AI × Testing Blog - single blog link */}
              <a
                href="https://radiant-taffy-5a2bcb.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="card block rounded-xl border border-white/5 bg-[#1a2332] p-4 text-[#60a5fa] hover:border-[#3b82f6]/30 hover:bg-[#1a2332]/90"
              >
                <span className="font-medium">AI × Testing Blog</span>
                <span className="ml-2 text-sm text-[#94a3b8]">— Testing with AI — prompts, tools, and real results</span>
              </a>
            </li>
          </ul>
        </section>

        {/* Certifications */}
        <section id="certifications" className="mb-12 scroll-mt-20">
          <h2 className="section-title text-[#60a5fa]">Certifications</h2>
          <div className="card space-y-3 rounded-xl border border-white/5 bg-[#1a2332] p-5 text-sm">
            <p><strong className="text-[#94a3b8]">2024:</strong> Software Testing (Cypress), Full Course (Great Learning), Postman API (Software Testing Mentor), Software Testing for Beginners (Guru99)</p>
            <p><strong className="text-[#94a3b8]">2023:</strong> Mobile Automation with Appium, Selenium WebDriver with Java, API Test Automation with Postman, Performance & Load Testing, Git, Cypress, Accessibility, Cucumber with JavaScript, Mocha, Introduction to JavaScript (Test Automation University)</p>
            <p><strong className="text-[#94a3b8]">2017:</strong> ASTQB Mobile App Testing; Performance & Security (OWASP ZAP, JMeter); Selenium WebDriver Automation (Java, TestNG); API Testing; ISTQB Foundation</p>
            <p><strong className="text-[#94a3b8]">2016:</strong> ORACLE 11g Developer; Software Testing at Utest</p>
            <p><strong className="text-[#94a3b8]">2015–2011:</strong> Ministry of Defense IT, Front-End Web Development, Java Essentials, CCNA, IT Admin (Citi Bank)</p>
          </div>
          <p className="mb-3 mt-6 text-sm text-[#94a3b8]">Certification badges & documents</p>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
            {[
              "page_01_img_01.jpeg", "page_01_img_02.jpeg", "page_01_img_03.jpeg", "page_01_img_04.jpeg",
              "page_02_img_01.jpeg", "page_02_img_02.jpeg", "page_02_img_03.jpeg", "page_02_img_04.jpeg",
              "page_02_img_05.jpeg", "page_02_img_06.jpeg", "page_02_img_07.jpeg", "page_02_img_08.jpeg",
              "page_02_img_09.jpeg", "page_02_img_10.jpeg", "page_02_img_11.jpeg", "page_02_img_12.jpeg",
              "page_02_img_13.jpeg", "page_02_img_14.jpeg", "page_03_img_02.jpeg",
              "page_03_img_03.jpeg", "page_03_img_04.jpeg", "page_03_img_05.jpeg",
            ].map((name, index) => (
              <a
                key={name}
                href={`/images/${name}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View certification badge ${index + 1}`}
                className="overflow-hidden rounded-lg border border-white/10 bg-[#1a2332] transition hover:border-[#3b82f6]/50"
              >
                <img
                  src={`/images/${name}`}
                  alt={`Certification badge ${index + 1}`}
                  className="aspect-square w-full object-cover"
                />
              </a>
            ))}
          </div>
        </section>

        {/* Education & Technical */}
        <section className="mb-12 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="section-title text-[#60a5fa]">Education</h2>
            <div className="card rounded-xl border border-white/5 bg-[#1a2332] p-5">
              <p className="font-medium text-white">Bachelor&apos;s Degree in Computer Science</p>
              <p className="text-[#60a5fa]">Ain Shams University (ASU), Egypt</p>
              <p className="text-sm text-[#94a3b8]">2009 – 2014 · Grade: Good</p>
            </div>
          </div>
          <div>
            <h2 className="section-title text-[#60a5fa]">Technical Expertise</h2>
            <div className="card rounded-xl border border-white/5 bg-[#1a2332] p-5 text-sm text-[#cbd5e1]">
              <p><strong className="text-[#94a3b8]">Frameworks:</strong> Selenium, Cypress, Appium, WebdriverIO, Playwright, Protractor, Katalon</p>
              <p><strong className="text-[#94a3b8]">Programming:</strong> Java, JavaScript, TypeScript, Python</p>
              <p><strong className="text-[#94a3b8]">API/Perf/Security:</strong> Postman, REST Assured, SoapUI; JMeter, Gatling; OWASP ZAP, Burp Suite</p>
              <p><strong className="text-[#94a3b8]">CI/CD & DB:</strong> Jenkins, Azure DevOps, GitHub Actions; MySQL, PostgreSQL, SQL Server, MongoDB</p>
              <p><strong className="text-[#94a3b8]">Methods & tools:</strong> Agile, Scrum, Kanban, TDD, BDD; JIRA, TestRail, Confluence, Git, Docker</p>
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-20 border-t border-white/10 py-8">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-[#94a3b8]">Andrew Amin Azmy · Senior Automation Test Engineer · Riyadh, Saudi Arabia</p>
          <p className="mt-2 text-sm text-[#60a5fa]">Open to opportunities — get in touch via LinkedIn or email</p>
          <p className="mt-1 text-xs text-[#94a3b8]">Looking for: Senior QA / Test Automation roles · Riyadh or remote · Full-time or contract</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://www.linkedin.com/in/andrew-amin-48763a194/" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline">LinkedIn</a>
            <a href="https://github.com/andrewaminazm" target="_blank" rel="noopener noreferrer" className="text-[#60a5fa] hover:underline">GitHub</a>
            <a href="mailto:andrewamin878@gmail.com" className="text-[#60a5fa] hover:underline">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
