import Todo from "./Todo";
import style from "../Style/Todos.module.css"
const Todos = ({todo})=>{
    return(
        
        <section className={style.todos}>{todo.map((todo)=><Todo todo={todo} />)}</section>
        
    )
}
export default Todos;