import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { Card, editCard } from '../../features/cards/cardSlice'
const EditCard = () => {

  const {id} = useParams();

  const nav = useNavigate();

  const cards = useAppSelector(state=>state.cards.cards);

  console.log(cards)
  
  const dispatch = useAppDispatch()

  const cardToEdit = cards.find(c=>c.id===id);

  console.log(cardToEdit)

   const [name, setName] = useState(cardToEdit?.name ?? '');
   const [age, setAge] = useState(cardToEdit?.age ?? 0);
   const [sensitive, setSensitive] = useState(cardToEdit?.sensitive ?? false);
   const [funny, setFunny] = useState(cardToEdit?.funny ?? false);
   const [smart, setSmart] = useState(cardToEdit?.smart ?? false);// להוסיף עוד משתנים בהתאם

  if (cardToEdit === undefined) {
    return <Navigate to='/' />
  }

 

  return (
    <div className='d-flex card p-3 m-2'>
       <h3> Edit Bot </h3>


       <div className='label-input d-flex flex-column'>
       <label htmlFor="name"> Bot's Name </label>
       <input 
       id = 'name'
       value={name} 
       onChange={(e)=>{
        setName(e.currentTarget.value);
       }} 
       placeholder= 'name'
       />
       <br />
       </div>

<div className='label-input d-flex flex-column'>
       <label htmlFor="age"> Bot's Age </label>
       <input 
       min = '0'
       max = '1000'
       type = 'number'
       id = 'price' 
       value= {age}
       onChange = {(e)=>{
       setAge(+e.currentTarget.value);
       }} 
       placeholder= 'age'
       />
       <br />
       </div>

       <div className='label-input d-flex flex-column'>
       <label htmlFor="funny"> Bot's Humor </label>
       <input 
       type = 'checkbox'
       id = 'funny' 
       checked = {funny}
       onChange = {(e)=>{
       setFunny(e.currentTarget.checked);
       }} 
       placeholder= 'funny'
       />
       <br />
       </div>

        <div className='label-input d-flex flex-column'>
       <label htmlFor="smart"> Bot's Brain </label>
       <input 
       type = 'checkbox'
       id = 'smart' 
       checked = {smart}
       onChange = {(e)=>{
       setSmart(e.currentTarget.checked);
       }} 
       placeholder= 'smart'
       />
       <br />
       </div>

        <div className='label-input d-flex flex-column'>
       <label htmlFor="sensitive"> Bot's Sensitivity </label>
       <input 
       type = 'checkbox'
       id = 'sensitive' 
       checked = {sensitive}
       onChange = {(e)=>{
       setSensitive(e.currentTarget.checked);
       }} 
       placeholder= 'sensitive'
       />
       <br />
       </div>
       
       <button className='btn btn-success' onClick={()=>{
        
        const card: Card = {
          id : cardToEdit.id,
          name : name,
          description : cardToEdit.description,
          img : cardToEdit.img,
          age : age,
          funny : funny,
          smart : smart,
          sensitive : sensitive,
          gender : cardToEdit.gender, 
          }; 
        dispatch(editCard(card));

        nav(-1)

       }} > 
       Finish 
       </button>
        
        </div>
  )
}

export default EditCard