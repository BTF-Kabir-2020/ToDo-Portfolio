export interface Todo {
  id: string;
  title: string;
  description?: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate?: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

export const useTodos = () => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Load todos from localStorage
  const loadTodos = () => {
    try {
      if (process.client) {
        const stored = localStorage.getItem("nuxt-todos");
        if (stored) {
          todos.value = JSON.parse(stored);
        }
      }
    } catch (err) {
      error.value = "Failed to load todos";
      console.error("Error loading todos:", err);
    }
  };

  // Save todos to localStorage
  const saveTodos = () => {
    try {
      if (process.client) {
        localStorage.setItem("nuxt-todos", JSON.stringify(todos.value));
      }
    } catch (err) {
      error.value = "Failed to save todos";
      console.error("Error saving todos:", err);
    }
  };

  // Add new todo
  const addTodo = (todo: Omit<Todo, "id" | "createdAt" | "updatedAt">) => {
    const newTodo: Todo = {
      ...todo,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    todos.value.unshift(newTodo);
    saveTodos();
    return newTodo;
  };

  // Update todo
  const updateTodo = (
    id: string,
    updates: Partial<Omit<Todo, "id" | "createdAt">>
  ) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value[index] = {
        ...todos.value[index],
        ...updates,
        updatedAt: new Date().toISOString(),
      };
      saveTodos();
      return todos.value[index];
    }
    return null;
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
      saveTodos();
      return true;
    }
    return false;
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    const todo = todos.value.find((t) => t.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      todo.updatedAt = new Date().toISOString();
      saveTodos();
      return todo;
    }
    return null;
  };

  // Get todos by filter
  const getFilteredTodos = (
    filter: "all" | "active" | "completed" | "priority"
  ) => {
    switch (filter) {
      case "active":
        return todos.value.filter((todo) => !todo.completed);
      case "completed":
        return todos.value.filter((todo) => todo.completed);
      case "priority":
        return todos.value.filter((todo) => todo.priority === "high");
      default:
        return todos.value;
    }
  };

  // Get todos by priority
  const getTodosByPriority = (priority: Todo["priority"]) => {
    return todos.value.filter((todo) => todo.priority === priority);
  };

  // Search todos
  const searchTodos = (query: string) => {
    if (!query.trim()) return todos.value;

    const lowercaseQuery = query.toLowerCase();
    return todos.value.filter(
      (todo) =>
        todo.title.toLowerCase().includes(lowercaseQuery) ||
        todo.description?.toLowerCase().includes(lowercaseQuery) ||
        todo.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
    );
  };

  // Get statistics
  const getStats = () => {
    const total = todos.value.length;
    const completed = todos.value.filter((todo) => todo.completed).length;
    const active = total - completed;
    const highPriority = todos.value.filter(
      (todo) => todo.priority === "high"
    ).length;

    return {
      total,
      completed,
      active,
      highPriority,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  };

  // Clear completed todos
  const clearCompleted = () => {
    todos.value = todos.value.filter((todo) => !todo.completed);
    saveTodos();
  };

  // Generate unique ID
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  // Initialize on client side
  if (process.client) {
    loadTodos();
  }

  return {
    // State
    todos: readonly(todos),
    loading: readonly(loading),
    error: readonly(error),

    // Actions
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,

    // Getters
    getFilteredTodos,
    getTodosByPriority,
    searchTodos,
    getStats,
  };
};
