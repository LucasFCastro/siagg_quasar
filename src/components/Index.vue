<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="0">
        Sistema de Apoio à Gestão da GIPES
      </q-toolbar-title>
    </div>
    <q-drawer>
      <div class="list platform-delimiter">
        <div class="toolbar light">
          <div class="toolbar-title">
            <div class="">
              Bem Vindo, Lucas!
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="list-label">
            Menu Principal
          </div>
        </div>
        <q-drawer-link icon="mail" to="/oficios">Oficios</q-drawer-link>
        <q-drawer-link icon="contacts" to="/prestadores">Prestadores</q-drawer-link>
      </div>
    </q-drawer>

    <div class="layout-view">
      <div class="layout-padding">
        <router-view></router-view>
      </div>
    </div>

  </q-layout>

</template>

<script>

export default {
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  mounted () {
  },
  beforeDestroy () {
  }
}
</script>

<style lang="stylus">
</style>
