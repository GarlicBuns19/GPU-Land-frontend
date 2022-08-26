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
        <td><button>Edit</button></td>
        <td><button @click="$store.dispatch('deleteProduct',grapic.gpu_id)">Delete</button></td>
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
table,th,td {
  border: 2px solid;
}
table {
  background: pink;
  margin: auto;
}
th{
    background: green;
}
tr:nth-child(even){
    background: blue;
}
tr:nth-child(odd){
    background: brown;
}
</style>
