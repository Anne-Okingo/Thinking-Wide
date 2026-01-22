// Career Data
        const careers = [
            {
                id: 1,
                title: "Software Developer",
                icon: "💻",
                description: "Design and build software applications",
                skills: ["JavaScript", "Python", "Problem Solving"],
                interests: ["technology", "problem-solving"],
                subjects: ["math", "science"],
                roadmap: [
                    { 
                        step: "Learn Programming Basics", 
                        duration: "2-3 months",
                        description: "Start with Python or JavaScript fundamentals",
                        resource: { name: "CS50 Introduction to Programming", url: "https://cs50.harvard.edu/python" }
                    },
                    { 
                        step: "Master Data Structures & Algorithms", 
                        duration: "2-3 months",
                        description: "Understand how to organize and process data efficiently",
                        resource: { name: "freeCodeCamp Data Structures", url: "https://www.freecodecamp.org" }
                    },
                    { 
                        step: "Build Real Projects", 
                        duration: "3-4 months",
                        description: "Create portfolio projects like a todo app, weather app, or personal website",
                        resource: { name: "The Odin Project", url: "https://www.theodinproject.com" }
                    },
                    { 
                        step: "Learn Version Control (Git)", 
                        duration: "2 weeks",
                        description: "Master Git and GitHub for code collaboration",
                        resource: { name: "Git & GitHub for Beginners", url: "https://www.youtube.com/watch?v=RGOj5yH7evk" }
                    },
                    { 
                        step: "Practice Coding Challenges", 
                        duration: "Ongoing",
                        description: "Solve problems daily to sharpen your skills",
                        resource: { name: "LeetCode Easy Problems", url: "https://leetcode.com/problemset" }
                    },
                    { 
                        step: "Apply for Junior Positions", 
                        duration: "1-2 months",
                        description: "Build resume, apply to internships and entry-level jobs",
                        resource: { name: "Resume Tips for Developers", url: "https://www.freecodecamp.org/news/how-to-write-a-resume" }
                    }
                ],
                resources: [
                    { name: "freeCodeCamp", url: "https://www.freecodecamp.org", type: "Free Course" },
                    { name: "The Odin Project", url: "https://www.theodinproject.com", type: "Free Curriculum" },
                    { name: "CS50 - Harvard", url: "https://cs50.harvard.edu", type: "Free Course" },
                    { name: "Codecademy", url: "https://www.codecademy.com", type: "Free/Paid" },
                    { name: "MDN Web Docs", url: "https://developer.mozilla.org", type: "Documentation" }
                ]
            },
            {
                id: 2,
                title: "Data Analyst",
                icon: "📊",
                description: "Transform data into actionable insights",
                skills: ["Excel", "SQL", "Statistics"],
                interests: ["problem-solving", "research"],
                subjects: ["math", "business"],
                roadmap: [
                    { 
                        step: "Master Excel Fundamentals", 
                        duration: "3-4 weeks",
                        description: "Learn formulas, pivot tables, and data visualization",
                        resource: { name: "Excel Tutorial - Excel Easy", url: "https://www.excel-easy.com" }
                    },
                    { 
                        step: "Learn SQL for Databases", 
                        duration: "1-2 months",
                        description: "Query and manage data using SQL",
                        resource: { name: "SQL Tutorial - W3Schools", url: "https://www.w3schools.com/sql" }
                    },
                    { 
                        step: "Study Statistics & Math", 
                        duration: "2-3 months",
                        description: "Understand probability, distributions, and hypothesis testing",
                        resource: { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability" }
                    },
                    { 
                        step: "Learn Python/R for Analysis", 
                        duration: "2-3 months",
                        description: "Use programming for data manipulation and analysis",
                        resource: { name: "Python for Data Analysis", url: "https://www.kaggle.com/learn/python" }
                    },
                    { 
                        step: "Master Data Visualization", 
                        duration: "1 month",
                        description: "Create charts and dashboards using Tableau or Power BI",
                        resource: { name: "Tableau Public Free Training", url: "https://public.tableau.com/app/learn/how-to-videos" }
                    },
                    { 
                        step: "Build Portfolio Projects", 
                        duration: "2-3 months",
                        description: "Analyze real datasets and showcase your work",
                        resource: { name: "Kaggle Datasets", url: "https://www.kaggle.com/datasets" }
                    }
                ],
                resources: [
                    { name: "Google Data Analytics Certificate", url: "https://www.coursera.org/professional-certificates/google-data-analytics", type: "Free to Audit" },
                    { name: "Khan Academy Statistics", url: "https://www.khanacademy.org/math/statistics-probability", type: "Free" },
                    { name: "SQL Tutorial - W3Schools", url: "https://www.w3schools.com/sql", type: "Free" },
                    { name: "Excel Practice - Excel Easy", url: "https://www.excel-easy.com", type: "Free" },
                    { name: "DataCamp", url: "https://www.datacamp.com", type: "Free Trial" }
                ]
            },
            {
                id: 3,
                title: "Digital Marketer",
                icon: "📱",
                description: "Help businesses reach audiences online",
                skills: ["Social Media", "SEO", "Content Marketing"],
                interests: ["creativity", "communication"],
                subjects: ["business", "english"],
                roadmap: [
                    { 
                        step: "Learn Digital Marketing Basics", 
                        duration: "2-3 weeks",
                        description: "Understand marketing fundamentals and strategies",
                        resource: { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com" }
                    },
                    { 
                        step: "Master Social Media Marketing", 
                        duration: "1-2 months",
                        description: "Learn to create engaging content for different platforms",
                        resource: { name: "Meta Blueprint Free Courses", url: "https://www.facebook.com/business/learn" }
                    },
                    { 
                        step: "Study SEO & Content Marketing", 
                        duration: "1-2 months",
                        description: "Optimize content for search engines and audiences",
                        resource: { name: "Moz SEO Learning Center", url: "https://moz.com/learn/seo" }
                    },
                    { 
                        step: "Learn Google Analytics", 
                        duration: "2-3 weeks",
                        description: "Track and analyze website performance",
                        resource: { name: "Google Analytics Academy", url: "https://analytics.google.com/analytics/academy" }
                    },
                    { 
                        step: "Get Certified in Google Ads", 
                        duration: "1 month",
                        description: "Learn paid advertising and campaign management",
                        resource: { name: "Google Skillshop", url: "https://skillshop.withgoogle.com" }
                    },
                    { 
                        step: "Build Your Personal Brand", 
                        duration: "Ongoing",
                        description: "Create content, manage campaigns, show results",
                        resource: { name: "HubSpot Marketing Resources", url: "https://academy.hubspot.com" }
                    }
                ],
                resources: [
                    { name: "Google Digital Garage", url: "https://learndigital.withgoogle.com", type: "Free Certification" },
                    { name: "HubSpot Academy", url: "https://academy.hubspot.com", type: "Free Courses" },
                    { name: "Meta Blueprint", url: "https://www.facebook.com/business/learn", type: "Free" },
                    { name: "Moz SEO Learning Center", url: "https://moz.com/learn/seo", type: "Free" },
                    { name: "Semrush Academy", url: "https://www.semrush.com/academy", type: "Free" }
                ]
            },
            {
                id: 4,
                title: "Graphic Designer",
                icon: "🎨",
                description: "Create visual content that captivates",
                skills: ["Adobe Creative Suite", "Typography", "Color Theory"],
                interests: ["creativity", "art"],
                subjects: ["art"],
                roadmap: [
                    { 
                        step: "Learn Design Fundamentals", 
                        duration: "1-2 months",
                        description: "Master color theory, typography, and composition",
                        resource: { name: "Canva Design School Basics", url: "https://www.canva.com/designschool/courses/design-basics" }
                    },
                    { 
                        step: "Master Adobe Photoshop", 
                        duration: "2-3 months",
                        description: "Learn photo editing and digital manipulation",
                        resource: { name: "Adobe Photoshop Tutorials", url: "https://helpx.adobe.com/photoshop/tutorials.html" }
                    },
                    { 
                        step: "Learn Adobe Illustrator", 
                        duration: "2-3 months",
                        description: "Create logos, icons, and vector graphics",
                        resource: { name: "Adobe Illustrator Tutorials", url: "https://helpx.adobe.com/illustrator/tutorials.html" }
                    },
                    { 
                        step: "Study Successful Designs", 
                        duration: "Ongoing",
                        description: "Analyze great work for inspiration and learning",
                        resource: { name: "Behance Design Portfolio", url: "https://www.behance.net" }
                    },
                    { 
                        step: "Create Portfolio Projects", 
                        duration: "3-4 months",
                        description: "Design logos, posters, social media graphics, branding",
                        resource: { name: "Daily Design Challenges", url: "https://www.dailyui.co" }
                    },
                    { 
                        step: "Find Freelance Work", 
                        duration: "Ongoing",
                        description: "Start with small projects on Fiverr or Upwork",
                        resource: { name: "Fiverr for Designers", url: "https://www.fiverr.com" }
                    }
                ],
                resources: [
                    { name: "Canva Design School", url: "https://www.canva.com/designschool", type: "Free" },
                    { name: "Adobe Creative Cloud Tutorials", url: "https://helpx.adobe.com/support.html", type: "Free" },
                    { name: "Coursera Graphic Design", url: "https://www.coursera.org/courses?query=graphic%20design", type: "Free to Audit" },
                    { name: "Behance", url: "https://www.behance.net", type: "Portfolio/Inspiration" },
                    { name: "Dribbble", url: "https://dribbble.com", type: "Portfolio/Inspiration" }
                ]
            },
            {
                id: 5,
                title: "Nurse",
                icon: "👩‍⚕️",
                description: "Provide healthcare and support to patients",
                skills: ["Patient Care", "Medical Knowledge", "Empathy"],
                interests: ["helping-others", "health"],
                subjects: ["biology", "health"],
                roadmap: [
                    { 
                        step: "Complete High School Science", 
                        duration: "Varies",
                        description: "Focus on biology, chemistry, and health sciences",
                        resource: { name: "Khan Academy Biology", url: "https://www.khanacademy.org/science/biology" }
                    },
                    { 
                        step: "Research Nursing Programs", 
                        duration: "1-2 months",
                        description: "Find accredited ADN or BSN programs in your area",
                        resource: { name: "Nursing.org Program Finder", url: "https://www.nursing.org" }
                    },
                    { 
                        step: "Enroll in Nursing School", 
                        duration: "2-4 years",
                        description: "Complete required coursework and clinical hours",
                        resource: { name: "Registered Nursing Guide", url: "https://www.registerednursing.org" }
                    },
                    { 
                        step: "Complete Clinical Rotations", 
                        duration: "Throughout program",
                        description: "Gain hands-on experience in healthcare settings",
                        resource: { name: "Nursing Clinical Resources", url: "https://www.nurse.com" }
                    },
                    { 
                        step: "Pass NCLEX-RN Exam", 
                        duration: "3-6 months prep",
                        description: "Study and pass the national nursing licensure exam",
                        resource: { name: "NCLEX Study Resources", url: "https://www.registerednursing.org/nclex" }
                    },
                    { 
                        step: "Gain Experience & Specialize", 
                        duration: "1-3 years",
                        description: "Work as RN and consider specialization areas",
                        resource: { name: "Nursing Specialties Guide", url: "https://www.nursingworld.org" }
                    }
                ],
                resources: [
                    { name: "Khan Academy Health & Medicine", url: "https://www.khanacademy.org/science/health-and-medicine", type: "Free" },
                    { name: "Coursera Nursing Courses", url: "https://www.coursera.org/courses?query=nursing", type: "Free to Audit" },
                    { name: "Nursing.org", url: "https://www.nursing.org", type: "Career Info" },
                    { name: "RegisteredNursing.org", url: "https://www.registerednursing.org", type: "Study Resources" },
                    { name: "Nurse.com", url: "https://www.nurse.com", type: "Professional Development" }
                ]
            },
            {
                id: 6,
                title: "UI/UX Designer",
                icon: "🖌️",
                description: "Design beautiful digital experiences",
                skills: ["Figma", "User Research", "Prototyping"],
                interests: ["creativity", "technology"],
                subjects: ["art", "psychology"],
                roadmap: [
                    { 
                        step: "Learn UX Design Principles", 
                        duration: "1-2 months",
                        description: "Understand user-centered design and research methods",
                        resource: { name: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design" }
                    },
                    { 
                        step: "Master Figma", 
                        duration: "1 month",
                        description: "Learn the industry-standard design tool",
                        resource: { name: "Figma Learn & Tutorial", url: "https://www.figma.com/resources/learn-design" }
                    },
                    { 
                        step: "Study User Psychology", 
                        duration: "1-2 months",
                        description: "Understand how users think and behave",
                        resource: { name: "Laws of UX", url: "https://lawsofux.com" }
                    },
                    { 
                        step: "Practice Wireframing & Prototyping", 
                        duration: "2-3 months",
                        description: "Create low and high-fidelity designs",
                        resource: { name: "Daily UI Challenges", url: "https://www.dailyui.co" }
                    },
                    { 
                        step: "Learn Basic HTML/CSS", 
                        duration: "1-2 months",
                        description: "Understand front-end development basics",
                        resource: { name: "freeCodeCamp HTML/CSS", url: "https://www.freecodecamp.org" }
                    },
                    { 
                        step: "Build Case Study Portfolio", 
                        duration: "3-4 months",
                        description: "Document your design process and decisions",
                        resource: { name: "UX Portfolio Tips", url: "https://www.interaction-design.org" }
                    }
                ],
                resources: [
                    { name: "Google UX Design Certificate", url: "https://www.coursera.org/professional-certificates/google-ux-design", type: "Free to Audit" },
                    { name: "Figma Learn", url: "https://www.figma.com/resources/learn-design", type: "Free" },
                    { name: "Interaction Design Foundation", url: "https://www.interaction-design.org", type: "Paid (Student Discount)" },
                    { name: "UX Design Institute", url: "https://www.uxdesigninstitute.com", type: "Free Resources" },
                    { name: "Laws of UX", url: "https://lawsofux.com", type: "Free" }
                ]
            },
            {
                id: 7,
                title: "Content Writer",
                icon: "✍️",
                description: "Craft compelling written content",
                skills: ["Writing", "Research", "SEO"],
                interests: ["writing", "creativity"],
                subjects: ["english"],
                roadmap: [
                    { 
                        step: "Improve Writing & Grammar", 
                        duration: "Ongoing",
                        description: "Master grammar rules and writing techniques",
                        resource: { name: "Grammarly Free Writing Tips", url: "https://www.grammarly.com/blog" }
                    },
                    { 
                        step: "Learn SEO Writing", 
                        duration: "1 month",
                        description: "Optimize content for search engines",
                        resource: { name: "Yoast SEO for Beginners", url: "https://yoast.com/seo-blog" }
                    },
                    { 
                        step: "Study Content Marketing", 
                        duration: "1-2 months",
                        description: "Understand strategy, audience, and distribution",
                        resource: { name: "HubSpot Content Marketing", url: "https://academy.hubspot.com/courses/content-marketing" }
                    },
                    { 
                        step: "Start a Blog or Portfolio", 
                        duration: "1 month setup",
                        description: "Showcase your writing samples and expertise",
                        resource: { name: "WordPress.com Free Blog", url: "https://wordpress.com" }
                    },
                    { 
                        step: "Write Guest Posts", 
                        duration: "Ongoing",
                        description: "Contribute to popular blogs in your niche",
                        resource: { name: "Medium Writing Platform", url: "https://medium.com" }
                    },
                    { 
                        step: "Find Freelance Clients", 
                        duration: "2-3 months",
                        description: "Build client base on Upwork, Fiverr, or directly",
                        resource: { name: "Contently for Writers", url: "https://contently.com" }
                    }
                ],
                resources: [
                    { name: "HubSpot Content Marketing", url: "https://academy.hubspot.com/courses/content-marketing", type: "Free Certification" },
                    { name: "Grammarly", url: "https://www.grammarly.com", type: "Free Tool" },
                    { name: "Hemingway Editor", url: "https://hemingwayapp.com", type: "Free Tool" },
                    { name: "Copyblogger", url: "https://copyblogger.com", type: "Free Blog" },
                    { name: "ProWritingAid", url: "https://prowritingaid.com", type: "Free/Paid" }
                ]
            },
            {
                id: 8,
                title: "Project Manager",
                icon: "📋",
                description: "Lead teams to deliver projects successfully",
                skills: ["Leadership", "Communication", "Planning"],
                interests: ["leadership", "organization"],
                subjects: ["business"],
                roadmap: [
                    { 
                        step: "Learn PM Fundamentals", 
                        duration: "1-2 months",
                        description: "Understand project lifecycle and methodologies",
                        resource: { name: "Google Project Management Certificate", url: "https://www.coursera.org/professional-certificates/google-project-management" }
                    },
                    { 
                        step: "Master Agile & Scrum", 
                        duration: "1 month",
                        description: "Learn modern project management frameworks",
                        resource: { name: "Scrum.org Free Resources", url: "https://www.scrum.org/resources" }
                    },
                    { 
                        step: "Learn PM Tools", 
                        duration: "2-3 weeks",
                        description: "Get familiar with Jira, Asana, or Trello",
                        resource: { name: "Asana Academy", url: "https://academy.asana.com" }
                    },
                    { 
                        step: "Develop Leadership Skills", 
                        duration: "Ongoing",
                        description: "Build communication and team management abilities",
                        resource: { name: "LinkedIn Learning Leadership", url: "https://www.linkedin.com/learning" }
                    },
                    { 
                        step: "Gain Project Experience", 
                        duration: "6-12 months",
                        description: "Volunteer to lead projects at work or in community",
                        resource: { name: "PMI Volunteer Opportunities", url: "https://www.pmi.org" }
                    },
                    { 
                        step: "Consider Certification", 
                        duration: "3-6 months",
                        description: "Pursue CAPM or PMP certification",
                        resource: { name: "PMI Certification Guide", url: "https://www.pmi.org/certifications" }
                    }
                ],
                resources: [
                    { name: "Google Project Management Certificate", url: "https://www.coursera.org/professional-certificates/google-project-management", type: "Free to Audit" },
                    { name: "Asana Academy", url: "https://academy.asana.com", type: "Free" },
                    { name: "PMI Free Resources", url: "https://www.pmi.org/learning/library", type: "Free" },
                    { name: "Trello Guides", url: "https://trello.com/guide", type: "Free" },
                    { name: "Monday.com Academy", url: "https://academy.monday.com", type: "Free" }
                ]
            }
        ];

        // Quiz Questions
        const questions = [
            {
                question: "What activities do you enjoy most?",
                options: [
                    { text: "Working with technology 💻", interests: ["technology", "problem-solving"] },
                    { text: "Creating and designing 🎨", interests: ["creativity", "art"] },
                    { text: "Helping people 👥", interests: ["helping-others", "communication"] },
                    { text: "Analyzing and planning 📊", interests: ["problem-solving", "research"] }
                ]
            },
            {
                question: "Which subjects do you enjoy?",
                options: [
                    { text: "Math & Logic 🔢", subjects: ["math"] },
                    { text: "Science & Technology 🔬", subjects: ["science", "biology"] },
                    { text: "Languages & Communication 📝", subjects: ["english"] },
                    { text: "Arts & Creative 🎭", subjects: ["art"] }
                ]
            },
            {
                question: "How do you prefer to work?",
                options: [
                    { text: "Independently 🖥️", workStyle: ["independent"] },
                    { text: "With a team 👫", workStyle: ["collaborative"] },
                    { text: "Leading others 🚀", workStyle: ["leadership"] },
                    { text: "Mix of both 🎯", workStyle: ["balanced"] }
                ]
            },
            {
                question: "What motivates you most?",
                options: [
                    { text: "Good salary 💰", priority: ["financial"] },
                    { text: "Making a difference ❤️", priority: ["impact"] },
                    { text: "Creative expression 🎨", priority: ["creativity"] },
                    { text: "Learning & growth 📈", priority: ["growth"] }
                ]
            },
            {
                question: "What work setting appeals to you?",
                options: [
                    { text: "Office environment 🏢", environment: ["office"] },
                    { text: "Work from home 🏠", environment: ["remote"] },
                    { text: "Active/Field work 🏥", environment: ["active"] },
                    { text: "Flexible/Freelance ☕", environment: ["flexible"] }
                ]
            }
        ];

        // Quiz State
        let currentQuestion = 0;
        let userAnswers = [];

        // Add fade-in animation on scroll
        function animateOnScroll() {
            const elements = document.querySelectorAll('.animate-fade');
            elements.forEach(el => {
                const elementTop = el.getBoundingClientRect().top;
                const windowHeight = window.innerHeight;
                if (elementTop < windowHeight - 100) {
                    el.style.opacity = '1';
                    el.style.transform = 'translateY(0)';
                }
            });
        }

        // Initialize animations
        document.addEventListener('DOMContentLoaded', function() {
            const animatedElements = document.querySelectorAll('.animate-fade');
            animatedElements.forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'all 0.6s ease-out';
            });
            
            window.addEventListener('scroll', animateOnScroll);
            animateOnScroll(); // Trigger on load
        });

        // Functions
        function showSection(sectionId) {
            document.querySelectorAll('.section').forEach(s => s.classList.add('hidden'));
            const section = document.getElementById(sectionId);
            section.classList.remove('hidden');
            
            // Smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Add entrance animation
            setTimeout(() => {
                section.style.animation = 'fadeIn 0.5s ease-out';
            }, 100);
        }

        function startQuiz() {
            currentQuestion = 0;
            userAnswers = [];
            showSection('quizSection');
            renderQuestion();
        }

        function renderQuestion() {
            const q = questions[currentQuestion];
            const progress = ((currentQuestion + 1) / questions.length) * 100;
            
            document.getElementById('progressBar').style.width = progress + '%';
            document.getElementById('currentQ').textContent = currentQuestion + 1;
            document.getElementById('totalQ').textContent = questions.length;
            
            let html = '<div class="question">';
            html += '<h3>' + q.question + '</h3>';
            html += '<div class="options">';
            
            q.options.forEach((opt, idx) => {
                const isSelected = userAnswers[currentQuestion] && 
                                  JSON.stringify(userAnswers[currentQuestion]) === JSON.stringify(opt);
                html += '<div class="option ' + (isSelected ? 'selected' : '') + '" onclick="selectOption(' + idx + ')">' + opt.text + '</div>';
            });
            
            html += '</div></div>';
            document.getElementById('quizContent').innerHTML = html;
        }

        function selectOption(idx) {
            const q = questions[currentQuestion];
            userAnswers[currentQuestion] = q.options[idx];
            
            // Visual feedback with animation
            document.querySelectorAll('.option').forEach((el, i) => {
                el.classList.remove('selected');
                if (i === idx) {
                    el.classList.add('selected');
                    el.style.animation = 'none';
                    setTimeout(() => {
                        el.style.animation = 'fadeIn 0.3s ease-out';
                    }, 10);
                }
            });
        }

        function nextQuestion() {
            if (!userAnswers[currentQuestion]) {
                // Shake animation for error
                const quizContent = document.getElementById('quizContent');
                quizContent.style.animation = 'shake 0.5s';
                setTimeout(() => {
                    quizContent.style.animation = '';
                }, 500);
                alert('Please select an option');
                return;
            }
            
            currentQuestion++;
            
            if (currentQuestion < questions.length) {
                renderQuestion();
            } else {
                showResults();
            }
        }

        function showResults() {
            // Calculate matches
            const scores = careers.map(career => {
                let score = 0;
                
                userAnswers.forEach(answer => {
                    if (answer.interests) {
                        answer.interests.forEach(int => {
                            if (career.interests.includes(int)) score += 40;
                        });
                    }
                    if (answer.subjects) {
                        answer.subjects.forEach(sub => {
                            if (career.subjects.includes(sub)) score += 30;
                        });
                    }
                });
                
                return { career, score };
            });
            
            // Sort by score
            scores.sort((a, b) => b.score - a.score);
            
            // Display top 3 with staggered animation
            let html = '';
            scores.slice(0, 3).forEach((result, index) => {
                const matchPercent = Math.min(95, Math.max(60, result.score));
                html += '<div class="career-card" style="animation: fadeIn 0.6s ease-out ' + (index * 0.2) + 's both">';
                html += '<div class="career-icon">' + result.career.icon + '</div>';
                html += '<div class="match-score">🎯 ' + matchPercent + '% Match</div>';
                html += '<h3 class="career-title">' + result.career.title + '</h3>';
                html += '<p>' + result.career.description + '</p>';
                html += '<div class="skills">';
                result.career.skills.forEach(skill => {
                    html += '<span class="skill-tag">' + skill + '</span>';
                });
                html += '</div>';
                html += '<div style="margin-top: 20px;">';
                html += '<button class="btn" onclick="showCareerDetail(' + result.career.id + ')" style="width: 100%;">📚 View Learning Resources</button>';
                html += '</div>';
                html += '</div>';
            });
            
            document.getElementById('resultsContent').innerHTML = html;
            showSection('resultsSection');
        }

        function showCareers() {
            let html = '';
            careers.forEach((career, index) => {
                html += '<div class="career-card" style="animation: fadeIn 0.5s ease-out ' + (index * 0.1) + 's both">';
                html += '<div class="career-icon">' + career.icon + '</div>';
                html += '<h3 class="career-title">' + career.title + '</h3>';
                html += '<p>' + career.description + '</p>';
                html += '<div class="skills">';
                career.skills.forEach(skill => {
                    html += '<span class="skill-tag">' + skill + '</span>';
                });
                html += '</div>';
                html += '<div style="margin-top: 20px;">';
                html += '<button class="btn" onclick="showCareerDetail(' + career.id + ')" style="width: 100%;">View Resources & Details</button>';
                html += '</div>';
                html += '</div>';
            });
            
            document.getElementById('careersContent').innerHTML = html;
            showSection('careersSection');
        }

        function showCareerDetail(careerId) {
            const career = careers.find(c => c.id === careerId);
            if (!career) return;

            let html = '<div style="text-align: center; margin-bottom: 25px;">';
            html += '<div style="font-size: 4rem; margin-bottom: 15px;">' + career.icon + '</div>';
            html += '<h2 style="color: #667eea; margin-bottom: 10px;">' + career.title + '</h2>';
            html += '<p style="color: #666; font-size: 1.1rem;">' + career.description + '</p>';
            html += '</div>';

            html += '<div style="margin: 25px 0;">';
            html += '<h4 style="color: #667eea; margin-bottom: 15px;">🎯 Key Skills Required</h4>';
            html += '<div class="skills">';
            career.skills.forEach(skill => {
                html += '<span class="skill-tag" style="background: linear-gradient(135deg, #667eea15 0%, #764ba215 100%); border: 1px solid #667eea;">' + skill + '</span>';
            });
            html += '</div></div>';

            // Roadmap Section
            html += '<div class="roadmap-section">';
            html += '<h4>🗺️ Your Learning Roadmap</h4>';
            html += '<p style="color: #666; margin-bottom: 20px;">Follow these steps in order to master this career. Each step includes a recommended resource to get started.</p>';
            
            career.roadmap.forEach((step, index) => {
                html += '<div class="roadmap-step" style="animation: fadeIn 0.5s ease-out ' + (index * 0.1) + 's both">';
                html += '<div class="step-header">';
                html += '<span class="step-number">' + (index + 1) + '</span>';
                html += '<span class="step-title">' + step.step + '</span>';
                html += '<span class="step-duration">⏱️ ' + step.duration + '</span>';
                html += '</div>';
                html += '<p class="step-description">' + step.description + '</p>';
                html += '<div class="step-resource">';
                html += '<span style="color: #666; font-size: 0.9rem;">📖 Start here:</span>';
                html += '<a href="' + step.resource.url + '" target="_blank" class="step-resource-link">';
                html += step.resource.name + ' →';
                html += '</a>';
                html += '</div>';
                html += '</div>';
            });
            html += '</div>';

            // Additional Resources
            html += '<div class="resource-section">';
            html += '<h4>📚 Additional Free Resources</h4>';
            html += '<div class="resource-list">';
            career.resources.forEach(resource => {
                html += '<a href="' + resource.url + '" target="_blank" class="resource-item">';
                html += '<div class="resource-name">🔗 ' + resource.name + '</div>';
                html += '<div class="resource-type">' + resource.type + '</div>';
                html += '</a>';
            });
            html += '</div></div>';

            html += '<div style="margin-top: 25px; padding: 20px; background: #e8f5e9; border-radius: 10px; border-left: 4px solid #4caf50;">';
            html += '<h4 style="color: #2e7d32; margin-bottom: 10px;">💡 Success Tips</h4>';
            html += '<ul style="color: #1b5e20; line-height: 2; padding-left: 20px;">';
            html += '<li>Follow the roadmap step-by-step - don\'t skip ahead!</li>';
            html += '<li>Practice daily, even if just for 30 minutes</li>';
            html += '<li>Build projects to apply what you learn</li>';
            html += '<li>Join online communities for support and networking</li>';
            html += '<li>Stay consistent - mastery takes time and patience</li>';
            html += '</ul>';
            html += '</div>';

            document.getElementById('modalBody').innerHTML = html;
            document.getElementById('careerModal').classList.add('show');
        }

        function closeCareerModal() {
            document.getElementById('careerModal').classList.remove('show');
        }

        // Close modal when clicking outside
        document.addEventListener('click', function(e) {
            const modal = document.getElementById('careerModal');
            if (e.target === modal) {
                closeCareerModal();
            }
        });

        // Add shake animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
                20%, 40%, 60%, 80% { transform: translateX(10px); }
            }
        `;
        document.head.appendChild(style);