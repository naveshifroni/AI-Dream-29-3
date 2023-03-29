import { Card, deleteCard } from '../../features/cards/cardSlice';
import { BsPencil, BsTrash, BsCartCheck } from 'react-icons/bs'
import {FiGift} from 'react-icons/fi'
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../app/hooks';
import design from './CardItem.module.scss'
import Swal from 'sweetalert2';


const CardItem = (props: Card) => {
  const nav = useNavigate();
  const dispatch = useAppDispatch();
  return (
    <div className={design.item}>
      <div className="card p-2 d-flex">
        <h2>{props.name}</h2>
        <img src={props.img} alt="img" className={design.preview} />
        <p className={design.description}>
          About Me:
          <br />
          {props.description}
        </p>
        <button
          className={`btn m-auto ${design.buttons}`}
          onClick={() => {
            nav(`/cards/edit/${props.id}`);
          }}
        >
          Edit Me &nbsp;
          <BsPencil />
        </button>

        <button
          className={`btn m-auto ${design.buttons}`}
          onClick={() => {
            /* dispatch(deleteCard(props.id)) */
            Swal.fire({
              title: `Are you sure you want to delete ${props.name}?`,
              showDenyButton: true,
              confirmButtonText: "Yes",
              denyButtonText: `No`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) {
                dispatch(deleteCard(props.id));
                Swal.fire("Deleted!", "", "success");
              } else if (result.isDenied) {
                Swal.fire(`Keeping ${props.name}`, "", "info");
              }
            });
          }}
        >
          Delete Me &nbsp;
          <BsTrash />
        </button>
      </div>
    </div>
  );
}

export default CardItem