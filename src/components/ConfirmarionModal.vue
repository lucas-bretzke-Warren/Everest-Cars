 <template>
  <section>
    <div class="content-title">
      <h4>Tem certeza</h4>
      <h4>que deseja deletar este item?</h4>
    </div>
    <div class="content-btns">
      <button @click="closeModal()">Cancelar</button
      ><button @click="deleteCar(id)">Sim</button>
    </div>
  </section>
</template>
 
 <script>
import axios from "axios";
export default {
  name: "confirmationModal",
  data() {
    return { url: "http://localhost:8080/api/cars" };
  },
  props: {
    id: { type: String },
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    async deleteCar(id) {
      try {
        await axios.delete(`${this.url}/${id}`);
        this.closeModal();
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>
 
<style lang="less" scoped>
section {
  width: 300px;
  height: 100px;

  display: grid;
  align-items: center;
  justify-content: center;
  border-radius: 5px;

  position: fixed;
  top: 45%;
  left: 50%;
  right: -50%;
  transform: translate(-50%, -50%);

  border-bottom: 4px solid red;
  box-shadow: 0px 0px 1px 1100px rgba(0, 0, 0, 0.53);
  color: black;
  background-color: white;
  .content-title {
    display: grid;
    align-items: center;
    justify-content: center;
    h4 {
      margin: 0px auto;
    }
  }
  .content-btns {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      padding: 7px 13px;
      margin: 0px 3px;
      border: none;
      border-radius: 3px;
      cursor: pointer;
      color: white;
      background-color: #02343fd2;
    }
    button:hover {
      transform: translateZ(5px) scale(1.1);
      background-color: #02343f;
      border-radius: 3px;
    }
  }
}
</style>
 