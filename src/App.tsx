
import './App.css'
import Card from './Components/BlueTickCard'

export type BlueTickCard = {
  image: string,
  name: string,
  role: string,
  verified: boolean,
}

function App() {
  const profile: BlueTickCard = {
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNT61tWKdL1G29WWwk3QlE3aYLTU6H2Lfjd_ESU34I0fbDGEdZjmdI9d2Hg3yo_SpcTvo&usqp=CAU",
    name:"Aqsa Aslam",
    role:"UI/UX Designer",
    verified: true,
  }

  return (
    <>
     <Card image={profile.image} name = {profile.name} role = {profile.role} verified = {profile.verified} />
    </>
  )
}

export default App
