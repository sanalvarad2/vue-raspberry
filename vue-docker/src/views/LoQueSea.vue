<template>
  <b-container>
    <b-modal
      id="modal-mapas"
      title="Seleccionar un punto en el mapa"
      @locationready="OnLocationSelected"
    >
    </b-modal>
    <b-modal
      id="modal-foto"
      title="Agregar una Foto del pedido"
      @uploaded="OnsuccessCargarFoto"
    >
    </b-modal>
    <b-modal id="modal-tarjeta"></b-modal>
    <legend>Realizar un pedido de lo que sea!</legend>
    <hr />
    <b-card no-body class="b-card" id="seccion1" v-if="datos.seccion == 0">
      <b-card-body>
        <div id="formulario">
          <form>
            <div class="form-row">
              <div class="col-sm-6 col-sm-12">
                <div class="form-group">
                  <label for="inp-DescPedido" class="form-label"
                    >¿Qué desea pedir?</label
                  >
                  <textarea
                    class="form-control"
                    id="inp-DescPedido"
                    rows="3"
                    v-model="pedido.descripcion"
                  ></textarea>
                </div>
              </div>
            </div>
            <div class="form-row">
              <div class="col-sm-6 col-sm-12">
                <div class="form-group">
                  <label for="" class="form-label"
                    >Ingrese una fotografía</label
                  >
                  <input
                    type="button"
                    class="form-control btn btn-danger"
                    id="btnFoto"
                    :value="imgSeleccionada ? 'Modificar' : 'Agregar'"
                    @click="agregarFoto"
                  />
                </div>
              </div>
            </div>

            <div class="form-row" v-if="imgSeleccionada">
              <div class="col-sm-6 col-sm-12">
                <div class="form-group">
                  <img
                    :src="'data:image/jpeg;base64,' + pedido.base64Img"
                    alt="Imagen del Producto"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </b-card-body>
    </b-card>
    <b-card no-body class="b-card" id="seccion2" v-if="datos.seccion == 1">
      <b-card-body>
        <div id="formulario">
          <form>
            <div class="form-row">
              <div class="col-sm-6 col-sm-12">
                <div class="form-group">
                  <input
                    type="button"
                    class="form-control btn btn-danger mt-4"
                    id="btnFoto"
                    :value="
                      ubicacionSeleccionada
                        ? ' Modificar Direccion'
                        : 'Seleccionar Dirección'
                    "
                    @click="agregarDireccion"
                  />
                </div>
              </div>
            </div>
            <div class="form-row" v-if="ubicacionSeleccionada">
              <div class="col-sm-6">
                <div class="form-group">
                  <label for="" class="form-label"
                    >Dirección Seleccionada</label
                  >
                  <input
                    type="text"
                    class="form-control-plaintext"
                    readonly
                    name=""
                    id="inpUbicacion"
                    v-model="pedido.ubicacion"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </b-card-body>
    </b-card>
    <div class="row mt-4 float-right">
      <div class="col-sm-6 col-sm-12">
        <button
          class="btn btn-danger"
          v-if="tieneAnterior"
          @click="previousSeccion"
        >
          Anterior
        </button>
        <button class="btn btn-danger" @click="nextSeccion">Siguiente</button>
      </div>
    </div>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      pedido: {
        descripcion: "",
        base64Img: "",
        ubicacion: "",
      },
      datos: {
        seccion: 0,
      },
    };
  },
  methods: {
    agregarFoto: () => {},
    OnsuccessCargarFoto: () => {},
    OnLocationSelected: () => {},
    agregarDireccion: () => {},
    previousSeccion: () => {},
    nextSeccion: () => {
        var app = this.app;
        app.datos.seccion +=1;
    },
  },
  computed: {
    imgSeleccionada: (app) => {
      return app.pedido.base64Img && app.pedido.base64Img.length;
    },
    ubicacionSeleccionada: (app) => {
      return app.pedido.ubicacion && app.pedido.ubicacion.length;
    },
    tieneAnterior: (app) => {
      return app.datos.seccion != 0 && app.datos.seccion > 0;
    },
  },
};
</script>

<style>
</style>