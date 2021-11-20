<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section>
            <!-- SerialPort: {{ SerialPort }} -->
        </section>
        <q-btn
            v-ripple
            label="list ports"
            @click="listPorts()"
        />
        <section class="q-mt-md">
            <div
                v-for="(device, index) in deviceList"
                :key="index"
            >
                <pre>{{ device }}</pre>
            </div>
        </section>
    </q-page>
</template>

<script>
/* eslint no-console: ["error", { allow: ["log", "group", "groupEnd", "warn", "error"] }] */
// import * as serialport from 'serialport'
// console.log('serialport:', serialport)
// import SerialPort from 'serialport'

const SerialPort = require('serialport')

export default {
    name: 'SerialList',
    data () {
        return {
            deviceList: [{
                comName: 'dummyResponder'
            }]
        }
    },
    methods: {
        listPorts () {
            console.group('listPorts()')
            console.log('SerialPort', SerialPort)
            console.log('window.serialport', window.serialport)
            if (SerialPort) {
                try {
                    SerialPort.list().then(
                        ports => {
                            console.log('ports', ports)
                            this.deviceList = []
                            this.deviceList.push(...ports)
                        },
                        err => {
                            console.error('serialport.list:', err)
                        }
                    )
                } catch (e) {
                    console.error('SerialPort.list() failed:\n', e)
                }
            } else {
                this.deviceList = []
                console.log('SerialPort not available.')
            }
            console.groupEnd()
        }
    },
    mounted: function () {
        this.listPorts()
    }
}
</script>

<style lang="stylus">
</style>
