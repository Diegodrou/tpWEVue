<script setup lang="ts">
import { ref, reactive, computed } from 'vue'
import { TodoList, TODO } from '../model/TODO'
import TODOComponent from './TODOComponent.vue'

const nouvelleTache = ref('')
const liste = reactive(new TodoList())

const filtreActif = ref<'toutes' | 'aFaire' | 'faites'>('toutes')

const ajouterTache = () => {
  const titre = nouvelleTache.value.trim()
  if (titre) {
    liste.ajouterTache(titre)
    nouvelleTache.value = ''
  }
}

// --- Filtres ---
const tachesFiltrees = computed(() => {
  if (filtreActif.value === 'aFaire') {
    return liste.todo_list.filter(t => !t.done)
  } else if (filtreActif.value === 'faites') {
    return liste.todo_list.filter(t => t.done)
  } else {
    return liste.todo_list
  }
})

// --- Compteur ---
const tachesRestantes = computed(() =>
  liste.todo_list.filter(t => !t.done).length
)

// --- Supprimer une tâche individuelle ---
const supprimerTache = (tache: TODO) => {
  const index = liste.todo_list.findIndex(t => t.id === tache.id)
  if (index !== -1) {
    liste.todo_list.splice(index, 1)
  }
}

// --- Supprimer toutes les tâches ---
const supprimerToutesTaches = () => {
  liste.todo_list.splice(0, liste.todo_list.length)
}

const supprimerTachesCompletees = () => {
  // Keep only tasks that are not done
  liste.todo_list = liste.todo_list.filter(t => !t.done)
}

</script>

<template>
  <div class="todos">
    <h1>Todos</h1>

    <input
      v-model="nouvelleTache"
      placeholder="Nouvelle tâche..."
      @keyup.enter="ajouterTache"
    />
    <button @click="ajouterTache">Ajouter</button>
    <button class="delete-all" @click="supprimerToutesTaches">Supprimer toutes</button>
    <button class="delete-completed" @click="supprimerTachesCompletees">
      Supprimer terminées
    </button>

    <div class="filtres">
      <button
        @click="filtreActif = 'toutes'"
        :class="{ actif: filtreActif === 'toutes' }"
      >
        Toutes
      </button>
      <button
        @click="filtreActif = 'aFaire'"
        :class="{ actif: filtreActif === 'aFaire' }"
      >
        À faire
      </button>
      <button
        @click="filtreActif = 'faites'"
        :class="{ actif: filtreActif === 'faites' }"
      >
        Terminées
      </button>
    </div>

    <ul>
      <TODOComponent
        v-for="tache in tachesFiltrees"
        :key="tache.id"
        :tache="tache"
        @supprimer="supprimerTache"
      />
    </ul>

    <footer v-if="liste.todo_list.length > 0">
      <span>Il reste {{ tachesRestantes }} tâche(s) à faire</span>
    </footer>
  </div>
</template>

<style scoped>
.todos {
  max-width: 400px;
  margin: 20px auto;
  text-align: left;
}
input {
  padding: 6px;
  margin-right: 5px;
}
button {
  padding: 6px 10px;
  margin: 2px;
}
button.delete-all {
  background-color: #ff4d4d;
  color: white;
  border: none;
  cursor: pointer;
}
.filtres {
  margin-top: 10px;
  margin-bottom: 10px;
}
button.actif {
  background-color: #007bff;
  color: white;
}
footer {
  margin-top: 10px;
  font-style: italic;
}

button.delete-completed {
  background-color: #f0ad4e;
  color: white;
  border: none;
  cursor: pointer;
  padding: 2px 6px;
  margin-left: 5px;
}
</style>
