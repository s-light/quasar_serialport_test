let SerialPort;if(process.versions.electron){console.info("Running electron → importing SerialPort");try{SerialPort=require("serialport")}catch(e){console.error("Patch with SerialPort failed:\n",e)}}if(SerialPort)try{SerialPort.list().then((r=>{console.group("SerialPort list:");for(let o of r)o.vendorId&&console.log(o);console.groupEnd()}),(r=>{console.error("SerialPort.list:\n",r)}))}catch(e){console.error("SerialPort.list()\n",e)}