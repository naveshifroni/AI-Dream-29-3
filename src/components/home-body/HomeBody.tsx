
import girl from '../../images/girl.jpg'
import bg from '../../images/bg.jpg'
import design from './HomeBody.module.scss'
import comp from '../../images/computing.png'



const HomeBody = () => {
  return (
    <>
      <div className={`container ${design.background}`}>
        <h2 className="p-5"> About Us </h2>

        <div className={design.background}>
          <div className={design.boxes}>
            <div className={design.text}>
              <h4 className={design.we}> We Will Make </h4>
              <h2 className={design.machine}> Your Machine Learn </h2>
              <p>
                Use AI to get the best out of your business We are a new company
                who believes that AI has a place in every business and you
                shouldn’t have to be Facebook, Google or Amazon to benefit. We
                have created a recommender system that can be adapted to any
                catalogue and to optimise for any
              </p>
            </div>
            <div className={design.images}>
              <img src={bg} alt="girl" className={design.bg} />
              <img src={comp} alt="comp" className={design.comp} />
              <img src={girl} alt="bg" className={design.girl} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBody;