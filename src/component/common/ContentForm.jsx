import {CheckBox} from "./CheckBox";
export const ContentForm = (props) => {
    const list = props.list;
    
    const handleCheck = (index) => {
        list[index].checked = !list[index].checked;
        props.setList([...list]);
    }

    const deleteItem = (index) => {
        props.setList(list => {
            return list.filter((_, i) => i !== index)
        });
    }

    return <>
        {list.map((t, index) => {
            const key = t.name+"_"+t.category;
            const classNameTr = t.checked ? "text-decoration-line-through" : "";
            return (
                <tr className={classNameTr} key={key}>
                    <td>
                        <CheckBox item={t} handleCheck={() => handleCheck(index)} />
                    </td>
                    <td><label className="d-inline" htmlFor={t.name}>{t.name}</label></td>
                    <td>{t.category}</td>
                    <td><span className="material-symbols-outlined" style={{ cursor: "pointer" }} value={t.index} onClick={() => deleteItem(index)}>delete</span></td>
                </tr>
            )
        })}
    </>
    

}