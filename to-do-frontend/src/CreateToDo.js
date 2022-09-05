import React, { useState,  } from 'react'

const INITIAL_BOOK_STATUS = {
    title: "",
    description: "",
    done: false
}

function CreateToDo(props) {

    const { onCreate } = props
    const [book, setBook] = useState(INITIAL_BOOK_STATUS);

    const onChange = (e) => {
        setBook({
            ...book,
            [e.target.name]: e.target.value
        })
    }

    const saveTodo = (e) => {
        if(Object.values(book).filter(ele => ele === "").length === 0?true:false){
            onCreate(book);
            setBook(INITIAL_BOOK_STATUS);
            
        }
        console.log("Please fill out all information!");
        
    }

    return (
        <div>
            <h2 className="text-center m-3">Daily To-do APP</h2>
            <div className="form-row d-flex justify-content-center">
                <div className="col-3 m-1">
                    <input name = "title" type="text" 
                        className="form-control" placeholder="Title"
                        onChange={(e) => onChange(e)} />
                </div>
                <div className="col-5 d-flex justify-content-center m-1">
                    <input type="text" className="form-control" 
                        name = "description" placeholder="Description"
                        onChange={(e) => onChange(e)}/>
                </div>
                <button className='btn btn-primary col-2 d-flex justify-content-center m-1' 
                    type='submit' onClick={saveTodo}>Add</button>
            </div>
        </div>
    )
}

export default CreateToDo