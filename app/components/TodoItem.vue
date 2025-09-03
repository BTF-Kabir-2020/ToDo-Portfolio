<template>
  <div
    class="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow border-l-4"
    :class="priorityBorderClass"
  >
    <div class="flex items-start justify-between">
      <div class="flex-1">
        <div class="flex items-center space-x-3 mb-2">
          <button 
            class="flex-shrink-0"
            :title="todo.completed ? 'Mark as incomplete' : 'Mark as complete'"
            @click="$emit('toggle')"
          >
            <div
              class="w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors"
              :class="todo.completed 
                ? 'bg-green-500 border-green-500' 
                : 'border-gray-300 dark:border-gray-600'"
            >
              <svg
                v-if="todo.completed"
                class="w-4 h-4 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </button>
          
          <div class="flex-1 min-w-0">
            <h3
              class="text-lg font-medium text-gray-900 dark:text-white line-clamp-1"
              :class="{ 'line-through text-gray-500 dark:text-gray-400': todo.completed }"
            >
              {{ todo.title }}
            </h3>
            <p
              v-if="todo.description"
              class="text-sm text-gray-600 dark:text-gray-400 mt-1 line-clamp-2"
            >
              {{ todo.description }}
            </p>
          </div>
        </div>
        
        <div class="flex flex-wrap items-center gap-3 text-sm">
          <!-- Priority Badge -->
          <span
            :class="priorityClass"
            class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium"
          >
            {{ todo.priority }}
          </span>
          
          <!-- Due Date -->
          <span
            v-if="todo.dueDate"
            class="text-gray-500 dark:text-gray-400"
          >
            📅 {{ formatDate(todo.dueDate) }}
          </span>
          
          <!-- Tags -->
          <div
            v-if="todo.tags.length > 0"
            class="flex flex-wrap gap-2"
          >
            <span 
              v-for="tag in todo.tags" 
              :key="tag"
              class="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 border border-primary-200 dark:border-primary-700 hover:bg-primary-200 dark:hover:bg-primary-800 transition-colors"
            >
              #{{ tag }}
            </span>
          </div>
          
          <!-- Created Date -->
          <span class="text-gray-400 dark:text-gray-500">
            Created: {{ formatDate(todo.createdAt) }}
          </span>
        </div>
      </div>
      
      <!-- Actions -->
      <div class="flex items-center space-x-2 ml-4">
        <button 
          class="p-2 text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          title="Edit task"
          @click="$emit('edit')"
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
              d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
            />
          </svg>
        </button>
        
        <button 
          class="p-2 text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
          title="Delete task"
          @click="$emit('delete')"
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
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Todo } from '../stores/todos';

interface Props {
  todo: Todo
}

const props = defineProps<Props>();
defineEmits<{
  toggle: []
  edit: []
  delete: []
}>();

const priorityClass = computed(() => {
  switch (props.todo.priority) {
    case 'high':
      return 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200';
    case 'medium':
      return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200';
    case 'low':
      return 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200';
    default:
      return 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200';
  }
});

const priorityBorderClass = computed(() => {
  switch (props.todo.priority) {
    case 'high':
      return 'border-red-500';
    case 'medium':
      return 'border-yellow-500';
    case 'low':
      return 'border-green-500';
    default:
      return 'border-gray-300 dark:border-gray-600';
  }
});

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
};
</script>

<style scoped>
.line-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
