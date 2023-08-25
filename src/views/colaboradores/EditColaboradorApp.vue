<template>
  <div>
    <TopNav />
    <Sidebar />
    <div class="main-content">
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Pretitle -->
                    <h6 class="header-pretitle">Colaboradores</h6>

                    <!-- Title -->
                    <h1 class="header-title">Editar colaborador</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <router-link to="/colaborador/index" class="nav-link">
                        Todos los colaboradores
                      </router-link>
                      <li class="nav-item">
                        <router-link
                          to="/colaborador/create"
                          class="nav-link active"
                        >
                          Nuevo Colaborador
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-12 col-md-6">
                <!-- First name -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Nombres </label>

                  <!-- Input -->
                  <input
                    type="text"
                    class="form-control"
                    v-model="colaborador.nombres"
                    placeholder="Nombres"
                  />
                </div>
              </div>
              <div class="col-12 col-md-6">
                <!-- Last name -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Apellidos </label>

                  <!-- Input -->
                  <input
                    type="text"
                    class="form-control"
                    v-model="colaborador.apellidos"
                    placeholder="Apellidos"
                  />
                </div>
              </div>
              <div class="col-12">
                <!-- Email address -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="mb-1"> Correo electrónico </label>

                  <!-- Form text -->
                  <small class="form-text text-muted">
                    This contact will be shown to others publicly, so choose it
                    carefully.
                  </small>

                  <!-- Input -->
                  <input
                    type="email"
                    class="form-control"
                    v-model="colaborador.email"
                    placeholder="Email"
                  />
                </div>
              </div>

              <div class="col-12 col-md-6">
                <!-- Birthday -->
                <div class="form-group">
                  <!-- Label -->
                  <label class="form-label"> Cargo </label>

                  <!-- Input -->
                  <select name="" class="form-select" v-model="colaborador.rol">
                    <option disabled selected value="">
                      Seleccione un cargo
                    </option>
                    <option value="Administrador">Administrador</option>
                    <option value="Vendedor">Vendedor</option>
                    <option value="Inventariado">Inventariado</option>
                  </select>
                </div>
              </div>
            </div>
            <!-- / .row -->

            <!-- Divider -->

            <hr class="my-5" />

            <!-- Button -->
            <button
              type="button"
              class="btn btn-primary"
              v-on:click="validar()"
            >
              Crear Colaborador
            </button>

            <br /><br />
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar.vue";
import TopNav from "@/components/TopNav.vue";
import axios from "axios";

export default {
  name: "EditColaboradorApp",
  data() {
    return {
      colaborador: {
        nombres: "",
        apellidos: "",
        email: "",
        rol: "",
      },
    };
  },
  methods: {
    validar() {
      if (!this.colaborador.nombres) {
        this.$notify({
          group: "foo",
          title: "Error",
          text: "El campo nombres es obligatorio",
          type: "error",
        });
      } else if (!this.colaborador.apellidos) {
        this.$notify({
          group: "foo",
          title: "Error",
          text: "El campo apellidos es obligatorio",
          type: "error",
        });
      } else if (!this.colaborador.email) {
        this.$notify({
          group: "foo",
          title: "Error",
          text: "El campo email es obligatorio",
          type: "error",
        });
      } else if (!this.colaborador.rol) {
        this.$notify({
          group: "foo",
          title: "Error",
          text: "El campo rol es obligatorio",
          type: "error",
        });
      } else {
        // this.crear_colaborador();
      }
    },
    // crear_colaborador() {
    //   axios
    //     .post(this.$url + "/registro_usuario_admin", this.colaborador, {
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: this.$token,
    //       },
    //     })
    //     .then((result) => {
    //       if (result.data.data == undefined) {
    //         this.$notify({
    //           group: "foo",
    //           title: "Error",
    //           text: result.data.message,
    //           type: "error",
    //         });
    //       } else {
    //         this.$notify({
    //           group: "foo",
    //           title: "Success",
    //           text: "Colaborador creado correctamente",
    //           type: "success",
    //         });
    //         this.$router.push({ name: "colaborador-index" });
    //       }
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // },
  },
  mounted() {},
  components: {
    TopNav: () => import("@/components/TopNav.vue"),
    Sidebar: () => import("@/components/Sidebar.vue"),
  },
};
</script>
