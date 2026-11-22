import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'
const App = () => {
 const user = [
  {
    img: 'https://plus.unsplash.com/premium_photo-1661630621969-6d9faac03f9f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Prime customers, that have access to bank credit and are satisfied with the current product.',
    tag: 'Satisfied',
    color: 'royalblue',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Prime customers, that have access to bank credit and are not satisfied with the current service.',
    tag: 'Underserved',
    color: 'lightseagreen',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Customers from near-prime and sub-prime segments with no access to bank credit.',
    tag: 'Underbanked',
    color: 'orange',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Small business owners looking for fast digital loans with flexible repayment options.',
    tag: 'Emerging',
    color: 'mediumseagreen',
  },
  {
    img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Young professionals actively using digital wallets and instant payment apps daily.',
    tag: 'Digital First',
    color: 'slateblue',
  },
  {
    img: 'https://images.unsplash.com/photo-1507206130118-b5907f817163?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'High-net-worth individuals seeking personalized wealth management and advisory.',
    tag: 'Premium',
    color: 'goldenrod',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661284836545-3a6ec65fcffc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'First-time credit applicants building their financial history through micro-loans.',
    tag: 'New to Credit',
    color: 'coral',
  },
  {
    img: 'https://plus.unsplash.com/premium_photo-1661281292577-27c65307ac42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
    intro: 'Freelancers and gig workers needing steady cash-flow tools and automated savings.',
    tag: 'Gig Economy',
    color: 'mediumorchid',
  },
]
  return (
    <div>
      <Section1 users={user}/>
     
    </div>
  )
}

export default App
