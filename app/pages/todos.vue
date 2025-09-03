<template>
  <div class="relative">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Todo List
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400">
          Organize your tasks and boost your productivity
        </p>
      </div>

    <!-- Error Alert -->
    <div v-if="todosStore.error" class="mb-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-4">
      <div class="flex items-center">
        <svg class="w-5 h-5 text-red-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span class="text-red-800 dark:text-red-200">{{ todosStore.error }}</span>
        <button @click="clearError" class="ml-auto text-red-400 hover:text-red-600">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-primary-600 mb-2">
          {{ todosStore.stats.total }}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          Total Tasks
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-green-600 mb-2">
          {{ todosStore.stats.completed }}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          Completed
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-yellow-600 mb-2">
          {{ todosStore.stats.active }}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          Active
        </div>
      </div>
      <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 text-center">
        <div class="text-3xl font-bold text-red-600 mb-2">
          {{ todosStore.stats.overdue }}
        </div>
        <div class="text-gray-600 dark:text-gray-400">
          Overdue
        </div>
      </div>
    </div>

    <!-- Add Todo Form -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-4">
        Add New Task
      </h2>
      <form
        class="space-y-4"
        @submit.prevent="addNewTodo"
      >
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title *</label>
            <input 
              v-model="newTodo.title"
              type="text" 
              required
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Enter task title"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Priority</label>
            <select 
              v-model="newTodo.priority"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option value="low">
                Low
              </option>
              <option value="medium">
                Medium
              </option>
              <option value="high">
                High
              </option>
            </select>
          </div>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
          <textarea 
            v-model="newTodo.description"
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            placeholder="Enter task description"
          />
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Due Date</label>
            <input 
              v-model="newTodo.dueDate"
              type="date"
              class="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
            <div class="relative">
              <input 
                ref="tagInput"
                v-model="tagInputValue"
                type="text"
                class="w-full px-3 py-2 pr-16 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                placeholder="Type tag name"
                @keydown="addTag"
              >
              <button 
                type="button"
                class="absolute right-2 top-2 px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center"
                :disabled="!tagInputValue.trim()"
                title="Add tag"
                @click="addTagFromInput"
              >
                <svg
                  class="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </button>
            </div>
            <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
              💡 Type tag name and click + button or press Enter to add
            </p>
            <div class="flex flex-wrap gap-2 mt-2">
              <span 
                v-for="tag in newTodo.tags" 
                :key="tag"
                class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700"
              >
                #{{ tag }}
                <button 
                  type="button"
                  class="ml-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                  @click="removeTag(tag)"
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
            :disabled="todosStore.loading"
            class="bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <svg v-if="todosStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ todosStore.loading ? 'Adding...' : 'Add Task' }}
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
            :class="[
              'px-4 py-2 rounded-md text-sm font-medium transition-colors',
              currentFilter === filter.key
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
            ]"
            @click="currentFilter = filter.key"
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
          <svg
            class="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </div>

    <!-- Loading State -->
    <div v-if="todosStore.loading" class="text-center py-12">
      <div class="inline-flex items-center px-4 py-2 font-semibold leading-6 text-primary-600">
        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-600" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Loading...
      </div>
    </div>

    <!-- Todo List -->
    <div v-else class="space-y-4">
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
        @delete="confirmDelete(todo)"
      />
    </div>

    <!-- Actions -->
    <div v-if="todosStore.stats.completed > 0" class="mt-8 text-center">
      <button 
        @click="confirmClearCompleted"
        :disabled="todosStore.loading"
        class="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
      >
        <svg v-if="todosStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        Clear Completed ({{ todosStore.stats.completed }})
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
        
        <div>
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags</label>
          <div class="relative">
            <input 
              ref="editTagInput"
              v-model="editTagInputValue"
              type="text"
              class="w-full px-3 py-2 pr-16 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              placeholder="Type tag name"
              @keydown="addEditTag"
            >
            <button 
              type="button"
              class="absolute right-2 top-2 px-3 py-1 text-sm bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors flex items-center"
              :disabled="!editTagInputValue.trim()"
              title="Add tag"
              @click="addEditTagFromInput"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1">
            💡 Type tag name and click + button or press Enter to add
          </p>
          <div class="flex flex-wrap gap-2 mt-2">
            <span 
              v-for="tag in editingTodo.tags" 
              :key="tag"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700"
            >
              #{{ tag }}
              <button 
                type="button"
                class="ml-2 text-primary-600 dark:text-primary-400 hover:text-primary-800 dark:hover:text-primary-200 hover:bg-primary-200 dark:hover:bg-primary-800 rounded-full w-4 h-4 flex items-center justify-center transition-colors"
                @click="removeEditTag(tag)"
              >
                ×
              </button>
            </span>
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
            :disabled="todosStore.loading"
            class="bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
          >
            <svg v-if="todosStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            {{ todosStore.loading ? 'Saving...' : 'Save' }}
          </button>
        </div>
      </form>
    </div>
  </div>

  <!-- Delete Confirmation Modal -->
  <div v-if="deleteConfirmTodo" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
      <div class="flex items-center mb-4">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Delete Task</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Are you sure you want to delete "<strong>{{ deleteConfirmTodo.title }}</strong>"? This action cannot be undone.
      </p>
      <div class="flex justify-end space-x-3">
        <button 
          type="button"
          @click="deleteConfirmTodo = null"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="button"
          @click="deleteTodo"
          :disabled="todosStore.loading"
          class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <svg v-if="todosStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ todosStore.loading ? 'Deleting...' : 'Delete' }}
        </button>
      </div>
    </div>
  </div>

  <!-- Clear Completed Confirmation Modal -->
  <div v-if="showClearCompletedConfirm" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-md">
      <div class="flex items-center mb-4">
        <div class="flex-shrink-0">
          <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <div class="ml-3">
          <h3 class="text-lg font-medium text-gray-900 dark:text-white">Clear Completed Tasks</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400 mb-6">
        Are you sure you want to clear all {{ todosStore.stats.completed }} completed tasks? This action cannot be undone.
      </p>
      <div class="flex justify-end space-x-3">
        <button 
          type="button"
          @click="showClearCompletedConfirm = false"
          class="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
        >
          Cancel
        </button>
        <button 
          type="button"
          @click="clearCompleted"
          :disabled="todosStore.loading"
          class="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
        >
          <svg v-if="todosStore.loading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {{ todosStore.loading ? 'Clearing...' : 'Clear Completed' }}
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTodosStore } from '~/stores/todos';
import type { Todo } from '~/stores/todos';

definePageMeta({ title: 'Todos - Nuxt + Tailwind' });

const todosStore = useTodosStore();

const newTodo = ref({
  title: '',
  description: '',
  priority: 'medium' as const,
  dueDate: '',
  tags: [],
});

const tagInputValue = ref('');
const editTagInputValue = ref('');

const currentFilter = ref<'all' | 'active' | 'completed' | 'priority'>('all');
const searchQuery = ref('');
const editingTodo = ref<Todo | null>(null);
const deleteConfirmTodo = ref<Todo | null>(null);
const showClearCompletedConfirm = ref(false);

const filteredTodos = computed(() => {
  let todos = todosStore.getFilteredTodos(currentFilter.value);
  if (searchQuery.value.trim()) {
    todos = todosStore.searchTodos(searchQuery.value);
  }
  return todos;
});

const stats = computed(() => todosStore.getStats());

const filters = computed(() => [
  { key: 'all', label: 'All', count: stats.value.total },
  { key: 'active', label: 'Active', count: stats.value.active },
  { key: 'completed', label: 'Completed', count: stats.value.completed },
  { key: 'priority', label: 'High Priority', count: stats.value.highPriority },
]);

const addNewTodo = () => {
  if (newTodo.value.title.trim()) {
    todosStore.addTodo({
      title: newTodo.value.title,
      description: newTodo.value.description,
      priority: newTodo.value.priority,
      dueDate: newTodo.value.dueDate,
      tags: newTodo.value.tags.filter(tag => tag.trim()),
      completed: false,
    });
    
    // Reset form
    newTodo.value = {
      title: '',
      description: '',
      priority: 'medium',
      dueDate: '',
      tags: [],
    };
  }
};

const editTodo = (todo: Todo) => {
  // Create a deep copy to avoid modifying the original todo
  editingTodo.value = JSON.parse(JSON.stringify(todo));
  // Reset tag input
  editTagInputValue.value = '';
};

const saveEdit = () => {
  if (editingTodo.value) {
    todosStore.updateTodo(editingTodo.value.id, {
      title: editingTodo.value.title,
      description: editingTodo.value.description,
      priority: editingTodo.value.priority,
      dueDate: editingTodo.value.dueDate,
      tags: editingTodo.value.tags,
    });
    editingTodo.value = null;
  }
};

const cancelEdit = () => {
  editingTodo.value = null;
  editTagInputValue.value = '';
};

const addTag = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    
    const tagValue = tagInputValue.value.trim();
    
    if (tagValue && !newTodo.value.tags.includes(tagValue)) {
      newTodo.value.tags.push(tagValue);
      tagInputValue.value = '';
      console.log('Tag added from Enter:', tagValue, 'Current tags:', [...newTodo.value.tags]);
    }
  }
};

const removeTag = (tagToRemove: string) => {
  newTodo.value.tags = newTodo.value.tags.filter(tag => tag !== tagToRemove);
};

const addEditTag = (event: KeyboardEvent) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    event.stopPropagation();
    
    const tagValue = editTagInputValue.value.trim();
    
    if (tagValue && editingTodo.value && !editingTodo.value.tags.includes(tagValue)) {
      editingTodo.value.tags.push(tagValue);
      editTagInputValue.value = '';
      console.log('Edit tag added from Enter:', tagValue, 'Current edit tags:', [...editingTodo.value.tags]);
    }
  }
};

const removeEditTag = (tagToRemove: string) => {
  if (editingTodo.value) {
    editingTodo.value.tags = editingTodo.value.tags.filter(tag => tag !== tagToRemove);
  }
};

const addTagFromInput = () => {
  const tagValue = tagInputValue.value.trim();
  
  if (tagValue && !newTodo.value.tags.includes(tagValue)) {
    newTodo.value.tags.push(tagValue);
    console.log('Tag added from button:', tagValue, 'Current tags:', [...newTodo.value.tags]);
    tagInputValue.value = ''; // Clear input
  } else if (tagValue) {
    console.log('Tag already exists:', tagValue);
  }
};

const addEditTagFromInput = () => {
  const tagValue = editTagInputValue.value.trim();
  
  if (tagValue && editingTodo.value && !editingTodo.value.tags.includes(tagValue)) {
    editingTodo.value.tags.push(tagValue);
    console.log('Edit tag added from button:', tagValue, 'Current edit tags:', [...editingTodo.value.tags]);
    editTagInputValue.value = ''; // Clear input
  } else if (tagValue) {
    console.log('Edit tag already exists:', tagValue);
  }
};

const confirmDelete = (todo: Todo) => {
  deleteConfirmTodo.value = todo;
};

const deleteTodo = () => {
  if (deleteConfirmTodo.value) {
    todosStore.deleteTodo(deleteConfirmTodo.value.id);
    deleteConfirmTodo.value = null;
  }
};

const confirmClearCompleted = () => {
  showClearCompletedConfirm.value = true;
};

const clearCompleted = () => {
  todosStore.clearCompleted();
  showClearCompletedConfirm.value = false;
};

const clearError = () => {
  todosStore.error = '';
};
</script>
