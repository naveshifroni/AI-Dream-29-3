import { useState } from 'react';
import { Gender } from '../../features/cards/cardSlice';
import { Card, addCard } from '../../features/cards/cardSlice';
import { v4 } from 'uuid';
import { useAppDispatch } from '../../app/hooks';
import design from './AddBot.module.scss'

import Swal from 'sweetalert2';


const AddBot = () => {

   const [name, setName] = useState('');
   const [description, setDescription] = useState('');
   const [age, setAge] = useState(0);
   const [img, setImg] = useState('');
   const [sensitive, setSensitive] = useState(false);
   const [funny, setFunny] = useState(false);
   const [smart, setSmart] = useState(false);//להחליף ל useref
   const [gender, setGender] = useState<Gender>('Robot');
   
   const dispatch = useAppDispatch();
    
 
  
  

  


  return (
    <div className={`d-flex card ${design.add}`}>
      <h3 className={design.title}> Create Your Own Home Made Friend </h3>

      <hr />

      <div className={design.pair}>
        <div className={design.label}>Name</div>

        <input
          className={design.input}
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
      </div>

      <div className={design.pair2}>
        <div className={design.label2}>Description</div>
      
        <input
          className={design.input2}
          value={description}
          onChange={(e) => setDescription(e.currentTarget.value)}
        />
      </div>

      <div className={design.pair}>
        <div className={design.label}>Image (url link) </div>
        <input
          className={design.input}
          value={img}
          onChange={(e) => setImg(e.currentTarget.value)}
        />
      </div>

      <div className={design.pair}>
        <div className={design.label}> Age </div>
        <input
          className={design.input}
          min="0"
          value={age}
          onChange={(e) => setAge(+e.currentTarget.value)}
        />
      </div>

      <div className={design.pair}>
        <label htmlFor="name" className={design.label}>
          {" "}
          Funny{" "}
        </label>
        <input
          className={design.input}
          type="checkbox"
          checked={funny}
          onChange={(e) => setFunny(e.currentTarget.checked)}
        />
      </div>

      <div className={design.pair}>
        <label htmlFor="name" className={design.label}>
          {" "}
          Smart{" "}
        </label>
        <input
          className={design.input}
          type="checkbox"
          checked={smart}
          onChange={(e) => setSmart(e.currentTarget.checked)}
        />
      </div>

      <div className={design.pair}>
        <label htmlFor="name" className={design.label}>
          {" "}
          Sensitive{" "}
        </label>
        <input
          className={design.input}
          type="checkbox"
          checked={sensitive}
          onChange={(e) => setSensitive(e.currentTarget.checked)}
        />
      </div>
      <div className={design.pair}>
        <label htmlFor="name" className={design.label}>
          {" "}
          Gender{" "}
        </label>
        <select
          className={design.input}
          value={gender}
          name="Gender"
          id="gender"
          onChange={(e) => {
            const gen = e.currentTarget.value as Gender;
            setGender(gen);
          }}
        >
          <option value="Male"> Male </option>
          <option value="Female"> Female </option>
          <option value="Androgyny"> Androgyny </option>
          <option value="Robot"> Robot </option>
        </select>
      </div>

      <button
        className={`w-75 align-self-center btn ${design.button}`}
        onClick={() => {
          const card: Card = {
            id: v4(),
            name: name,
            description: description,
            img: img,
            age: age,
            funny: funny,
            smart: smart,
            sensitive: sensitive,
            gender: gender,
          };
          dispatch(addCard(card));
          Swal.fire("success", "", "success");
        }}
      >
        Add Card{" "}
      </button>
    </div>
  );
}

export default AddBot