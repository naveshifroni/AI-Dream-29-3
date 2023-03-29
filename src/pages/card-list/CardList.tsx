import { useAppSelector } from "../../app/hooks"
import CardItem from "../card-item/CardItem"
import design from './CardList.module.scss'
import AddBot from "../../components/add-bot/AddBot"
import HomeBody from "../../components/home-body/HomeBody"



const CardList = () => {
  const cards = useAppSelector((state) => state.cards.cards);
  return (
    <div className={design.background}>
      <HomeBody />
      <div className={`container ${design.background}`}>
       
          <div className={design.bots2}>
            <h2 className={design.headerbots}>
             Our custom AI friends for hire
            </h2>

            <div className={design.bots}>
              {cards.map((card) => (
                <div className={design.bot}>
                  <CardItem {...card} key={card.id} />
                </div>
              ))}
            </div>
            <div className="d-flex flex-wrap justify-content-center align-items-center">
              <AddBot />
            </div>
          </div>
        </div>
    </div>
  );
};

export default CardList;