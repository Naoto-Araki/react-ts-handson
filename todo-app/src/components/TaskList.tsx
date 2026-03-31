type Task = {
    id: number;
    title: string;
    completed: boolean;
};

type TaskListProps = {
    tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
    return (
        <div className="task-list">
        <h2>タスク一覧</h2>
        <p>{tasks.length}件のタスクがあります</p>
        <ul>
          {tasks.map((task) => (
            <li key={task.id}>
              {task.title}
            </li>
          ))}
        </ul>
      </div>
    );
}

export default TaskList;