<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Serial Hello World
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
        <div>
            <!-- https://quasar.dev/options/platform-detection -->
            &nbsp;
            {{ $q.platform.is.platform }}
            &nbsp;
            {{ $q.platform.is.desktop ? 'desktop' : '' }}
            {{ $q.platform.is.mobile ? 'mobile' : '' }}
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->
        <q-item
            clickable
            v-ripple
            to="Serial"
            exact
        >
            <q-item-section avatar>
                <q-icon name="developer_board" />
            </q-item-section>
            <q-item-section>
                <q-item-label>
                    Serial Tests
                </q-item-label>
            </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    // EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      // essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
