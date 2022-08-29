<template>
  <div
    class="modal fade"
    id="addGpu"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add Gpu</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-md-6 mx-auto mb-3">
              <!-- Gpu Front Img -->
              <label for="gpuFront_Img" class="form-label"
                >Gpu Front Img:</label
              >
              <input
                class="form-control"
                type="text"
                v-model="gpuFront_Img"
                name="gpuFront_Img"
                id="gpuFront_Img"
                placeholder="Gpu Front Img"
                required
              />
            </div>
            <!-- Gpu N or A -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuNoA" class="form-label">Gpu N or A:</label>
              <input
                class="form-control"
                type="text"
                v-model="gpuNoA"
                name="gpuNoA"
                id="gpuNoA"
                placeholder="Geforce or Radean"
                required
              />
            </div>
            <!-- Gpu NrAr -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuNrAr" class="form-label">Gpu NrAr</label>
              <input
                class="form-control"
                type="text"
                name="gpuNrAr"
                id="gpuNrAr"
                v-model="gpuNrAr"
                placeholder="RTX or RX"
              />
            </div>
            <!-- Gpu Gen-->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuGen" class="form-label">Gpu Gen</label>
              <input
                class="form-control"
                type="text"
                name="gpuGen"
                id="gpuGen"
                v-model="gpuGen"
                placeholder="Gpu Gen"
              />
            </div>
            <!-- Gpu Chip -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuChip" class="form-label">Gpu Chip</label>
              <input
                class="form-control"
                type="text"
                name="gpuChip"
                id="gpuChip"
                v-model="gpuChip"
                placeholder="What Gpu Chip"
              />
            </div>
            <!-- Year Released -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="released" class="form-label">Year Released</label>
              <input
                class="form-control"
                type="number"
                name="released"
                id="released"
                v-model="released"
                placeholder="Year Released"
              />
            </div>

            <!-- Gpu VRAM -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryGb" class="form-label">Gpu VRAM (GB)</label>
              <input
                class="form-control"
                type="number"
                name="memoryGb"
                id="memoryGb"
                v-model="memoryGb"
                placeholder="VRAM"
              />
            </div>

            <!-- Memory Type -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryType" class="form-label">Memory Type</label>
              <input
                class="form-control"
                type="text"
                name="memoryType"
                id="memoryType"
                v-model="memoryType"
                placeholder="GDDR what"
              />
            </div>

            <!-- How much BUS -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryBit" class="form-label">How much BUS</label>
              <input
                class="form-control"
                type="number"
                name="memoryBit"
                id="memoryBit"
                v-model="memoryBit"
                placeholder="How much BUS"
              />
            </div>
            <!-- Gpu Clock -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="gpuClock" class="form-label">Gpu Clock</label>
              <input
                class="form-control"
                type="number"
                name="gpuClock"
                id="gpuClock"
                v-model="gpuClock"
                placeholder="Gpu Clock"
              />
            </div>
            <!-- Memory Clock -->
            <div class="col-md-6 mx-auto mb-3">
              <label for="memoryClock" class="form-label">Memory Clock</label>
              <input
                class="form-control"
                type="number"
                name="memoryClock"
                id="memoryClock"
                v-model="memoryClock"
                placeholder="Memory Clock"
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
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="addGpu"
          >
            Add Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gpuFront_Img: null,
      gpuNoA: null,
      gpuNrAr: null,
      gpuGen: null,
      gpuChip: null,
      released: null,
      memoryGb: null,
      memoryType: null,
      memoryBit: null,
      gpuClock: null,
      memoryClock: null,
    };
  },
  methods: {
    addGpu() {
      return this.$store.dispatch("addGraphic", {
        gpuFront_Img: this.gpuFront_Img,
        gpuNoA: this.gpuNoA,
        gpuNrAr: this.gpuNrAr,
        gpuGen: this.gpuGen,
        gpuChip: this.gpuChip,
        released: this.released,
        memoryGb: this.memoryGb,
        memoryType: this.memoryType,
        memoryBit: this.memoryBit,
        gpuClock: this.gpuClock,
        memoryClock: this.memoryClock,
      });
    },
  },
};
</script>