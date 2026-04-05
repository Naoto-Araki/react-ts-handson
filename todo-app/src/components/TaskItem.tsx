import type { Task } from '../types/task';

type TaskItemProps = {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

function TaskItem({ task, onToggleTask, onDeleteTask }: TaskItemProps) {
  return (
    <li className={task.completed ? 'task-item is-completed' : 'task-item'}>
      <span className="task-item__title">{task.title}</span>
      <div className="task-item__actions">
        <button type="button" onClick={() => onToggleTask(task.id)}>
          {task.completed ? '未完了に戻す' : '完了'}
        </button>
        <button
          type="button"
          className="task-item__delete"
          onClick={() => onDeleteTask(task.id)}
        >
          削除
        </button>
      </div>
    </li>
  );
}

export default TaskItem;
