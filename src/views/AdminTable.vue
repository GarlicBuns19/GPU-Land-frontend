<template>
  <table class="table-responsive-lg">
    <thead>
      <tr>
        <th scope="col">GPU Id</th>
        <th scope="col">GPU NoA</th>
        <th scope="col">GPU NrAr</th>
        <th scope="col">Series</th>
        <th scope="col">GPU Chip</th>
        <th scope="col">Year</th>
        <th scope="col">VRAM</th>
        <th scope="col">GDDR Type</th>
        <th scope="col">Bit size</th>
        <th scope="col">GPU Clock</th>
        <th scope="col">Memory Clock</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
        <th scope="col">Add</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="grapic in grapicCards" :key="grapic.gpu_id" scope="row">
        <td>{{ grapic.gpu_id }}</td>
        <td>{{ grapic.gpuNoA }}</td>
        <td>{{ grapic.gpuNrAr }}</td>
        <td>{{ grapic.gpuGen }}</td>
        <td>{{ grapic.gpuChip }}</td>
        <td>{{ grapic.released }}</td>
        <td>{{ grapic.memoryGb }} GB</td>
        <td>{{ grapic.memoryType }}</td>
        <td>{{ grapic.memoryBit }} bit</td>
        <td>{{ grapic.gpuClock }} mhz</td>
        <td>{{ grapic.memoryClock }} mhz</td>
        <td>
          <!-- Button trigger modal -->
          <button
            @click="$store.dispatch('editProduct', grapic.gpu_id)"
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#exampleModal' + grapic.gpu_id"
          >
            Edit Button
          </button>
            <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'exampleModal' + grapic.gpu_id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <input class="modal-title" id="gpuNoA" v-model="grapic.gpuNoA">
          <input class="modal-title" id="gpuNoA" v-model="grapic.gpuNrAr">
        </div>
        <div class="modal-body">
          <input class="modal-title" id="gpuGen" v-model="grapic.gpuGen">
          <input class="modal-title" id="gpuGen" v-model="grapic.gpuChip">
          <input class="modal-title" id="released" v-model="grapic.released">
          <input class="modal-title" id="memoryGb" v-model="grapic.memoryGb">
          <input class="modal-title" id="memoryType" v-model="grapic.memoryType">
          <input class="modal-title" id="memoryBit" v-model="grapic.memoryBit">
          <input class="modal-title" id="gpuClock" v-model="grapic.gpuClock">
          <input class="modal-title" id="memoryClock" v-model="grapic.memoryClock">
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal" @click="$store.dispatch('editProduct', grapic.gpu_id)">
            Edit this GPU
          </button>
        </div>
      </div>
    </div>
  </div>
        </td>
        <td>
          <button @click="$store.dispatch('deleteProduct', grapic.gpu_id)">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  mounted() {
    this.$store.dispatch("fetchProducts");
  },
  computed: {
    grapicCards() {
      return this.$store.state.products;
    },
  },
};
</script>
<style scoped>
table,
th,
td {
  border: 2px solid;
}
table {
  background: pink;
  margin: auto;
}
th {
  background: green;
}
tr:nth-child(even) {
  background: blue;
}
tr:nth-child(odd) {
  background: brown;
}
</style>
