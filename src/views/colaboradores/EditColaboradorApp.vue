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
                      <router-link to="/colaborador" class="nav-link">
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

            <template v-if="data">
              <div>
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
                        This contact will be shown to others publicly, so choose
                        it carefully.
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
                      <select
                        name=""
                        class="form-select"
                        v-model="colaborador.rol"
                      >
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
                <hr class="my-5" />
                <button
                  type="button"
                  class="btn btn-primary"
                  v-on:click="validar()"
                >
                  Guardar Cambios
                </button>
              </div>
            </template>
            <template v-if="!data">
              <div>
                <ErrorNotFound />
              </div>
            </template>

            <br /><br />
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
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
      id: this.$route.params.id,
      data: false,
    };
  },
  methods: {
    init_data() {
      axios
        .get(this.$url + "/obtener_usuario_admin/" + this.id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          if (result.data == "") {
            this.data = false;
          } else {
            this.data = true;
            this.colaborador = result.data;
          }
          console.log(this.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
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
        this.actualizar_colaborador();
      }
    },
    actualizar_colaborador() {
      axios
        .put(
          this.$url + "/actualizar_usuario_admin/" + this.id,
          this.colaborador,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: this.$store.state.token,
            },
          }
        )
        .then((result) => {
          this.$notify({
            group: "foo",
            title: "Success",
            text: "Colaborador actualizado correctamente",
            type: "success",
          });
          this.$router.push({ name: "colaborador-index" });
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    console.log(this.id);
  },
  beforeMount() {
    this.init_data();
  },
  components: {
    TopNav: () => import("@/components/TopNav.vue"),
    Sidebar: () => import("@/components/Sidebar.vue"),
    ErrorNotFound: () => import("@/components/ErrorNotFound.vue"),
  },
};
</script>
