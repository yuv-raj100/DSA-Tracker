

export default function Topics(props){
    return(
        <div className="card">
            <h4>{props.name}</h4>
            <p>Total Questions: {props.num}</p>
            {/* <p>Status: {props.stat}</p> */}
        </div>
    )
}