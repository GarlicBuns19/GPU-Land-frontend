<template>
  <table>
    <thead>
      <tr>
        <th>GPU Id</th>
        <th>GPU Front Img</th>
        <th>GPU NoA</th>
        <th>GPU NrAr</th>
        <th>Series</th>
        <th>GPU Chip</th>
        <th>Year</th>
        <th>VRAM</th>
        <th>GDDR Type</th>
        <th>Bit size</th>
        <th>GPU Clock</th>
        <th>Memory Clock</th>
        <th>Edit</th>
        <th>Delete</th>
        <th>
          <button id="addGpuBtn" class="btn" data-bs-toggle="modal"  data-bs-target="#addGpu">
             Add Gpu
          </button>
             </th>
      </tr>
    </thead>
    <tbody v-if="graphicCards">
      <tr v-for="graphic in graphicCards" :key="graphic.gpu_id" scope="row">
        <td>{{ graphic.gpu_id }}</td>
        <td>
          <div v-if="graphic.gpuFront_Img">
            <img :src="graphic.gpuFront_Img" alt="" class="img-fluid">
          </div>
        </td>
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
img{
  width: 400px;
  height: 210px;
  object-fit: cover;
}
</style>
