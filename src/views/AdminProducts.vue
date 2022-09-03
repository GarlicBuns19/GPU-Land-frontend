<template>
  <button id="addGpuBtn" class="btn" data-bs-toggle="modal"  data-bs-target="#addGpu">
     Add Gpu
  </button>
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
      </tr>
    </thead>
    <tbody v-if="graphicCards">
      <tr v-for="graphic in graphicCards" :key="graphic.gpu_id" scope="row">
        <td><span>{{ graphic.gpu_id }}</span></td>
        <td>
          <div v-if="graphic.gpuFront_Img">
            <img :src="graphic.gpuFront_Img" alt="" class="img-fluid">
          </div>
        </td>
        <td><span>{{ graphic.gpuNoA }}</span></td>
        <td><span>{{ graphic.gpuNrAr }}</span></td>
        <td><span>{{ graphic.gpuGen }}</span></td>
        <td><span>{{ graphic.gpuChip }}</span></td>
        <td><span>{{ graphic.released }}</span></td>
        <td><span>{{ graphic.memoryGb }} GB</span></td>
        <td><span>{{ graphic.memoryType }}</span></td>
        <td><span>{{ graphic.memoryBit }} bit</span></td>
        <td><span>{{ graphic.gpuClock }} mhz</span></td>
        <td><span>{{ graphic.memoryClock }} mhz</span></td>
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
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  margin: auto;
}
th {
  background: var(--background-main);
}
td span{
  color: white;
}
img{
  width: 400px;
  height: 200px;
  scale: 0.9;
  object-fit: cover;
  border-radius: 30px;
}
#addGpuBtn{
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: white;
}
</style>
