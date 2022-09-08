<template>
  <button
    id="addGpuBtn"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#addGpu"
  >
    Add Gpu
  </button>
  <table>
    <thead>
      <tr>
        <th><span>GPU Id</span></th>
        <th><span>GPU Front Img</span></th>
        <th><span>GPU Top Img</span></th>
        <th><span>GPU Back Img</span></th>
        <th><span>GPU Bottom Img</span></th>
        <th><span>GPU Io Img</span></th>
        <th><span>GPU NoA</span></th>
        <th><span>GPU NrAr</span></th>
        <th><span>Series</span></th>
        <th><span>GPU Chip</span></th>
        <th><span>Year</span></th>
        <th><span>VRAM</span></th>
        <th><span>GDDR Type</span></th>
        <th><span>Bit size</span></th>
        <th><span>GPU Clock</span></th>
        <th><span>Memory Clock</span></th>
        <th><span>Price</span></th>
        <th><span>Edit</span></th>
        <th><span>Delete</span></th>
      </tr>
    </thead>
    <tbody v-if="graphicCards">
      <tr v-for="graphic in graphicCards" :key="graphic.gpu_id" scope="row">
        <td>
          <span>{{ graphic.gpu_id }}</span>
        </td>
        <td>
          <div v-if="graphic.gpuFront_Img">
            <img :src="graphic.gpuFront_Img" alt="" class="img-fluid" />
          </div>
        </td>
        <td>
          <div v-if="graphic.gpuTop">
            <img :src="graphic.gpuTop" alt="" class="img-fluid" />
          </div>
        </td>
        <td>
          <div v-if="graphic.gpuBack">
            <img :src="graphic.gpuBack" alt="" class="img-fluid" />
          </div>
        </td>
        <td>
          <div v-if="graphic.gpuBottom">
            <img :src="graphic.gpuBottom" alt="" class="img-fluid" />
          </div>
        </td>
        <td>
          <div v-if="graphic.gpuIo">
            <img :src="graphic.gpuIo" alt="" class="img-fluid" />
          </div>
        </td>
        <td>
          <span>{{ graphic.gpuNoA }}</span>
        </td>
        <td>
          <span>{{ graphic.gpuNrAr }}</span>
        </td>
        <td>
          <span>{{ graphic.gpuGen }}</span>
        </td>
        <td>
          <span>{{ graphic.gpuChip }}</span>
        </td>
        <td>
          <span>{{ graphic.released }}</span>
        </td>
        <td>
          <span>{{ graphic.memoryGb }} GB</span>
        </td>
        <td>
          <span>{{ graphic.memoryType }}</span>
        </td>
        <td>
          <span>{{ graphic.memoryBit }} bit</span>
        </td>
        <td>
          <span>{{ graphic.gpuClock }} mhz</span>
        </td>
        <td>
          <span>{{ graphic.memoryClock }} mhz</span>
        </td>
        <td>
          <span>R {{ graphic.price }}</span>
        </td>
        <td>
          <!-- Button trigger modal -->
          <button
            type="button"
            id="editBtn"
            class="btn btn-primary"
            data-bs-toggle="modal"
            :data-bs-target="'#edit' + graphic.gpu_id"
          >
            <i class="bi bi-pencil-square"></i>
          </button>
        </td>
        <td>
          <button 
          id="deleteBtn"
          class="btn btn-primary"
          @click="$store.dispatch('deleteGraphic', graphic.gpu_id)">
            <i class="bi bi-trash3-fill"></i>
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
import createModel from "../components/createModel.vue";
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
span {
  color: white;
}
img {
  /* width: 200px; */
  height: 200px;
  scale: 0.9;
  object-fit: cover;
  border-radius: 10px;
  /* aspect-ratio: auto; */
}
#addGpuBtn {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: white;
}
#editBtn ,#deleteBtn {
  background-image: linear-gradient(144deg, #df40ff, #5b42f3 50%, #00ddeb);
  color: #efefef;
  transition: linear 0.6s;
}
#editBtn:hover ,#deleteBtn:hover {
  transform: scale(1.07);
}
</style>
