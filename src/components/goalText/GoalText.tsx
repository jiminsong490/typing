const GoalText = (props) => {
    return (
        <a key={props.idx} style={props.color}>
            {props.text}
        </a>
    )
}
export default GoalText
