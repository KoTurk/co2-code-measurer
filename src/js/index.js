import { co2 } from '/@tgwf/co2/src/index.js'
import { hosting } from  '/@tgwf/co2/src/index.js'

var co2_element = document.querySelector('#co2_element');
var co2_element2 = document.querySelector('#co2_element2');
var co2_page = document.querySelector('#co2_page');
var google = document.querySelector('#hosting');

const swd = new co2({model: "swd"})
const oneByte = new co2({model: "1byte"})

const emissions_swd_per_byte = swd.perByte(1000000000, true)
const emissions_1byte_per_byte = oneByte.perByte(1000000000, true)
const page_size = (document.documentElement.outerHTML.length)
const emissions_swd_page_size = swd.perByte(page_size, true)
const domain = window.location.hostname
const hosting_google = hosting.check(domain)
let result = await hosting_google;

co2_element.innerHTML = `CO2 emissions of 1GB is: <span>${emissions_swd_per_byte} in gram/kwh (swd model)<span>`
co2_element2.innerHTML = `CO2 emissions of 1GB is: <span>${emissions_1byte_per_byte} in gram/kwh (1byte model)<span>`
co2_page.innerHTML = `This page is ${page_size} bytes, the amount of CO2 is: <span>${emissions_swd_page_size.toFixed(6)} in gram/kwh (swd model)<span>`
google.innerHTML = `Are we '${domain}' hosting on green energy? <span>${result}<span>`