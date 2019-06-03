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
// sp.list().then(
//     ports => ports.forEach(console.log),
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
            console.log('listPorts')

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

            console.log('listPorts done.')
        }
    },
    mounted: function () {
        console.log('mounted..')

        // let SerialPort
        // try {
        //     SerialPort = require('serialport')
        //     this.serialAvailableInternal = true
        // } catch (e) {
        //     console.error('SerialPort loading failed.\n', e)
        // }

        // console.log('SerialPort', SerialPort)
        // if (SerialPort) {
        //     console.log('setup done.')
        // }
        console.log('mounted - done')
    }
}
</script>

<style lang="stylus">
</style>
