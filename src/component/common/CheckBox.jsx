export const CheckBox = (props) => {
    return <input type="checkbox" value={props.item.checked} id={props.item.name} onChange={props.handleCheck} checked={props.item.checked}/>
}