export default [
    {
        name: 'LinkedIn Connection Note Generator',
        desc: 'Generate a personalized LinkedIn connection note.',
        category: 'Networking',
        icon: 'linkedin-icon.png',
        aiprompt: 'Generate a personalized LinkedIn connection note for a [specific professional role] in the [industry] industry. I am a [your degree] student at [university name], interested in [specific area of interest]. Include a brief mention of a shared interest or mutual connection if applicable.',
        slug: 'linkedin-connection-note',
        form: [
            { Label: 'Professional Role', field: 'input', name: 'role', required: true },
            { Label: 'Industry', field: 'input', name: 'industry', required: true },
            { Label: 'Your Degree', field: 'input', name: 'degree', required: true },
            { Label: 'University Name', field: 'input', name: 'university', required: true },
            { Label: 'Area of Interest', field: 'input', name: 'interest', required: true },
            { Label: 'Shared Interest or Connection', field: 'input', name: 'shared_interest', required: false }
        ]
    },
    {
        name: 'Job Application Cover Letter Creator',
        desc: 'Create a cover letter for job applications.',
        category: 'Job Application',
        icon: 'cover-letter-icon.png',
        aiprompt: 'Create a cover letter for a [job title] position at [company name]. I am a [year of study] student majoring in [field of study] at [university name]. Highlight my skills in [list 2-3 relevant skills] and my passion for [specific aspect of the job or industry].',
        slug: 'job-application-cover-letter',
        form: [
            { Label: 'Job Title', field: 'input', name: 'job_title', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Year of Study', field: 'input', name: 'year_of_study', required: true },
            { Label: 'Field of Study', field: 'input', name: 'field_of_study', required: true },
            { Label: 'University Name', field: 'input', name: 'university', required: true },
            { Label: 'Relevant Skills', field: 'textarea', name: 'skills', required: true },
            { Label: 'Passion Aspect', field: 'textarea', name: 'passion', required: true }
        ]
    },
    {
        name: 'Resume Tailoring Assistant',
        desc: 'Tailor your resume for specific job positions.',
        category: 'Job Application',
        icon: 'resume-icon.png',
        aiprompt: 'Rewrite the following resume bullet point to better match a [job title] position at [company name]: [paste original bullet point]. Focus on quantifiable achievements and use action verbs.',
        slug: 'resume-tailoring-assistant',
        form: [
            { Label: 'Job Title', field: 'input', name: 'job_title', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Original Bullet Point', field: 'textarea', name: 'bullet_point', required: true }
        ]
    },
    {
        name: 'Referral Request Email Composer',
        desc: 'Draft a polite email requesting a job referral.',
        category: 'Networking',
        icon: 'email-icon.png',
        aiprompt: 'Draft a polite email requesting a job referral from [name/position of contact] for a [job title] position at [company name]. Mention our connection through [how you know them] and highlight why I am a good fit for the role.',
        slug: 'referral-request-email',
        form: [
            { Label: 'Contact Name/Position', field: 'input', name: 'contact_name', required: true },
            { Label: 'Job Title', field: 'input', name: 'job_title', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Connection Details', field: 'textarea', name: 'connection', required: true },
            { Label: 'Fit for Role', field: 'textarea', name: 'fit', required: true }
        ]
    },
    {
        name: 'Cold Email Outreach Generator',
        desc: 'Compose a cold email to express interest in a role.',
        category: 'Networking',
        icon: 'email-icon.png',
        aiprompt: 'Compose a cold email to [name/position] at [company name] expressing interest in [specific department or role]. I am a [year of study] [major] student at [university name] with experience in [relevant skills/projects]. Keep it concise and compelling.',
        slug: 'cold-email-outreach',
        form: [
            { Label: 'Contact Name/Position', field: 'input', name: 'contact_name', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Department or Role', field: 'input', name: 'department_role', required: true },
            { Label: 'Year of Study', field: 'input', name: 'year_of_study', required: true },
            { Label: 'Major', field: 'input', name: 'major', required: true },
            { Label: 'University Name', field: 'input', name: 'university', required: true },
            { Label: 'Relevant Skills/Projects', field: 'textarea', name: 'skills_projects', required: true }
        ]
    },
    {
        name: 'Interview Question Response Formulator',
        desc: 'Generate a structured response to interview questions.',
        category: 'Job Application',
        icon: 'interview-icon.png',
        aiprompt: 'Generate a structured response to the interview question "[paste interview question]" for a [job title] position. Include a brief introduction, 2-3 main points with examples, and a concise conclusion.',
        slug: 'interview-question-response',
        form: [
            { Label: 'Interview Question', field: 'textarea', name: 'interview_question', required: true },
            { Label: 'Job Title', field: 'input', name: 'job_title', required: true }
        ]
    },
    {
        name: 'Personal Statement Writer',
        desc: 'Create a personal statement for applications.',
        category: 'Applications',
        icon: 'statement-icon.png',
        aiprompt: 'Create a 250-word personal statement for a [graduate program/scholarship] application. Focus on my background in [field of study], my research interest in [specific topic], and my career goal to [career objective].',
        slug: 'personal-statement-writer',
        form: [
            { Label: 'Application Type', field: 'input', name: 'application_type', required: true },
            { Label: 'Field of Study', field: 'input', name: 'field_of_study', required: true },
            { Label: 'Research Interest', field: 'input', name: 'research_interest', required: true },
            { Label: 'Career Objective', field: 'input', name: 'career_objective', required: true }
        ]
    },
    {
        name: 'Networking Event Pitch Creator',
        desc: 'Develop a 30-second elevator pitch for networking.',
        category: 'Networking',
        icon: 'networking-icon.png',
        aiprompt: 'Develop a 30-second elevator pitch for a networking event in the [industry] sector. I am a [year of study] student studying [major] at [university name], with skills in [list 2-3 key skills] and interest in [specific area].',
        slug: 'networking-pitch',
        form: [
            { Label: 'Industry', field: 'input', name: 'industry', required: true },
            { Label: 'Year of Study', field: 'input', name: 'year_of_study', required: true },
            { Label: 'Major', field: 'input', name: 'major', required: true },
            { Label: 'University Name', field: 'input', name: 'university', required: true },
            { Label: 'Key Skills', field: 'textarea', name: 'skills', required: true },
            { Label: 'Area of Interest', field: 'textarea', name: 'interest', required: true }
        ]
    },
    {
        name: 'LinkedIn Profile Summary Optimizer',
        desc: 'Enhance your LinkedIn profile summary.',
        category: 'Job Application',
        icon: 'linkedin-icon.png',
        aiprompt: 'Enhance the following LinkedIn summary for a [year of study] [major] student at [university name]. Highlight skills in [list skills], experience in [brief experience], and career aspirations in [career goal]: [paste current summary]',
        slug: 'linkedin-profile-summary',
        form: [
            { Label: 'Year of Study', field: 'input', name: 'year_of_study', required: true },
            { Label: 'Major', field: 'input', name: 'major', required: true },
            { Label: 'University Name', field: 'input', name: 'university', required: true },
            { Label: 'Skills', field: 'textarea', name: 'skills', required: true },
            { Label: 'Brief Experience', field: 'textarea', name: 'experience', required: true },
            { Label: 'Career Goal', field: 'textarea', name: 'career_goal', required: true },
            { Label: 'Current Summary', field: 'textarea', name: 'current_summary', required: true }
        ]
    },
    {
        name: 'Thank You Email Generator',
        desc: 'Compose a thank you email following an interview.',
        category: 'Job Application',
        icon: 'email-icon.png',
        aiprompt: 'Compose a thank you email following an interview for a [job title] position at [company name]. Reference specific topics discussed during the interview and reiterate my enthusiasm for the role and company.',
        slug: 'thank-you-email',
        form: [
            { Label: 'Job Title', field: 'input', name: 'job_title', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Topics Discussed', field: 'textarea', name: 'topics_discussed', required: true }
        ]
    },
    {
        name: 'Research Proposal Outline Creator',
        desc: 'Create an outline for a research proposal.',
        category: 'Academics',
        icon: 'proposal-icon.png',
        aiprompt: 'Create an outline for a research proposal on [research topic] in the field of [academic discipline]. Include sections for introduction, literature review, methodology, expected outcomes, and significance of the research.',
        slug: 'research-proposal-outline',
        form: [
            { Label: 'Research Topic', field: 'input', name: 'research_topic', required: true },
            { Label: 'Academic Discipline', field: 'input', name: 'discipline', required: true }
        ]
    },
    {
        name: 'Presentation Script Writer',
        desc: 'Write a script for a 5-minute presentation.',
        category: 'Academics',
        icon: 'presentation-icon.png',
        aiprompt: 'Write a script for a 5-minute presentation on [topic] for a [class/seminar] in [field of study]. Include an attention-grabbing introduction, 3 main points with supporting details, and a memorable conclusion.',
        slug: 'presentation-script',
        form: [
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Class/Seminar', field: 'input', name: 'class_seminar', required: true },
            { Label: 'Field of Study', field: 'input', name: 'field_of_study', required: true }
        ]
    },
    {
        name: 'Essay Thesis Statement Generator',
        desc: 'Generate a strong thesis statement for an essay.',
        category: 'Academics',
        icon: 'thesis-icon.png',
        aiprompt: 'Generate a strong thesis statement for an essay on [essay topic] in [subject area]. The essay should argue [main argument] and touch on [2-3 supporting points].',
        slug: 'essay-thesis-statement',
        form: [
            { Label: 'Essay Topic', field: 'input', name: 'essay_topic', required: true },
            { Label: 'Subject Area', field: 'input', name: 'subject_area', required: true },
            { Label: 'Main Argument', field: 'input', name: 'main_argument', required: true },
            { Label: 'Supporting Points', field: 'textarea', name: 'supporting_points', required: true }
        ]
    },
    {
        name: 'Study Schedule Planner',
        desc: 'Create a weekly study schedule.',
        category: 'Academics',
        icon: 'schedule-icon.png',
        aiprompt: 'Create a weekly study schedule for a university student taking courses in [list 3-4 subjects]. Include time for lectures, self-study, assignments, and breaks. Optimize for productivity and work-life balance.',
        slug: 'study-schedule-planner',
        form: [
            { Label: 'Subjects', field: 'textarea', name: 'subjects', required: true }
        ]
    },
    {
        name: 'Project Proposal Generator',
        desc: 'Develop a project proposal outline.',
        category: 'Academics',
        icon: 'proposal-icon.png',
        aiprompt: 'Develop a project proposal outline for a [type of project] in [field of study]. Include sections for project objectives, methodology, timeline, required resources, and expected outcomes.',
        slug: 'project-proposal',
        form: [
            { Label: 'Type of Project', field: 'input', name: 'project_type', required: true },
            { Label: 'Field of Study', field: 'input', name: 'field_of_study', required: true }
        ]
    },
    {
        name: 'Academic Paper Abstract Writer',
        desc: 'Write a 250-word abstract for an academic paper.',
        category: 'Academics',
        icon: 'abstract-icon.png',
        aiprompt: 'Write a 250-word abstract for an academic paper on [paper topic] in the field of [academic discipline]. Include the research question, methodology, key findings, and significance of the study.',
        slug: 'academic-paper-abstract',
        form: [
            { Label: 'Paper Topic', field: 'input', name: 'paper_topic', required: true },
            { Label: 'Academic Discipline', field: 'input', name: 'discipline', required: true }
        ]
    },
    {
        name: 'Scholarship Application Essay Planner',
        desc: 'Create an outline for a scholarship application essay.',
        category: 'Applications',
        icon: 'scholarship-icon.png',
        aiprompt: 'Create an outline for a scholarship application essay on the topic "[essay prompt]". Include an introduction highlighting my background, 3-4 main paragraphs showcasing relevant experiences and aspirations, and a compelling conclusion.',
        slug: 'scholarship-application-essay',
        form: [
            { Label: 'Essay Prompt', field: 'input', name: 'essay_prompt', required: true }
        ]
    },
    {
        name: 'Graduate School Statement of Purpose Creator',
        desc: 'Generate a statement of purpose for grad school.',
        category: 'Applications',
        icon: 'statement-icon.png',
        aiprompt: 'Generate a statement of purpose for a [specific graduate program] application. Focus on my academic background in [undergraduate major], research experience in [research area], and career goals related to [career objective].',
        slug: 'graduate-school-sop',
        form: [
            { Label: 'Graduate Program', field: 'input', name: 'graduate_program', required: true },
            { Label: 'Undergraduate Major', field: 'input', name: 'undergraduate_major', required: true },
            { Label: 'Research Area', field: 'input', name: 'research_area', required: true },
            { Label: 'Career Objective', field: 'input', name: 'career_objective', required: true }
        ]
    },
    {
        name: 'Internship Application Letter Writer',
        desc: 'Compose an application letter for internships.',
        category: 'Applications',
        icon: 'application-icon.png',
        aiprompt: 'Compose an application letter for an internship in [specific role/department] at [company name]. Highlight my relevant coursework in [list 2-3 courses], skills in [list key skills], and passion for [aspect of the industry/company].',
        slug: 'internship-application-letter',
        form: [
            { Label: 'Role/Department', field: 'input', name: 'role_department', required: true },
            { Label: 'Company Name', field: 'input', name: 'company_name', required: true },
            { Label: 'Relevant Coursework', field: 'textarea', name: 'coursework', required: true },
            { Label: 'Key Skills', field: 'textarea', name: 'skills', required: true },
            { Label: 'Passion Aspect', field: 'textarea', name: 'passion', required: true }
        ]
    },
    {
        name: 'Academic Reference Request Email Generator',
        desc: 'Draft an email requesting an academic reference.',
        category: 'Networking',
        icon: 'email-icon.png',
        aiprompt: 'Draft an email to [professor\'s name] requesting an academic reference for [specific purpose - e.g., graduate school application]. Remind them of our interaction in [course name/research project] and my performance/contributions.',
        slug: 'academic-reference-request',
        form: [
            { Label: 'Professor\'s Name', field: 'input', name: 'professor_name', required: true },
            { Label: 'Purpose', field: 'input', name: 'purpose', required: true },
            { Label: 'Course Name/Research Project', field: 'textarea', name: 'course_research', required: true },
            { Label: 'Performance/Contributions', field: 'textarea', name: 'performance_contributions', required: true }
        ]
    },
    {
        name: 'Research Funding Proposal Outline Creator',
        desc: 'Create an outline for a research funding proposal.',
        category: 'Academics',
        icon: 'funding-icon.png',
        aiprompt: 'Create an outline for a research funding proposal on [research topic] in [academic field]. Include sections for project summary, objectives, methodology, budget, timeline, and potential impact.',
        slug: 'research-funding-proposal',
        form: [
            { Label: 'Research Topic', field: 'input', name: 'research_topic', required: true },
            { Label: 'Academic Field', field: 'input', name: 'academic_field', required: true }
        ]
    },
    {
        name: 'Networking Follow-up Email Composer',
        desc: 'Compose a follow-up email after a networking event.',
        category: 'Networking',
        icon: 'email-icon.png',
        aiprompt: 'Compose a follow-up email to [name] whom I met at [networking event]. Reference our conversation about [specific topic discussed], express interest in [aspect of their work/company], and suggest a way to stay connected.',
        slug: 'networking-follow-up-email',
        form: [
            { Label: 'Name', field: 'input', name: 'name', required: true },
            { Label: 'Networking Event', field: 'input', name: 'networking_event', required: true },
            { Label: 'Topic Discussed', field: 'textarea', name: 'topic_discussed', required: true },
            { Label: 'Interest Aspect', field: 'textarea', name: 'interest_aspect', required: true }
        ]
    },
    {
        name: 'Personal Blog Post Idea Generator',
        desc: 'Generate blog post ideas for a personal blog.',
        category: 'Blog',
        icon: 'blog-icon.png',
        aiprompt: 'Generate 5 blog post ideas for a personal blog focused on [blog theme - e.g., student life, career development]. Each idea should include a catchy title and a brief description of the main points to cover.',
        slug: 'blog-post-idea',
        form: [
            { Label: 'Blog Theme', field: 'input', name: 'blog_theme', required: true }
        ]
    },
    {
        name: 'LinkedIn Recommendation Request Message Creator',
        desc: 'Write a message requesting a LinkedIn recommendation.',
        category: 'Networking',
        icon: 'linkedin-icon.png',
        aiprompt: 'Write a message requesting a LinkedIn recommendation from [name], my [relationship - e.g., former supervisor] at [company/organization]. Remind them of my key contributions and the skills I demonstrated during our time working together.',
        slug: 'linkedin-recommendation-request',
        form: [
            { Label: 'Name', field: 'input', name: 'name', required: true },
            { Label: 'Relationship', field: 'input', name: 'relationship', required: true },
            { Label: 'Company/Organization', field: 'input', name: 'company_organization', required: true },
            { Label: 'Key Contributions', field: 'textarea', name: 'key_contributions', required: true },
            { Label: 'Skills Demonstrated', field: 'textarea', name: 'skills_demonstrated', required: true }
        ]
    },
    {
        name: 'Job Search Strategy Planner',
        desc: 'Create a comprehensive job search strategy.',
        category: 'Job Application',
        icon: 'strategy-icon.png',
        aiprompt: 'Create a comprehensive job search strategy for a [year of study] student majoring in [field of study]. Include steps for networking, online presence optimization, skill development, and application tracking. Provide a timeline and measurable goals.',
        slug: 'job-search-strategy',
        form: [
            { Label: 'Year of Study', field: 'input', name: 'year_of_study', required: true },
            { Label: 'Field of Study', field: 'input', name: 'field_of_study', required: true }
        ]
    },
    {
        name: 'Lecture Summary Generator',
        desc: 'Summarize key points from your lecture notes.',
        category: 'Study',
        icon: '1.svg',
        aiprompt: 'Summarize the key points from my [subject] lecture notes on [topic]. Highlight main concepts, theories, and any examples provided.',
        slug: 'lecture-summary',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Lecture Notes', field: 'textarea', name: 'notes', required: true }
        ]
    },
    {
        name: 'Flashcard Creator',
        desc: 'Create flashcards for studying important topics.',
        category: 'Study',
        icon: '2.svg',
        aiprompt: 'Create a set of 20 flashcards for studying [specific topic] in [subject]. Include key terms, definitions, and important concepts.',
        slug: 'flashcard-creator',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true }
        ]
    },
    {
        name: 'Practice Quiz Maker',
        desc: 'Generate a multiple-choice quiz for practice.',
        category: 'Study',
        icon: '3.svg',
        aiprompt: 'Generate a 10-question multiple-choice quiz on [topic] for [subject], covering the main points from [textbook chapter/lecture]. Include an answer key with explanations.',
        slug: 'practice-quiz',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Textbook Chapter/Lecture Notes', field: 'textarea', name: 'source', required: true }
        ]
    },
    {
        name: 'Study Schedule Optimizer',
        desc: 'Create an optimized study schedule.',
        category: 'Study',
        icon: '4.svg',
        aiprompt: 'Create an optimized study schedule for the next two weeks, balancing preparation for exams in [list subjects]. Include breaks and suggest effective study techniques for each subject.',
        slug: 'study-schedule-optimizer',
        form: [
            { Label: 'Subjects', field: 'input', name: 'subjects', required: true },
            { Label: 'Exam Dates', field: 'input', name: 'exam_dates', required: true }
        ]
    },
    {
        name: 'Concept Map Builder',
        desc: 'Develop a concept map to understand relationships between ideas.',
        category: 'Study',
        icon: '5.svg',
        aiprompt: 'Develop a concept map for [topic] in [subject], showing the relationships between key ideas, theories, and their applications.',
        slug: 'concept-map',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true }
        ]
    },
    {
        name: 'Mnemonic Device Generator',
        desc: 'Create mnemonic devices to help memorize terms.',
        category: 'Study',
        icon: '6.svg',
        aiprompt: 'Create mnemonic devices to help memorize [list of terms/concepts] for my [subject] exam.',
        slug: 'mnemonic-device',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Terms/Concepts', field: 'textarea', name: 'terms', required: true }
        ]
    },
    {
        name: 'Exam Essay Outline Creator',
        desc: 'Provide an outline for a potential exam essay.',
        category: 'Study',
        icon: '7.svg',
        aiprompt: 'Provide an outline for a potential exam essay on [topic] in [subject]. Include main arguments, supporting points, and potential examples or case studies to reference.',
        slug: 'exam-essay-outline',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true }
        ]
    },
    {
        name: 'Text-to-Questions Converter',
        desc: 'Convert textbook paragraphs into study questions.',
        category: 'Study',
        icon: '8.svg',
        aiprompt: 'Convert the following textbook paragraph into 5 study questions that test understanding of the main concepts: [paste paragraph]',
        slug: 'text-to-questions',
        form: [
            { Label: 'Textbook Paragraph', field: 'textarea', name: 'paragraph', required: true }
        ]
    },
    {
        name: 'Analogy Generator',
        desc: 'Generate analogies to explain complex concepts.',
        category: 'Study',
        icon: '9.svg',
        aiprompt: 'Generate 3 analogies to explain [complex concept] in [subject], making it easier to understand and remember.',
        slug: 'analogy-generator',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Complex Concept', field: 'input', name: 'concept', required: true }
        ]
    },
    {
        name: 'Key Terms Extractor',
        desc: 'Extract and define important terms from lecture notes.',
        category: 'Study',
        icon: '10.svg',
        aiprompt: 'Extract and define the 10 most important terms from these lecture notes on [topic] in [subject]: [paste notes]',
        slug: 'key-terms-extractor',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Lecture Notes', field: 'textarea', name: 'notes', required: true }
        ]
    },
    {
        name: 'Study Group Discussion Guide',
        desc: 'Create a guide for study group discussions.',
        category: 'Study',
        icon: '11.svg',
        aiprompt: 'Create a discussion guide for a study group session on [topic] in [subject]. Include key questions, potential debate topics, and collaborative exercises.',
        slug: 'study-group-guide',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true }
        ]
    },
    {
        name: 'Exam Revision Checklist',
        desc: 'Generate a comprehensive revision checklist.',
        category: 'Study',
        icon: '12.svg',
        aiprompt: 'Generate a comprehensive revision checklist for my upcoming [subject] exam, covering [list of topics]. Include key areas to review and suggested practice activities.',
        slug: 'exam-revision-checklist',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'List of Topics', field: 'textarea', name: 'topics', required: true }
        ]
    },
    {
        name: 'Citation Practice Generator',
        desc: 'Create citation practice exercises.',
        category: 'Study',
        icon: '13.svg',
        aiprompt: 'Create 5 citation practice exercises in [APA/MLA/Chicago] style, using fictional sources related to [subject area].',
        slug: 'citation-practice',
        form: [
            { Label: 'Citation Style', field: 'input', name: 'style', required: true },
            { Label: 'Subject Area', field: 'input', name: 'subject_area', required: true }
        ]
    },
    {
        name: 'Problem-Solving Steps Breakdown',
        desc: 'Break down the steps for solving specific problems.',
        category: 'Study',
        icon: '14.svg',
        aiprompt: 'Break down the problem-solving steps for [type of problem] in [subject, e.g., physics, math]. Provide a general framework applicable to similar problems.',
        slug: 'problem-solving-steps',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Type of Problem', field: 'input', name: 'problem_type', required: true }
        ]
    },
    {
        name: 'Research Question Refiner',
        desc: 'Refine and improve research questions.',
        category: 'Study',
        icon: '15.svg',
        aiprompt: 'Refine the following research question for my [subject] paper: [paste initial question]. Suggest ways to make it more focused and answerable.',
        slug: 'research-question-refiner',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Research Question', field: 'textarea', name: 'question', required: true }
        ]
    },
    {
        name: 'Academic Reading Comprehension Aid',
        desc: 'Enhance reading comprehension with targeted questions.',
        category: 'Study',
        icon: '16.svg',
        aiprompt: 'Generate 5 pre-reading questions and 5 post-reading reflection questions for the academic article titled "[article title]" to enhance comprehension and critical thinking.',
        slug: 'reading-comprehension-aid',
        form: [
            { Label: 'Article Title', field: 'input', name: 'title', required: true }
        ]
    },
    {
        name: 'Lab Report Structure Advisor',
        desc: 'Get a detailed structure for lab reports.',
        category: 'Study',
        icon: '17.svg',
        aiprompt: 'Provide a detailed structure for a lab report on [experiment name] in [subject], including what information should be included in each section.',
        slug: 'lab-report-structure',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Experiment Name', field: 'input', name: 'experiment', required: true }
        ]
    },
    {
        name: 'Thesis Statement Evaluator',
        desc: 'Evaluate and improve thesis statements.',
        category: 'Study',
        icon: '18.svg',
        aiprompt: 'Evaluate the following thesis statement for my essay on [topic]: [paste thesis statement]. Suggest improvements for clarity, specificity, and arguability.',
        slug: 'thesis-statement-evaluator',
        form: [
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Thesis Statement', field: 'textarea', name: 'thesis', required: true }
        ]
    },
    {
        name: 'Historical Event Timeline Creator',
        desc: 'Create a timeline of key historical events.',
        category: 'Study',
        icon: '19.svg',
        aiprompt: 'Create a timeline of key events related to [historical period/topic] for my [subject] class. Include dates and brief descriptions of each event\'s significance.',
        slug: 'historical-timeline',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Historical Period/Topic', field: 'input', name: 'topic', required: true }
        ]
    },
    {
        name: 'Mathematical Concept Explainer',
        desc: 'Explain complex mathematical concepts in simple terms.',
        category: 'Study',
        icon: '20.svg',
        aiprompt: 'Explain the concept of [mathematical concept] as you would to a fellow student who is struggling to understand it. Use simple language and provide an example.',
        slug: 'math-concept-explainer',
        form: [
            { Label: 'Mathematical Concept', field: 'input', name: 'concept', required: true }
        ]
    },
    {
        name: 'Literature Review Synthesizer',
        desc: 'Synthesize main arguments from multiple sources.',
        category: 'Study',
        icon: '21.svg',
        aiprompt: 'Synthesize the main arguments from the following sources on [topic] in [subject]: [list sources]. Identify common themes and areas of disagreement.',
        slug: 'literature-review-synthesizer',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Topic', field: 'input', name: 'topic', required: true },
            { Label: 'Sources', field: 'textarea', name: 'sources', required: true }
        ]
    },
    {
        name: 'Case Study Analysis Framework',
        desc: 'Provide a framework for analyzing case studies.',
        category: 'Study',
        icon: '22.svg',
        aiprompt: 'Provide a framework for analyzing a case study in [subject area]. Include key questions to consider and steps for structuring the analysis.',
        slug: 'case-study-analysis',
        form: [
            { Label: 'Subject Area', field: 'input', name: 'subject_area', required: true }
        ]
    },
    {
        name: 'Theoretical Perspective Summarizer',
        desc: 'Summarize key points of theoretical perspectives.',
        category: 'Study',
        icon: '23.svg',
        aiprompt: 'Summarize the main points of [theoretical perspective] in [subject]. Include its key proponents, main arguments, and critiques.',
        slug: 'theoretical-perspective-summary',
        form: [
            { Label: 'Subject', field: 'input', name: 'subject', required: true },
            { Label: 'Theoretical Perspective', field: 'input', name: 'perspective', required: true }
        ]
    },
    {
        name: 'Experimental Design Advisor',
        desc: 'Suggest experimental designs for hypotheses.',
        category: 'Study',
        icon: '24.svg',
        aiprompt: 'Suggest an experimental design to test the hypothesis: [state hypothesis] in [subject area]. Include variables to consider, control measures, and potential limitations.',
        slug: 'experimental-design-advisor',
        form: [
            { Label: 'Subject Area', field: 'input', name: 'subject_area', required: true },
            { Label: 'Hypothesis', field: 'textarea', name: 'hypothesis', required: true }
        ]
    },
    {
        name: 'Academic Vocabulary Builder',
        desc: 'Generate a list of advanced academic terms.',
        category: 'Study',
        icon: '25.svg',
        aiprompt: 'Generate a list of 15 advanced academic terms commonly used in [subject area], along with their definitions and example sentences.',
        slug: 'academic-vocabulary-builder',
        form: [
            { Label: 'Subject Area', field: 'input', name: 'subject_area', required: true }
        ]
    }
]

