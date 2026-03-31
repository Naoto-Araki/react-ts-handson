type TodoFormProps = {
  addTask: (e: React.FormEvent<HTMLFormElement>) => void;
  inputValue: string;
  setInputValue: React.Dispatch<React.SetStateAction<string>>;
};

function TodoForm({ addTask, inputValue, setInputValue }: TodoFormProps) {
  return (
    <form onSubmit={addTask}>
      <input
        type="text"
        placeholder="タスクを入力"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default TodoForm
