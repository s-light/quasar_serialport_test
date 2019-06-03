// experiment with different things regarding import..

// import Platform from 'quasar'
// console.log('Platform', Platform)
// console.log('process', process)
// console.log('process.versions.electron', process.versions.electron)
// console.log('process.env', process.env)
// console.info('Patch with SerialPort!');
let SerialPort
if (process.versions.electron) {
    // eslint-disable-next-line no-console
    console.info('Running electron → importing SerialPort')
    try {
        SerialPort = require('serialport')
        // import('serialport')
        //     .then(module => {
        //         SerialPort = module;
        //         console.info('Patch with SerialPort done.', SerialPort);
        //     })
        //     .catch(err => {
        //         console.info('importing \'serialport\' failed.\n', err);
        //     });
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error('Patch with SerialPort failed:\n', e)
    }
}

if (SerialPort) {
    try {
        SerialPort.list().then(
            ports => {
                // eslint-disable-next-line no-console
                console.group('SerialPort list:')
                for (let port of ports) {
                    if (port.vendorId) {
                        // eslint-disable-next-line no-console
                        console.log(port)
                    }
                }
                // eslint-disable-next-line no-console
                console.groupEnd()
            },
            err => {
                // eslint-disable-next-line no-console
                console.error('SerialPort.list:\n', err)
            }
        )
    } catch (e) {
        // eslint-disable-next-line no-console
        console.error('SerialPort.list()\n', e)
    }
}
