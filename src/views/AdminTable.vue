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
        <th scope="col">
          <button id="addGpuBtn" class="btn" data-bs-toggle="modal"  data-bs-target="#addGpu">
             Add Gpu
          </button>
             </th>
      </tr>
    </thead>
    <tbody v-if="graphicCards">
      <tr v-for="graphic in graphicCards" :key="graphic.gpu_id" scope="row">
        <td>{{ graphic.gpu_id }}</td>
        <td>{{ graphic.gpuNoA }}</td>
        <td>{{ graphic.gpuNrAr }}</td>
        <td>{{ graphic.gpuGen }}</td>
        <td>{{ graphic.gpuChip }}</td>
        <td>{{ graphic.released }}</td>
        <td>{{ graphic.memoryGb }} GB</td>
        <td>{{ graphic.memoryType }}</td>
        <td>{{ graphic.memoryBit }} bit</td>
        <td>{{ graphic.gpuClock }} mhz</td>
        <td>{{ graphic.memoryClock }} mhz</td>
        <td>
          <!-- Button trigger modal -->
          <button
            type="button"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#edit' + graphic.gpu_id"
          >
            Edit Button
          </button>
        </td>
        <td>
          <button @click="$store.dispatch('deleteGraphic', graphic.gpu_id)">
            Delete
          </button>
        </td>
        <createModel :graphic="graphic" />
        <editModel :graphic="graphic" />
      </tr>
    </tbody>
    <div v-else>No graphicCards</div>
  </table>
</template>
<script>
import createModel from '../components/createModel.vue';
import editModel from "../components/editModel.vue";

export default {
  components: {
    editModel,
    createModel,
  },
  mounted() {
    this.$store.dispatch("fetchGraphics");
  },
  computed: {
    graphicCards() {
      return this.$store.state.graphics;
    },
  },
};
// export default {
//     props : ["graphic"],
//   mounted() {
//     this.$store.dispatch("fetchProducts");
//   },
//   computed: {
//     graphicCards() {
//       return this.$store.state.products;
//     },
//   },
// };
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
