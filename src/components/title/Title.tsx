import design from './title.module.scss'

const Title = () => {
  return (
    <div className='container d-flex'>
    <div className={design.title}>
    <h1> AI Dream. </h1>
    <h2 className='m-3'> We Are What You Want. </h2>
    </div>

    </div>
  )
}

export default Title