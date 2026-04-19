import { useState } from 'react';
import TaskItem from './TaskItem';
import type { Task } from '../types/task';

type FilterStatus = 'all' | 'completed' | 'active';

type TaskListProps = {
  tasks: Task[];
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
};

function TaskList({ tasks, onToggleTask, onDeleteTask }: TaskListProps) {
  const [filter, setFilter] = useState<FilterStatus>('all');
  const completedCount = tasks.filter((task) => task.completed).length;
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') {
      return task.completed;
    }

    if (filter === 'active') {
      return !task.completed;
    }

    return true;
  });

  return (
    <div className="task-list">
      <h2>タスク一覧</h2>
      <p>{tasks.length}件のタスクがあります ({completedCount}件完了)</p>
      <div className="task-list__filters">
        <button
          type="button"
          className={filter === 'all' ? 'is-active' : ''}
          onClick={() => setFilter('all')}
        >
          すべて
        </button>
        <button
          type="button"
          className={filter === 'completed' ? 'is-active' : ''}
          onClick={() => setFilter('completed')}
        >
          完了済
        </button>
        <button
          type="button"
          className={filter === 'active' ? 'is-active' : ''}
          onClick={() => setFilter('active')}
        >
          未完了
        </button>
      </div>
      <ul>
        {filteredTasks.map((task) => (
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
