<template>
  <!-- <q-page class="flex flex-center"> -->
  <q-page class="fit column  justify-center items-center content-center">
      <h4>Quasar SerialPort Tests</h4>
      <p>
          Welcome to a some tests -<br>
          this is what i have 'build' on my way to learn quasar and vue :-)<br>
          enjoy ;-)
      </p>
      <pre style="font-size:0.8em;">{{ $q.platform }}</pre>
      <q-btn
          v-ripple
          to="Serial"
          label="Serial Tests"
      />
      <p class="q-mt-ms">
          find the source repository at <br>
          <a
              target="_blank"
              href="https://github.com/s-light/quasar_serialport_test"
          >
              https://github.com/s-light/quasar_serialport_test
          </a>
          <br>
          and more information at <br>
          <a
              target="_blank"
              href="https://github.com/s-light/quasar_test/issues/7"
          >
              quasar_test: experiment with serial access #7
          </a>
      </p>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex'
})
</script>
