import './Home.css'
import CountDownBlocks from '../CountDownBlocks/CountDownBlocks'
import moment from 'moment'

const Home = () => {
  const endTime = moment('09/25/2021, 5:00 pm').toDate()
  return (
    <div className="container">
      <CountDownBlocks endTime={endTime} />
    </div>
  )
}

export default Home;