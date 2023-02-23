
const Dish = (props) => {
    return <div key={props.dish.id} className='dish'>
        
          <a target="_blank" href={props.dish.link}>
          <img src={props.dish.image} height={250}></img>
          
          <p >{props.dish.title}</p></a>
          
        </div>
}

export default Dish