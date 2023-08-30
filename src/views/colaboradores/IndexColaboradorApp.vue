<template>
  <div>
    <Sidebar />
    <div class="main-content">
      <TopNav />
      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col-12 col-lg-10 col-xl-8">
            <!-- Header -->
            <div class="header mt-md-5">
              <div class="header-body">
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Pretitle -->
                    <h6 class="header-pretitle">Productos</h6>

                    <!-- Title -->
                    <h1 class="header-title">
                      <b>Galeria de producto</b>
                    </h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <router-link to="/producto" class="nav-link"
                          >Todos los productos</router-link
                        >
                      </li>
                      <li class="nav-item">
                        <a class="nav-link active"> Galeria de producto </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <template v-if="load_data">
              <div class="row">
                <div class="col-12 text-center">
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </div>
              </div>
            </template>

            <template v-if="!load_data">
              <div>
                <div class="mb-7" v-if="data">
                  <div class="row">
                    <div class="col-12 col-md-12">
                      <!-- Email address -->
                      <div class="form-group">
                        <!-- Label -->
                        <label class="mb-1"> Imagen </label>

                        <!-- Input -->
                        <div class="input-group mb-3">
                          <input
                            type="file"
                            id="input_file"
                            class="form-control"
                            placeholder="Selecciona la imagen"
                            v-on:change="uploadImage($event)"
                          />
                          <button
                            class="btn btn-primary"
                            v-on:click="subir_imagen()"
                          >
                            <i class="fe fe-upload"></i>
                          </button>
                        </div>
                        <!-- Form text -->
                        <small class="form-text text-muted">
                          Subo un maximo de 5 imagenes para la galeria del
                          producto.
                        </small>
                      </div>
                    </div>
                  </div>
                  <!-- / .row -->

                  <div class="row listAlias" v-if="!load_galeria">
                    <div
                      class="col-12 col-md-6 col-xl-4"
                      v-for="item in galeria"
                    >
                      <div class="card">
                        <a href="project-overview.html">
                          <img
                            :src="
                              $url + '/obtener_galeria_producto/' + item.imagen
                            "
                            alt="..."
                            class="card-img-top"
                          />
                        </a>
                        <div class="card-footer card-footer-boxed">
                          <div class="row">
                            <div class="col text-center">
                              <a
                                v-b-modal="'delete-' + item._id"
                                style="cursor: pointer"
                                class="text-danger"
                                >Eliminar imagen</a
                              >
                              <b-modal
                                centered
                                :id="'delete-' + item._id"
                                title="BootstrapVue"
                                title-html="<h4 class='card-header-title'><b>Eliminar imagen</b></h4>"
                                @ok="eliminar(item._id)"
                              >
                                <p class="my-4">{{ item._id }}</p>
                              </b-modal>
                            </div>
                          </div>
                          <!-- / .row -->
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="row mt-5" v-if="load_galeria">
                    <div class="col-12 text-center">
                      <img
                        src="/assets/img/reloj.gif"
                        alt=""
                        style="width: 80px"
                      />
                    </div>
                  </div>
                </div>

                <template v-if="!data">
                  <div>
                    <ErrorNotFound />
                  </div>
                </template>
              </div>
            </template>
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
  name: "IndexColaboradorApp",
  data() {
    return {
      colaboradores: [],
      colaboradores_const: [],
      paginate: ["colaboradores"],
      currentPage: 1,
      perPage: 15,
      filtro: "",
      load_data: false,
    };
  },
  components: {
    Sidebar: () => import("@/components/Sidebar.vue"),
    TopNav: () => import("@/components/TopNav.vue"),
  },
  methods: {
    onLangsPageChange(toPage, fromPage) {
      // handle here…
      this.currentPage = toPage;
      console.log(this.currentPage);
    },
    goPrev() {
      console.log(this.currentPage);
      if (this.currentPage >= 2) {
        this.$refs.colaboradores.goToPage(this.currentPage--);
      } else {
        this.$refs.colaboradores.goToPage(1);
      }
    },
    goNext() {
      if (
        this.currentPage <= Math.ceil(this.colaboradores.length / this.perPage)
      ) {
        this.$refs.colaboradores.goToPage(this.currentPage++);
      } else {
        this.$refs.colaboradores.goToPage(
          Math.ceil(this.colaboradores.length / this.perPage)
        );
      }
    },
    filtrar() {
      console.log(this.filtro);
      let term = new RegExp(this.filtro, "i");
      // this.colaboradores = this.colaboradores_const.filter(
      //   (item) =>
      //     term.test(item.nombres) ||
      //     term.test(item.apellidos) ||
      //     term.test(item.email)
      // );
      this.init_data();
    },
    init_data() {
      this.load_data = true;
      axios
        .get(this.$url + "/listar_usuario_admin/" + this.filtro, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          this.colaboradores = result.data;
          this.colaboradores_const = this.colaboradores;
          this.load_data = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    eliminar(id) {
      axios
        .delete(this.$url + "/eliminar_galeria_producto_admin/" + id, {
          headers: {
            "Content-Type": "application/json",
            Authorization: this.$store.state.token,
          },
        })
        .then((result) => {
          if (result.data.message) {
            this.$notify({
              group: "foo",
              title: "SUCCESS",
              text: result.data.message,
              type: "error",
            });
          } else {
            this.$notify({
              group: "foo",
              title: "SUCCESS",
              text: "Se eliminó la imagen.",
              type: "success",
            });
            this.init_galeria();
          }
        });
    },
  },

  beforeMount() {
    this.init_data();
    this.init_galeria();
  },
};
</script>
