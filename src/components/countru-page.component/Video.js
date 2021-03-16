export default function Video(props) {
  return(
    <div className="vidio__container">
      <video src={props.src} controls="true"></video>
    </div>
  )
}
