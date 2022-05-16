import './Card.css'
// composition wrapper to avoid code duplication\
//important
function Card(props) {
  const classes = 'card ' + props.className
  return <div className={classes}>{props.children}</div>
}

export default Card
