import CardStyle from './Card.style'

function Card({color,title,value,icon}) {
  return (
    <CardStyle style={{border:`3px solid ${color}`}}>
      <div className="icon">
        <img src={icon} alt=""/>
      </div>
      <div className="content">
        <div className="value">
          <p>{value || title}</p>
        </div>
        <div className="title">
          <p>{value && title}</p>
        </div>
      </div>
    </CardStyle>
  )
}
export default Card
