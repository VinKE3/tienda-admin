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
                    <h1 class="header-title">Nuevo Producto</h1>
                  </div>
                </div>
                <!-- / .row -->
                <div class="row align-items-center">
                  <div class="col">
                    <!-- Nav -->
                    <ul class="nav nav-tabs nav-overflow header-tabs">
                      <li class="nav-item">
                        <a class="nav-link active"> Todos los Productos </a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/producto/create" class="nav-link">
                          Nuevo colaborador
                        </router-link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-12">
                <!-- Files -->
                <div class="card" data-list='{"valueNames": ["name"]}'>
                  <div class="card-header">
                    <!-- Title -->
                    <h4 class="card-header-title">Productos</h4>

                    <!-- Button -->
                    <a href="#!" class="btn btn-sm btn-primary text-white">
                      Nuevo producto
                    </a>
                  </div>
                  <div class="card-header">
                    <div
                      class="input-group input-group-flush input-group-merge input-group-reverse"
                    >
                      <!-- Input -->
                      <input
                        class="form-control list-search"
                        type="search"
                        placeholder="Busca tu producto"
                      />

                      <!-- Prepend -->
                      <div class="input-group-text">
                        <span class="fe fe-search"></span>
                      </div>
                    </div>
                  </div>
                  <div class="card-body">
                    <!-- List -->
                    <ul
                      class="list-group list-group-lg list-group-flush list my-n4"
                    >
                      <li class="list-group-item">
                        <div class="row align-items-center">
                          <div class="col-auto">
                            <!-- Avatar -->
                            <a href="#!" class="avatar avatar-lg">
                              <img
                                src="assets/img/files/file-1.jpg"
                                alt="..."
                                class="avatar-img rounded"
                              />
                            </a>
                          </div>
                          <div class="col ms-n2">
                            <!-- Title -->
                            <h4 class="mb-1 name">
                              <a href="#!">Launchday Logo</a>
                            </h4>

                            <!-- Text -->
                            <p class="card-text small text-muted mb-1">
                              2.5kb SVG
                            </p>

                            <!-- Time -->
                            <p class="card-text small text-muted">
                              Uploaded by Dianna Smiley on
                              <time datetime="2018-01-03">Jan 3, 2018</time>
                            </p>
                          </div>
                          <div class="col-auto"></div>
                          <div class="col-auto">
                            <!-- Dropdown -->
                            <div class="dropdown">
                              <a
                                href="#"
                                class="dropdown-ellipses dropdown-toggle"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                <i class="fe fe-more-vertical"></i>
                              </a>
                              <div class="dropdown-menu dropdown-menu-end">
                                <a href="#!" class="dropdown-item"> Action </a>
                                <a href="#!" class="dropdown-item">
                                  Another action
                                </a>
                                <a href="#!" class="dropdown-item">
                                  Something else here
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!-- / .row -->
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- / .row -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "IndexProductoApp",
  components: {
    Sidebar: () => import("@/components/Sidebar.vue"),
    TopNav: () => import("@/components/TopNav.vue"),
  },
};
</script>
