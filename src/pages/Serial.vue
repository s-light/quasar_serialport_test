<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <section>
            serialAvailableInternal: {{ serialAvailableInternal }}
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

// Serial things
// import { SerialPort } from 'serialport'
// ^ this does not work in SPA

// const SerialPort = require('serialport')

// let SerialPort
// try {
//     SerialPort = require('serialport')
// } catch (e) {
//     console.error('SerialPort loading failed.\n', e)
// }

// let SerialPort
// import('serialport')
//     .then(module => {
//         SerialPort = module
//         console.info('import serialport\n', module)
//     })
//     .catch(err => {
//         console.error('import serialport\n', err)
//     })

// if (SerialPort) {
//     SerialPort.list().then(
//         ports => console.log('ports', ports),
//         err => console.error('serialport.list:', err)
//     )
// }

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// debug in developer console
// sp = require('serialport')
// sp.list().then(
//     ports => {
//         for (port of ports) {
//             if (port.vendorId) {
//                 console.log(port)
//             }
//         }
//     },
//     err => console.error('sp.list:', err)
// )

export default {
    name: 'SerialList',
    data () {
        return {
            serialAvailableInternal: false,
            deviceList: [{
                comName: 'dummyResponder'
            }]
        }
    },
    methods: {
        listPorts () {
            console.group('listPorts()')
            if (SerialPort) {
                try {
                    SerialPort.list().then(
                        ports => {
                            console.log('ports', ports)
                            this.deviceList = []
                            this.deviceList.push(...ports)
                            // console.group('SerialPort list:')
                            // for (let port of ports) {
                            //     if (port.vendorId) {
                            //         console.log(port)
                            //     }
                            // }
                            // console.groupEnd()
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
