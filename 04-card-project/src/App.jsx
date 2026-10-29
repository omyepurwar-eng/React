import React from 'react'
import {Bookmark}from 'lucide-react'
import Card from './components/Card'


const App = () => {

  const jobOpenings = [
  {
    brandlogo: "https://cdn.simpleicons.org/google",
    companyName: "Google",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/amazon",
    companyName: "Amazon",
    datePosted: "10 days ago",
    post: "Frontend Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/meta",
    companyName: "Meta",
    datePosted: "2 weeks ago",
    post: "React Developer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$65/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/apple",
    companyName: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$55/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/netflix",
    companyName: "Netflix",
    datePosted: "1 week ago",
    post: "Backend Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$80/hour",
    location: "Mumbai, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/microsoft",
    companyName: "Microsoft",
    datePosted: "6 days ago",
    post: "Full Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Pune, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/nvidia",
    companyName: "NVIDIA",
    datePosted: "12 days ago",
    post: "AI/ML Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$70/hour",
    location: "Bengaluru, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/adobe",
    companyName: "Adobe",
    datePosted: "4 days ago",
    post: "UI/UX Designer",
    tag1: "Part Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Noida, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/salesforce",
    companyName: "Salesforce",
    datePosted: "8 days ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$52/hour",
    location: "Hyderabad, India"
  },
  {
    brandlogo: "https://cdn.simpleicons.org/oracle",
    companyName: "Oracle",
    datePosted: "10 weeks ago",
    post: "Database Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$60/hour",
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
      {
        jobOpenings.map(function(elem,idx){
          return <div key ={idx}>
            <Card 
          company = {elem.companyName}
          logo ={elem.brandlogo}
          post = {elem.datePosted}
          tag1 = {elem.tag1}
          tag2 = {elem.tag2}
          pay = {elem.pay}
          location = {elem.location}
          posting = {elem.post}
           />
          </div>
          
          }
        )
      }
    </div>
  )
}

export default App
