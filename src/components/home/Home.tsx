import design from './Home.module.scss'
import Cards1 from '../cards/Cards1'
import topImg from '../../images/aishit.png'
import Title from '../title/Title'


const Home = () => {
  return (

    <div>
      <div className={` ${design.background}`}>
    <img src={topImg} alt='topImg' className={design.img} />

    <Title/>
  <Cards1/>

  </div>
  </div>
  )
}

export default Home