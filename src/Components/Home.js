import Todos from "./Todos";
import style from "../Style/Home.module.css"
const dummyTodos = [
    {
        id:1,
        title:"todos title1",
        des:"Todo 1 Description"
    },
    {
        id:2,
        title:"todos title2",
        des:"Todo 2 Description",
    }
]
const Home =()=>{
    return(
        <div className={style.container}>
        <h1 style={{ color:"white"}}>Todo App</h1>
            <Todos todo={dummyTodos} />
        </div>
    )
}
export default Home;