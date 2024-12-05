localStorage.clear()
const employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        title: "Design Login Page",
        description: "Create a user-friendly login page for the app.",
        date: "2024-12-04",
        category: "Design",
        status: {
          pending: true,
          inProgress: false,
          completed: false,
          onHold: false,
          review: false
        }
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve overlapping issue in the navbar on mobile devices.",
        date: "2024-12-05",
        category: "Development",
        status: {
          pending: false,
          inProgress: true,
          completed: false,
          onHold: false,
          review: false
        }
      },
      {
        title: "Prepare Presentation",
        description: "Create slides for the client meeting on UX improvements.",
        date: "2024-12-06",
        category: "Documentation",
        status: {
          pending: false,
          inProgress: false,
          completed: false,
          onHold: true,
          review: false
        }
      }
    ],
    taskSummary: {
      completed: 0,
      inProgress: 1,
      pending: 1,
      onHold: 1,
      review: 0
    }
  },
  {
    id: 2,
    firstName: "Vihaan",
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        title: "Database Optimization",
        description: "Optimize database queries for faster performance.",
        date: "2024-12-04",
        category: "Development",
        status: {
          pending: false,
          inProgress: false,
          completed: true,
          onHold: false,
          review: true
        }
      },
      {
        title: "Write Unit Tests",
        description: "Add unit tests for the API endpoints.",
        date: "2024-12-05",
        category: "Testing",
        status: {
          pending: false,
          inProgress: true,
          completed: false,
          onHold: false,
          review: false
        }
      }
    ],
    taskSummary: {
      completed: 1,
      inProgress: 1,
      pending: 0,
      onHold: 0,
      review: 1
    }
  },
  {
    id: 3,
    firstName: "Ananya",
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        title: "Research New Tools",
        description: "Evaluate new project management tools for the team.",
        date: "2024-12-04",
        category: "Research",
        status: {
          pending: false,
          inProgress: true,
          completed: false,
          onHold: false,
          review: false
        }
      },
      {
        title: "Update Documentation",
        description: "Revise the README file with recent project updates.",
        date: "2024-12-06",
        category: "Documentation",
        status: {
          pending: true,
          inProgress: false,
          completed: false,
          onHold: false,
          review: false
        }
      }
    ],
    taskSummary: {
      completed: 0,
      inProgress: 1,
      pending: 1,
      onHold: 0,
      review: 0
    }
  },
  {
    id: 4,
    firstName: "Ishaan",
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        title: "UI Enhancement",
        description: "Enhance the dashboard UI for better accessibility.",
        date: "2024-12-07",
        category: "Design",
        status: {
          pending: false,
          inProgress: true,
          completed: false,
          onHold: false,
          review: false
        }
      },
      {
        title: "Deploy Application",
        description: "Deploy the new build to the production server.",
        date: "2024-12-08",
        category: "DevOps",
        status: {
          pending: true,
          inProgress: false,
          completed: false,
          onHold: false,
          review: false
        }
      }
    ],
    taskSummary: {
      completed: 0,
      inProgress: 1,
      pending: 1,
      onHold: 0,
      review: 0
    }
  },
  {
    id: 5,
    firstName: "Priya",
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        title: "Conduct Code Review",
        description: "Review the pull requests from junior developers.",
        date: "2024-12-09",
        category: "Code Review",
        status: {
          pending: false,
          inProgress: false,
          completed: false,
          onHold: false,
          review: true
        }
      },
      {
        title: "Fix Login Bug",
        description: "Investigate and fix the login issue reported by QA.",
        date: "2024-12-10",
        category: "Bug Fixing",
        status: {
          pending: true,
          inProgress: false,
          completed: false,
          onHold: false,
          review: false
        }
      }
    ],
    taskSummary: {
      completed: 0,
      inProgress: 0,
      pending: 1,
      onHold: 0,
      review: 1
    }
  }
];

const admin = {
  id: 1,
  firstName: "Arushi",
  email: "admin@example.com",
  password: "123"
};

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) || [];
  const admin = JSON.parse(localStorage.getItem("admin")) || null;
  return { employees, admin };
};

