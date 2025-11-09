<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import type { TODO } from '../model/TODO'

const props = defineProps<{ tache: TODO }>()
const emit = defineEmits<{
  (e: 'supprimer', tache: TODO): void
}>()

const editing = ref(false)       // Are we editing?
const editTitle = ref(props.tache.title)  // Temporary value while editing

const supprimerTache = () => {
  emit('supprimer', props.tache)
}

// Start editing on double-click
const startEditing = () => {
  editing.value = true
  editTitle.value = props.tache.title
}

// Finish editing on Enter or blur
const finishEditing = () => {
  if (editTitle.value.trim() !== '') {
    props.tache.title = editTitle.value.trim()
  }
  editing.value = false
}
</script>

<template>
  <li :class="{ done: tache.done, late: tache.isLate() }">
    <input type="checkbox" v-model="tache.done" />

    <!-- Display mode -->
    <span v-if="!editing" @dblclick="startEditing">{{ tache.title }}</span>

    <!-- Edit mode -->
    <input
      v-else
      v-model="editTitle"
      @keyup.enter="finishEditing"
      @blur="finishEditing"
      class="edit-input"
      type="text"
      autofocus
    />

    <span v-if="tache.dueDate"> - {{ tache.dueDate.toLocaleDateString() }}</span>

    <button class="delete-btn" @click="supprimerTache">Supprimer</button>
  </li>
</template>

<style scoped>
.done {
  text-decoration: line-through;
  color: gray;
}
.late {
  color: red;
}
.delete-btn {
  margin-left: 10px;
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 2px 6px;
  cursor: pointer;
}
.edit-input {
  padding: 2px 4px;
  font-size: 1em;
  width: 70%;
}
</style>
