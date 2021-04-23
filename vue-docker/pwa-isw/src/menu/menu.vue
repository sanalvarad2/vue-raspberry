<template>
  <b-container-fluid>
  <b-container-fluid>
    <b-navbar toggleable="lg" type="dark" variant="danger">
      <b-navbar-brand href="#">¡DeliverEat!</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown right text="Notificaciones">
            <template #button-content style="color:white">
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
              <em>{{ nombreUsuario   }}    </em>
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
  </b-container-fluid>
  <b-container class="pt-4">

    <slot />
  </b-container>
  </b-container-fluid>
</template>

<script>
export default {
  data() {
    return {
      nombreUsuario: "Santiago",
    };
  },
};
</script>

<style>
</style>