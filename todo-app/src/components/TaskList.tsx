import TaskItem from './TaskItem';
import type { Task } from '../types/task';

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  return (
    <div className="task-list">
      <h2>タスク一覧</h2>
      <p>{tasks.length}件のタスクがあります</p>
      <ul>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleTask={onToggleTask}
            onDeleteTask={onDeleteTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
