<template>
  <b-container fluid>
    <b-container fluid class="topAbs p-0">
      <b-navbar toggleable="lg" type="dark" variant="danger">
        <b-navbar-brand href="/">¡DeliverEat!</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown right text="Notificaciones">
              <template #button-content style="color: white">
                Notificaciones
                <div style="font-size: 1.5em; display: inline">
                  <b-icon
                    icon="bell-fill"
                    class="rounded-circle bg-danger p-2"
                    variant="light"
                  ></b-icon>
                </div>
              </template>
              <b-dropdown-item href="#">EN</b-dropdown-item>
              <b-dropdown-item href="#">ES</b-dropdown-item>
              <b-dropdown-item href="#">RU</b-dropdown-item>
              <b-dropdown-item href="#">FA</b-dropdown-item>
            </b-nav-item-dropdown>

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em>{{ nombreUsuario }} </em>
                <div style="font-size: 1.5em; display: inline">
                  <b-icon
                    icon="person-circle"
                    class="rounded-circle bg-light p-2"
                    variant="dark"
                  ></b-icon>
                </div>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
    <vue-pull-refresh :onRefresh="onRefresh" :config="config" style="z-index:1000;">
      <b-container fluid style="margin-top: 1.5rem">
        <slot />
      </b-container>
    </vue-pull-refresh>
  </b-container>
</template>

<script>
import VuePullRefresh from "vue-pull-refresh";

export default {
  components: { "vue-pull-refresh": VuePullRefresh },
  data() {
    return {
      nombreUsuario: "Santiago",
      config: {
        errorLabel: "No se pudo recargar",
        startLabel: "Recargar",
        readyLabel: "Soltar para Recargar",
        loadingLabel: "Cargando",
      },
    };
  },
  methods: {
    onRefresh: function () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
          location.reload();
        }, 1000);
      });
    },
  },
};
</script>

<style>
.topAbs {
  top: 0;
  right: 0;
  left: 0;
  position: relative;
  z-index: 1000;
  display: block;
}
</style>