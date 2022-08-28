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
                  <input
                    type="text"
                    class="modal-title"
                    id="gpuFront_Img"
                    v-model="graphic.gpuFront_Img"
                  />
                  <input
                    type="text"
                    class="modal-title"
                    id="gpuNoA"
                    v-model="graphic.gpuNoA"
                  />
                  <input
                  type="text"
                    class="modal-title"
                    id="gpuNrAr"
                    v-model="graphic.gpuNrAr"
                  />
                </div>
                <div class="modal-body">
                  <input
                    type="text"
                    class="modal-title"
                    id="gpuGen"
                    v-model="graphic.gpuGen"
                  />
                  <input
                    type="text"
                    class="modal-title"
                    id="gpuChip"
                    v-model="graphic.gpuChip"
                  />
                  Year
                  <input
                    type="number"
                    class="modal-title"
                    id="released"
                    v-model="graphic.released"
                  />
                  Gb
                  <input
                    type="number"
                    class="modal-title"
                    id="memoryGb"
                    v-model="graphic.memoryGb"
                  />
                  <div>
                    Memory Type
                    <input
                        type="text"
                      class="modal-title"
                      id="memoryType"
                      v-model="graphic.memoryType"
                    />
                  </div>
                  <input
                    type="number"
                    class="modal-title"
                    id="memoryBit"
                    v-model="graphic.memoryBit"
                  />
                  <input
                  type="number"
                    class="modal-title"
                    id="gpuClock"
                    v-model="graphic.gpuClock"
                  />
                  <input
                  type="number"
                    class="modal-title"
                    id="memoryClock"
                    v-model="graphic.memoryClock"
                  />
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
    props: ['graphic'],
    methods :{
        edit(){
            return this.$store.dispatch("editGraphic",this.graphic)
        }
    }
}
</script>
