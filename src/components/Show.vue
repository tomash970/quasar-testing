<template>

  <div class="q-pa-md" style="max-width: 350px">
    <p>Podaci</p>
    <q-list bordered separator>
      <q-item clickable v-ripple>
        <q-item-section class="name">{{data.name}}</q-item-section>
      </q-item>

      <q-item clickable v-ripple>
        <q-item-section>
          <q-item-label class="age">{{data.age}}</q-item-label>
        </q-item-section>
      </q-item>

    </q-list>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Show',
  computed: {
    ...mapGetters('example', ['data'])
  }
}
</script>

<style>

</style>
