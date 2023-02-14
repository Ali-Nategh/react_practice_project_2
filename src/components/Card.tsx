import pointer from "../../public/MapPointer.png";

function Card(props: any) {
  return (
    <>
      <div className="card">
        <div id="card--img">
          <img src={props.imageUrl} className="card--img"/>
        </div>

        <div className="card--info">
          <div className="card--location">
            <img src={pointer} width="7px" />
            <p>{props.location}</p>
            <a href={props.googleMapsUrl}>View on Google Maps</a>
          </div>

          <p className="card--title">{props.title}</p>
          <p className="card--date">{props.startDate} - {props.endDate}</p>
          <p className="card--description">{props.description}</p>
        </div>
      </div>
      <hr className="card--hr"/>
    </>
  )
}
  
export default Card
  