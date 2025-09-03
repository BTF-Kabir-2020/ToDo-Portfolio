import { defineStore } from "pinia";

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: "low" | "medium" | "high";
  dueDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const useTodosStore = defineStore("todos", () => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Load todos from localStorage
  const loadTodos = () => {
    if (process.client) {
      try {
        const saved = localStorage.getItem("nuxt-todos");
        if (saved) {
          todos.value = JSON.parse(saved);
        }
      } catch (err) {
        console.error("Error loading todos:", err);
        error.value = "Failed to load todos";
      }
    }
  };

  // Save todos to localStorage
  const saveTodos = () => {
    if (process.client) {
      try {
        localStorage.setItem("nuxt-todos", JSON.stringify(todos.value));
      } catch (err) {
        console.error("Error saving todos:", err);
        error.value = "Failed to save todos";
      }
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
    todos.value.push(newTodo);
    saveTodos();
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
    }
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    const index = todos.value.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos.value.splice(index, 1);
      saveTodos();
    }
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    const todo = todos.value.find((todo) => todo.id === id);
    if (todo) {
      todo.completed = !todo.completed;
      todo.updatedAt = new Date().toISOString();
      saveTodos();
    }
  };

  // Clear completed todos
  const clearCompleted = () => {
    todos.value = todos.value.filter((todo) => !todo.completed);
    saveTodos();
  };

  // Get filtered todos
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
    const lowerQuery = query.toLowerCase();
    return todos.value.filter(
      (todo) =>
        todo.title.toLowerCase().includes(lowerQuery) ||
        todo.description.toLowerCase().includes(lowerQuery) ||
        todo.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
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
    const overdue = todos.value.filter(
      (todo) => !todo.completed && new Date(todo.dueDate) < new Date()
    ).length;

    return {
      total,
      completed,
      active,
      highPriority,
      overdue,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
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
    todos: readonly(todos),
    loading: readonly(loading),
    error: readonly(error),
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    getFilteredTodos,
    getTodosByPriority,
    searchTodos,
    getStats,
  };
});
