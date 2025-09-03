<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <!-- Header -->
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">Todo List</h1>
      <p class="text-lg text-gray-600 dark:text-gray-400">Organize your tasks and boost your productivity</p>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-primary-600 mb-2">{{ stats.total }}</div>
        <div class="text-gray-600 dark:text-gray-400">Total Tasks</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-green-600 mb-2">{{ stats.completed }}</div>
        <div class="text-gray-600 dark:text-gray-400">Completed</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-yellow-600 mb-2">{{ stats.active }}</div>
        <div class="text-gray-600 dark:text-gray-400">Active</div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-red-600 mb-2">{{ stats.overdue }}</div>
        <div class="text-gray-600 dark:text-gray-400">Overdue</div>
      </div>
    </div>

    <!-- Add Todo Form -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">Add New Task</h2>
      <form @submit.prevent="addNewTodo" class="space-y-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
            <input 
              v-model="newTodo.title"
              type="text" 
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter task title">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
            <select 
              v-model="newTodo.priority"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea 
            v-model="newTodo.description"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter task description"></textarea>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Due Date</label>
            <input 
              v-model="newTodo.dueDate"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
            <input 
              @keydown="addTag"
              type="text"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Press Enter to add tag">
            <div class="flex flex-wrap gap-2 mt-2">
              <span 
                v-for="tag in newTodo.tags" 
                :key="tag"
                class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200"
              >
                {{ tag }}
                <button 
                  @click="removeTag(tag)"
                  type="button"
                  class="ml-1 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200"
                >
                  ×
                </button>
              </span>
            </div>
          </div>
        </div>
        
        <div class="flex justify-end">
          <button 
            type="submit"
            class="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8">
      <div class="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div class="flex flex-wrap gap-2">
          <button 
            v-for="filter in filters"
            :key="filter.key"
            @click="currentFilter = filter.key"
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors',
              currentFilter === filter.key
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
          >
            {{ filter.label }} ({{ filter.count }})
          </button>
        </div>
        
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text"
            placeholder="Search tasks..."
            class="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          >
          <svg class="absolute left-3 top-2.5 h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
    </div>

    <!-- Todo List -->
    <div class="space-y-4">
      <div v-if="filteredTodos.length === 0" class="text-center py-12">
        <div class="text-gray-400 dark:text-gray-500 mb-4">
          <svg class="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        </div>
        <h3 class="text-lg font-medium text-gray-900 dark:text-white mb-2">No tasks found</h3>
        <p class="text-gray-500 dark:text-gray-400">Get started by adding your first task above!</p>
      </div>
      
      <TodoItem 
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @toggle="todosStore.toggleTodo(todo.id)"
        @edit="editTodo(todo)"
        @delete="todosStore.deleteTodo(todo.id)"
      />
    </div>

    <!-- Actions -->
    <div v-if="stats.completed > 0" class="mt-8 text-center">
      <button 
        @click="todosStore.clearCompleted()"
        class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors"
      >
        Clear Completed ({{ stats.completed }})
      </button>
    </div>
  </div>

  <!-- Edit Modal -->
  <div v-if="editingTodo" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
      <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Edit Task</h3>
      <form @submit.prevent="saveEdit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
          <input 
            v-model="editingTodo.title"
            type="text" 
            required
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea 
            v-model="editingTodo.description"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"></textarea>
        </div>
        
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
            <select 
              v-model="editingTodo.priority"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Due Date</label>
            <input 
              v-model="editingTodo.dueDate"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white">
          </div>
        </div>
        
        <div class="flex justify-end space-x-3">
          <button 
            type="button"
            @click="cancelEdit"
            class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Cancel
          </button>
          <button 
            type="submit"
            class="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useTodosStore } from '~/stores/todos'
import type { Todo } from '~/stores/todos'

definePageMeta({ title: 'Todos - Nuxt + Tailwind' })

const todosStore = useTodosStore()

const newTodo = ref({
  title: '',
  description: '',
  priority: 'medium' as const,
  dueDate: '',
  tags: []
})

const currentFilter = ref<'all' | 'active' | 'completed' | 'priority'>('all')
const searchQuery = ref('')
const editingTodo = ref<Todo | null>(null)

const filteredTodos = computed(() => {
  let todos = todosStore.getFilteredTodos(currentFilter.value)
  if (searchQuery.value.trim()) {
    todos = todosStore.searchTodos(searchQuery.value)
  }
  return todos
})

const stats = computed(() => todosStore.getStats())

const filters = [
  { key: 'all', label: 'All', count: stats.value.total },
  { key: 'active', label: 'Active', count: stats.value.active },
  { key: 'completed', label: 'Completed', count: stats.value.completed },
  { key: 'priority', label: 'High Priority', count: stats.value.highPriority }
]

const addNewTodo = () => {
  if (newTodo.value.title.trim()) {
    todosStore.addTodo({
      title: newTodo.value.title,
      description: newTodo.value.description,
      priority: newTodo.value.priority,
      dueDate: newTodo.value.dueDate,
      tags: newTodo.value.tags.filter(tag => tag.trim()),
      completed: false
    })
    
    // Reset form
    newTodo.value = {
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      tags: []
    }
  }
}

const editTodo = (todo: Todo) => {
  editingTodo.value = { ...todo }
}

const saveEdit = () => {
  if (editingTodo.value) {
    todosStore.updateTodo(editingTodo.value.id, {
      title: editingTodo.value.title,
      description: editingTodo.value.description,
      priority: editingTodo.value.priority,
      dueDate: editingTodo.value.dueDate,
      tags: editingTodo.value.tags
    })
    editingTodo.value = null
  }
}

const cancelEdit = () => {
  editingTodo.value = null
}

const addTag = (event: KeyboardEvent) => {
  const target = event.target as HTMLInputElement
  if (event.key === 'Enter' && target.value.trim()) {
    if (!newTodo.value.tags.includes(target.value.trim())) {
      newTodo.value.tags.push(target.value.trim())
    }
    target.value = ''
  }
}

const removeTag = (tagToRemove: string) => {
  newTodo.value.tags = newTodo.value.tags.filter(tag => tag !== tagToRemove)
}
</script>
