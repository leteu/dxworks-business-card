<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          DXWorks 명함 제조기
        </q-toolbar-title>
        <q-space />
        <span class="text-body2 text-weight-bold">v{{version}}</span>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { version } from 'app/package.json'

export default defineComponent({
  name: 'MainLayout',

  setup () {

    return {
      version
    }
  }
});
</script>
