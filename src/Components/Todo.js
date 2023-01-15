import style from "../Style/Todo.module.css"
const Todo = ({todo})=>{
    const {title,des} = todo
    return(
        <article className={style.todo}>
        <div>
           <h1>{title}</h1>
           <p>{des}</p>
        </div>
        <div>
            <button className={style.btn}>
                <i className="fa fa-trash fa-2x"></i>
            </button>
        </div>
        </article>
    )
}
export default Todo;