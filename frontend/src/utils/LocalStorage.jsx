const employees = [
  {
    id: 1,
    email: "employee1@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Submit Daily Report",
        taskDescription: "Submit today’s work summary",
        taskDate: "2026-01-22",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Client Follow-up",
        taskDescription: "Follow up with assigned client",
        taskDate: "2026-01-18",
        category: "Client"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Project Deployment",
        taskDescription: "Deploy project to production server",
        taskDate: "2026-01-15",
        category: "Development"
      }
    ]
  },
  {
    id: 2,
    email: "employee2@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Dashboard UI",
        taskDescription: "Create UI for admin dashboard",
        taskDate: "2026-01-23",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Fix Login Bug",
        taskDescription: "Resolve authentication issue",
        taskDate: "2026-01-19",
        category: "Bug Fix"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate backend APIs",
        taskDate: "2026-01-24",
        category: "Backend"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Unit Testing",
        taskDescription: "Write test cases for modules",
        taskDate: "2026-01-16",
        category: "Testing"
      }
    ]
  },
  {
    id: 3,
    email: "employee3@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Content Writing",
        taskDescription: "Write blog content",
        taskDate: "2026-01-22",
        category: "Content"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "SEO Optimization",
        taskDescription: "Optimize blog SEO",
        taskDate: "2026-01-17",
        category: "Marketing"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Keyword Research",
        taskDescription: "Research trending keywords",
        taskDate: "2026-01-23",
        category: "Research"
      }
    ]
  },
  {
    id: 4,
    email: "employee4@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Customer Support",
        taskDescription: "Handle customer tickets",
        taskDate: "2026-01-22",
        category: "Support"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Refund Processing",
        taskDescription: "Process refund requests",
        taskDate: "2026-01-18",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "Live Chat Handling",
        taskDescription: "Manage live chat queries",
        taskDate: "2026-01-16",
        category: "Support"
      }
    ]
  },
  {
    id: 5,
    email: "employee5@example.com",
    password: "123",
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Inventory Check",
        taskDescription: "Verify stock inventory",
        taskDate: "2026-01-22",
        category: "Operations"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Vendor Communication",
        taskDescription: "Coordinate with suppliers",
        taskDate: "2026-01-17",
        category: "Operations"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Purchase Order",
        taskDescription: "Create purchase orders",
        taskDate: "2026-01-24",
        category: "Procurement"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]



export const setLocalStorage = () => { 
  localStorage.setItem("employees", JSON.stringify(employees)) 
  localStorage.setItem("admin", JSON.stringify(admin))
 } 
 export const getLocalStorage = () => { 
  const employees = JSON.parse(localStorage.getItem('employees')) 
  const admin = JSON.parse(localStorage.getItem('admin')) 
  console.log(employees,admin) 
}