import { defineStore } from 'pinia';

export interface Todo {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  // Reactive stats
  const stats = computed(() => {
    const total = todos.value.length;
    const completed = todos.value.filter(todo => todo.completed).length;
    const active = total - completed;
    const highPriority = todos.value.filter(
      todo => todo.priority === 'high'
    ).length;
    const overdue = todos.value.filter(
      todo => !todo.completed && new Date(todo.dueDate) < new Date()
    ).length;

    return {
      total,
      completed,
      active,
      highPriority,
      overdue,
      completionRate: total > 0 ? Math.round((completed / total) * 100) : 0,
    };
  });

  // Load todos from localStorage
  const loadTodos = () => {
    if (process.client) {
      loading.value = true;
      try {
        const saved = localStorage.getItem('nuxt-todos');
        if (saved) {
          todos.value = JSON.parse(saved);
        }
        error.value = null;
      } catch (err) {
        console.error('Error loading todos:', err);
        error.value = 'Failed to load todos';
      } finally {
        loading.value = false;
      }
    }
  };

  // Save todos to localStorage
  const saveTodos = () => {
    if (process.client) {
      try {
        localStorage.setItem('nuxt-todos', JSON.stringify(todos.value));
        error.value = null;
      } catch (err) {
        console.error('Error saving todos:', err);
        error.value = 'Failed to save todos';
      }
    }
  };

  // Add new todo
  const addTodo = (todo: Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>) => {
    loading.value = true;
    try {
      const newTodo: Todo = {
        ...todo,
        id: generateId(),
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      todos.value.push(newTodo);
      saveTodos();
      error.value = null;
    } catch (err) {
      console.error('Error adding todo:', err);
      error.value = 'Failed to add todo';
    } finally {
      loading.value = false;
    }
  };

  // Update todo
  const updateTodo = (
    id: string,
    updates: Partial<
      Pick<
        Todo,
        'title' | 'description' | 'completed' | 'priority' | 'dueDate' | 'tags'
      >
    >
  ) => {
    loading.value = true;
    try {
      const index = todos.value.findIndex(todo => todo.id === id);
      if (index !== -1) {
        const currentTodo = todos.value[index];
        const updatedTodo: Todo = {
          ...currentTodo,
          ...updates,
          updatedAt: new Date().toISOString(),
        };
        todos.value[index] = updatedTodo;
        saveTodos();
        error.value = null;
      }
    } catch (err) {
      console.error('Error updating todo:', err);
      error.value = 'Failed to update todo';
    } finally {
      loading.value = false;
    }
  };

  // Delete todo
  const deleteTodo = (id: string) => {
    loading.value = true;
    try {
      const index = todos.value.findIndex(todo => todo.id === id);
      if (index !== -1) {
        todos.value.splice(index, 1);
        saveTodos();
        error.value = null;
      }
    } catch (err) {
      console.error('Error deleting todo:', err);
      error.value = 'Failed to delete todo';
    } finally {
      loading.value = false;
    }
  };

  // Toggle todo completion
  const toggleTodo = (id: string) => {
    loading.value = true;
    try {
      const todo = todos.value.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = new Date().toISOString();
        saveTodos();
        error.value = null;
      }
    } catch (err) {
      console.error('Error toggling todo:', err);
      error.value = 'Failed to toggle todo';
    } finally {
      loading.value = false;
    }
  };

  // Clear completed todos
  const clearCompleted = () => {
    loading.value = true;
    try {
      todos.value = todos.value.filter(todo => !todo.completed);
      saveTodos();
      error.value = null;
    } catch (err) {
      console.error('Error clearing completed todos:', err);
      error.value = 'Failed to clear completed todos';
    } finally {
      loading.value = false;
    }
  };

  // Get filtered todos
  const getFilteredTodos = (
    filter: 'all' | 'active' | 'completed' | 'priority'
  ) => {
    switch (filter) {
      case 'active':
        return todos.value.filter(todo => !todo.completed);
      case 'completed':
        return todos.value.filter(todo => todo.completed);
      case 'priority':
        return todos.value.filter(todo => todo.priority === 'high');
      default:
        return todos.value;
    }
  };

  // Get todos by priority
  const getTodosByPriority = (priority: Todo['priority']) => {
    return todos.value.filter(todo => todo.priority === priority);
  };

  // Search todos
  const searchTodos = (query: string) => {
    if (!query.trim()) return todos.value;
    const lowerQuery = query.toLowerCase();
    return todos.value.filter(
      todo =>
        todo.title.toLowerCase().includes(lowerQuery) ||
        todo.description.toLowerCase().includes(lowerQuery) ||
        todo.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
    );
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
    stats: readonly(stats),
    addTodo,
    updateTodo,
    deleteTodo,
    toggleTodo,
    clearCompleted,
    getFilteredTodos,
    getTodosByPriority,
    searchTodos,
    getStats: () => stats.value,
  };
});
