<template>
  <!-- Edit Modal -->
  <div
    class="modal fade"
    :id="'edit' + graphic.gpu_id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Graphics Card</h5>
        </div>
        <div class="modal-body">
          <div class="row">
            <!-- Gpu Front Img -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuFront_Img" class="form-label"
                >Gpu Front Img:</label
              >
              <input
                type="text"
                class="modal-title"
                id="gpuFront_Img"
                v-model="graphic.gpuFront_Img"
                placeholder="Gpu Front Img"
              />
            </div>
            <!-- Gpu Top Img -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuFront_Img" class="form-label"
                >Gpu Top Img:</label
              >
              <input
                type="text"
                class="modal-title"
                id="gpuTop"
                v-model="graphic.gpuTop"
                placeholder="Gpu Top Img"
              />
            </div>
            <!-- Gpu Back Img -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuBack" class="form-label"
                >Gpu Back Img:</label
              >
              <input
                type="text"
                class="modal-title"
                id="gpuBack"
                v-model="graphic.gpuBack"
                placeholder="Gpu Back Img"
              />
            </div>
            <!-- Gpu Bottom Img -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuBottom" class="form-label"
                >Gpu Bottom Img:</label
              >
              <input
                type="text"
                class="modal-title"
                id="gpuBottom"
                v-model="graphic.gpuBottom"
                placeholder="Gpu Bottom Img"
              />
            </div>
            <!-- Gpu Io Img -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuBottom" class="form-label"
                >Gpu IO Img:</label
              >
              <input
                type="text"
                class="modal-title"
                id="gpuIo"
                v-model="graphic.gpuIo"
                placeholder="Gpu IogpuIo Img"
              />
            </div>
            <!-- Gpu N or A -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuNoA" class="form-label">Gpu N or A:</label>
              <input
                type="text"
                class="modal-title"
                id="gpuNoA"
                v-model="graphic.gpuNoA"
                placeholder="Geforce or Radean"
              />
            </div>
            <!-- Gpu NrAr -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuNrAr" class="form-label">Gpu NrAr</label>
              <input
                type="text"
                class="modal-title"
                id="gpuNrAr"
                v-model="graphic.gpuNrAr"
                placeholder="RTX or RX"
              />
            </div>
            <!-- Gpu Gen-->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuGen" class="form-label">Gpu Gen</label>
              <input
                type="text"
                class="modal-title"
                id="gpuGen"
                v-model="graphic.gpuGen"
                placeholder="Gpu Gen"
              />
            </div>
            <!-- Gpu Chip -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuChip" class="form-label">Gpu Chip</label>
              <input
                type="text"
                class="modal-title"
                id="gpuChip"
                v-model="graphic.gpuChip"
                placeholder="What Gpu Chip"
              />
            </div>
            <!-- Year Released -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="released" class="form-label">Year Released</label>
              Year
              <input
                type="number"
                class="modal-title"
                id="released"
                v-model="graphic.released"
                placeholder="Year Released"
              />
            </div>
            <!-- Gpu VRAM -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryGb" class="form-label">Gpu VRAM (GB)</label>
              Gb
              <input
                type="number"
                class="modal-title"
                id="memoryGb"
                v-model="graphic.memoryGb"
                placeholder="VRAM"
              />
            </div>
            <!-- Memory Type -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryType" class="form-label">Memory Type</label>
              <input
                type="text"
                class="modal-title"
                id="memoryType"
                v-model="graphic.memoryType"
                placeholder="GDDR what"
              />
            </div>
            <!-- How much BUS -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryBit" class="form-label">How much BUS</label>
              <input
                type="number"
                class="modal-title"
                id="memoryBit"
                v-model="graphic.memoryBit"
                placeholder="How much BUS"
              />
            </div>
            <!-- Gpu Clock -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuClock" class="form-label">Gpu Clock</label>
              <input
                type="number"
                class="modal-title"
                id="gpuClock"
                v-model="graphic.gpuClock"
                placeholder="Gpu Clock"
              />
            </div>
            <!-- Memory Clock -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryClock" class="form-label">Memory Clock</label>
              <input
                type="number"
                class="modal-title"
                id="memoryClock"
                v-model="graphic.memoryClock"
                placeholder="Memory Clock"
              />
            </div>
            <!-- Price -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="price" class="form-label">Price</label>
              <input
                class="form-control"
                type="number"
                name="price"
                id="price"
                v-model="graphic.price"
                placeholder="Price?"
              />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            @click="edit"
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Edit this GPU
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["graphic"],
  methods: {
    edit() {
      return this.$store.dispatch("editGraphic", this.graphic);
    },
  },
};
</script>
