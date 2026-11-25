const employees =
[
  {
    "id": 1,
    "firstName": "Rahul",
    "email": "er@er.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 2,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Complete Homepage Design",
        "taskDescription": "Create a responsive homepage design using React and Tailwind CSS.",
        "taskDate": "2026-11-22",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update User Profile",
        "taskDescription": "Add profile editing functionality and update user details.",
        "taskDate": "2026-11-19",
        "category": "Development"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix Login Authentication",
        "taskDescription": "Debug login issues and implement proper form validation.",
        "taskDate": "2026-11-23",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Weekly Report",
        "taskDescription": "Prepare and submit the weekly project progress report.",
        "taskDate": "2026-11-18",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Test Dashboard",
        "taskDescription": "Perform functional testing on the employee dashboard.",
        "taskDate": "2026-11-24",
        "category": "Testing"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Amit",
    "email": "employee2@gmail.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Design Landing Page",
        "taskDescription": "Create a modern landing page with responsive layouts.",
        "taskDate": "2026-11-22",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Create Logo Concepts",
        "taskDescription": "Prepare three logo concepts for the company branding.",
        "taskDate": "2026-11-20",
        "category": "Design"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Optimize Images",
        "taskDescription": "Compress website images to improve loading speed.",
        "taskDate": "2026-11-25",
        "category": "Optimization"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update Color Palette",
        "taskDescription": "Finalize the primary and secondary brand colors.",
        "taskDate": "2026-11-19",
        "category": "Design"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare Design Presentation",
        "taskDescription": "Create slides explaining the new UI design system.",
        "taskDate": "2026-11-17",
        "category": "Documentation"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Priya",
    "email": "employee3@gmail.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Develop REST API",
        "taskDescription": "Build REST API endpoints for employee management.",
        "taskDate": "2026-11-23",
        "category": "Development"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Database Setup",
        "taskDescription": "Configure database tables and establish relationships.",
        "taskDate": "2026-11-18",
        "category": "Database"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Fix API Errors",
        "taskDescription": "Resolve API response errors and improve error handling.",
        "taskDate": "2026-11-24",
        "category": "Debugging"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Write Unit Tests",
        "taskDescription": "Write unit tests for authentication and API endpoints.",
        "taskDate": "2026-11-20",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Deploy Backend",
        "taskDescription": "Deploy the backend application to the production server.",
        "taskDate": "2026-11-16",
        "category": "Deployment"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Sneha",
    "email": "employee4@gmail.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Create Marketing Strategy",
        "taskDescription": "Develop a marketing strategy for the upcoming product launch.",
        "taskDate": "2026-11-24",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Research Competitors",
        "taskDescription": "Analyze competitor pricing, products, and marketing strategies.",
        "taskDate": "2026-11-19",
        "category": "Research"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare Social Media Posts",
        "taskDescription": "Create engaging posts for Instagram and LinkedIn.",
        "taskDate": "2026-11-25",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Analyze Campaign Results",
        "taskDescription": "Review engagement metrics from the previous campaign.",
        "taskDate": "2026-11-20",
        "category": "Analytics"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Submit Campaign Budget",
        "taskDescription": "Prepare the estimated budget for the next marketing campaign.",
        "taskDate": "2026-11-18",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Vikram",
    "email": "employee5@gmail.com",
    "password": "123",
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Perform Website Testing",
        "taskDescription": "Test the website across different browsers and screen sizes.",
        "taskDate": "2026-11-22",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Fix Navigation Bugs",
        "taskDescription": "Resolve navigation and routing issues in the application.",
        "taskDate": "2026-11-19",
        "category": "Debugging"
      },
      {
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Check Payment Integration",
        "taskDescription": "Verify payment gateway integration and transaction handling.",
        "taskDate": "2026-11-24",
        "category": "Testing"
      },
      {
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare Bug Report",
        "taskDescription": "Document identified bugs and their reproduction steps.",
        "taskDate": "2026-11-20",
        "category": "Documentation"
      },
      {
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Verify Mobile Responsiveness",
        "taskDescription": "Check and report responsive layout issues on mobile devices.",
        "taskDate": "2026-11-17",
        "category": "Testing"
      }
    ]
  }
]



const admin = [
    {
    "id": 1,
    "email": "admin@gmail.com",
    "password": "123"
    }
]


export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
}

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees')||[])
    const admin = JSON.parse(localStorage.getItem('admin')||[])

    return {employees,admin}

}