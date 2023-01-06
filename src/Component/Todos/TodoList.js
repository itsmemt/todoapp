import Todo from './TodoComp';
const TodoList = ({ todos, onComplete, onDelete }) => (
    <div className='todos' >
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                task={todo.task}
                date={todo.date}
                isCompleted={todo.isCompleted}
                onComplete={() => onComplete(todo.id)}
                onDelete={() => onDelete(todo.id)}
            />
        ))}
    </div>
);
export default TodoList