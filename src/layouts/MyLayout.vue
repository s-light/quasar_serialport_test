<template>
    <q-layout view="lHh Lpr lFf">
        <q-header elevated>
            <q-toolbar>
                <q-btn
                    flat
                    dense
                    round
                    @click="leftDrawerOpen = !leftDrawerOpen"
                    aria-label="Menu"
                >
                    <q-icon name="menu" />
                </q-btn>

                <q-toolbar-title>
                    Hello World :-)
                </q-toolbar-title>

                <div>
                    Quasar v{{ $q.version }}
                </div>
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
            bordered
            content-class="bg-grey-2"
        >
            <q-list>
                <q-item
                    header
                    clickable
                    v-ripple
                    to="welcome"
                    exact
                >
                    <img
                        alt="App-Logo"
                        src="~assets/logo_test3_splashscreen.svg"
                        style="max-width: 100%;"
                    >
                </q-item>
                <q-item
                    clickable
                    v-ripple
                    to="serial_minimal"
                    exact
                >
                    <q-item-section avatar>
                        <q-icon name="developer_board" />
                    </q-item-section>
                    <q-item-section>
                        <q-item-label>
                            Serial Tests Minimal
                        </q-item-label>
                        <q-item-label caption>
                            serial connection tests
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

export default {
    name: 'MyTests',
    data () {
        return {
            leftDrawerOpen: this.$q.platform.is.desktop,
            link: 'index'
        }
    }
}
</script>

<style lang="stylus">
.my-menu-link
    color white
    background #F2C037
</style>
