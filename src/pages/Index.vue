<template>
    <q-page
        class="flex column"
        style="align-items: center;"
    >
        <h4>Quasar SerialPort Tests</h4>
        <p>
            Welcome to a some tests -<br>
            this is what i have 'build' on my way to learn quasar and vue :-)<br>
            enjoy ;-)
        </p>
        <q-btn
            v-ripple
            to="Serial"
            label="Serial Tests"
        />
        <p
            class="q-mt-ms"
        >
            find the source repository at <br>
            <a
                target="_blank"
                href="https://github.com/s-light/quasar_serialport_test"
            >
                https://github.com/s-light/quasar_serialport_test
            </a>
        </p>
    </q-page>
</template>

<style>
</style>

<script>
export default {
    name: 'PageIndex'
}
</script>
