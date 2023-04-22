import {useState } from "react";

export const AddNewItem = (props) => {

    const [addOpen, setAddOpen] = useState();
    const addNewItem = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        props.setList([...props.list, Object.fromEntries(formData.entries())]);
        setAddOpen(!addOpen);
    }

    return <><button className="btn btn-primary m-4" onClick={() => setAddOpen(!addOpen)}>Ajouter une tâche</button>
    {addOpen &&
        <form onSubmit={addNewItem}>
            <input name="name" placeholder="Titre" type="text" className="mx-2 text-center" />
            <input name="category" placeholder="Catégorie" type="text" className="mx-2 text-center" />
            <button className="btn btn-primary mx-2 text-center align-baseline" type="submit">Ajouter</button>
        </form>
    }</>
}
           
           
           