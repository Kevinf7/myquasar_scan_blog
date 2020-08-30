<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="../assets/qr-code.svg" />
          </q-avatar>
          Cool scan app
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-grey-7 text-white">
      <q-tabs align="justify">
        <q-route-tab to="/" icon="home" label="Home" />
        <q-route-tab to="/scan" icon="code" label="Scan" />
      </q-tabs>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',
  data() {
    return {}
  }
}
</script>
