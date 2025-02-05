const courses = {
    NEET: {
      title: "NEET Syllabus",
      intro: "The NEET syllabus is divided into three subjects: Physics, Chemistry, and Biology. Below is the detailed syllabus for each:",
      subjects: {
        Physics: ["Physical world and Measurement", "Kinematics", "Laws of Motion", "Work, Energy, and Power", "Optics", "Semiconductors"],
        Chemistry: ["Structure of Atom", "Chemical Bonding", "Thermodynamics", "Organic Chemistry – Some Basic Principles"],
        Biology: ["Diversity of Living Organisms", "Human Physiology", "Biotechnology and Its Applications"]
      }
    },
    JEE: {
      title: "JEE Syllabus",
      intro: "The JEE syllabus is divided into three subjects: Physics, Chemistry, and Mathematics. Below is the detailed syllabus for each:",
      subjects: {
        Physics: ["Electrostatics", "Current Electricity", "Thermodynamics", "Kinetic Theory of Gases"],
        Chemistry: ["Atomic Structure", "Chemical Equilibrium", "Coordination Compounds", "Hydrocarbons"],
        Mathematics: ["Calculus", "Algebra", "Probability", "Trigonometry"]
      }
    },
    CLAT: {
      title: "CLAT Syllabus",
      intro: "The CLAT syllabus covers subjects like Legal Reasoning, English, and Logical Reasoning. Below is the detailed syllabus for each:",
      subjects: {
        "Legal Reasoning": ["Legal Principles", "Legal Terms", "Constitutional Law"],
        English: ["Reading Comprehension", "Vocabulary", "Grammar"],
        "Logical Reasoning": ["Analytical Reasoning", "Blood Relations", "Series"]
      }
    },
    CUET: {
      title: "CUET Syllabus",
      intro: "The CUET syllabus includes Science and Commerce streams. Below is the syllabus for each:",
      subjects: {
        Science: ["Physics", "Chemistry", "Mathematics", "Biology"],
        Commerce: ["Accounting", "Business Studies", "Economics"]
      }
    },
    Foundation: {
      title: "Foundation Courses Syllabus",
      intro: "The Foundation Courses syllabus includes topics for Classes 6 to 10. Below is the syllabus for each class:",
      subjects: {
        "Class 6": ["Mathematics", "Science", "Social Studies"],
        "Class 7": ["Advanced Mathematics", "Biology Basics", "History"],
        "Class 8": ["Physics Introduction", "Chemical Equations", "Civics"],
        "Class 9": ["Force and Motion", "Periodic Table", "Democracy"],
        "Class 10": ["Electricity", "Organic Chemistry", "World Wars"]
      }
    }
  };

  // Render Syllabus Based on Selection
  function renderSyllabus(course) {
    const data = courses[course];
    document.getElementById("course-title").textContent = data.title;
    document.getElementById("syllabus-title").textContent = data.title;
    document.getElementById("syllabus-intro").textContent = data.intro;

    const syllabusContent = document.getElementById("syllabus-content");
    syllabusContent.innerHTML = "";

    for (const [subject, topics] of Object.entries(data.subjects)) {
      const subjectHeader = document.createElement("h3");
      subjectHeader.textContent = subject;

      const topicList = document.createElement("ul");
      topics.forEach(topic => {
        const listItem = document.createElement("li");
        listItem.textContent = topic;
        topicList.appendChild(listItem);
      });

      syllabusContent.appendChild(subjectHeader);
      syllabusContent.appendChild(topicList);
    }
  }

  // Go back to Study Materials page
  function goBack() {
    document.getElementById("course-title").textContent = "Course Syllabus";
    document.getElementById("syllabus-title").textContent = "Syllabus Overview";
    document.getElementById("syllabus-intro").textContent = "The syllabus is divided into multiple subjects. Below is the detailed syllabus for each:";

    const syllabusContent = document.getElementById("syllabus-content");
    syllabusContent.innerHTML = "<h3>Subject 1</h3><ul><li>Topic 1</li><li>Topic 2</li><li>Topic 3</li></ul>";
  }

  // Example: Load NEET Syllabus Initially
  renderSyllabus("NEET");

  
<script>
    function toggleMenu() {
        const navCenter = document.querySelector('.nav-center');
        navCenter.classList.toggle('show');
    }
</script>

  