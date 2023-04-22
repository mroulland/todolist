import { useState, useEffect} from "react";

import {AddNewItem} from "./AddNewItem";
import { ContentForm } from "./ContentForm";

export const Test = () => {
    const title = "To do List pas très belle";

    // const [nomVariable, setterVariable] = useState(valeurParDefaut);
    const [listOfTasks, setListOfTasks] = useState([{}]);

    useEffect(() => {
        setListOfTasks([
            { name: "Courses", category: "Impératif",checked:false},
            { name: "Aspirateur", category: "Ménage",checked:false },
            { name: "Lessive", category: "Ménage",checked:false},
            { name: "Ranger linge", category: "Ménage",checked:true},
            { name: "Contrôle technique", category: "Impératif",checked:false},
            { name: "Centre commercial", category: "Plaisir",checked:true}
        ])
    }, []);

    return <>
        <h1 className="text-center m-4">
            {title}
        </h1>
        <div className="text-center m-4">
            <AddNewItem list={listOfTasks} setList={setListOfTasks}/>
        </div>

        <table className="table table-striped text-center w-75 mw-100 mx-auto">
            <thead>
                <tr>
                    <th>Statut</th>
                    <th>Nom</th>
                    <th>Catégorie</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <ContentForm list={listOfTasks} setList={setListOfTasks}/>
            </tbody>
        </table>
    </>
}