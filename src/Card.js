import './Card.css'

const Card = ({username, avatar_url}) => {
    return (
        <div className='Card'>
            <div className='Card-container-img'>
             <img className='Card-img' src={avatar_url} alt='avatar' />  
            </div>
            <div className='Card-text'>
              {username}  
            </div>
        </div>
    )
}

export default Card;