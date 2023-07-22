import { co2 } from '/@tgwf/co2/src/index.js'
import { hosting } from  '/@tgwf/co2/src/index.js'
import { averageIntensity } from '/@tgwf/co2/src/index.js'
const { data, type, year } = averageIntensity;

var co2_element = document.querySelector('#co2_element');
var co2_element2 = document.querySelector('#co2_element2');
var co2_page = document.querySelector('#co2_page');
var hosting_green = document.querySelector('#hosting');
var average_nld = document.querySelector('#average');

const swd = new co2({model: "swd"})
const oneByte = new co2({model: "1byte"})

const emissions_swd_per_byte = swd.perByte(1000000000, true)
const emissions_1byte_per_byte = oneByte.perByte(1000000000, true)
co2_element.innerHTML = `CO2 emissions of 1GB is: <span>${emissions_swd_per_byte} </span>gCO2 per kWh (swd model)`
co2_element2.innerHTML = `CO2 emissions of 1GB is: <span>${emissions_1byte_per_byte} </span>gCO2 per kWh (1byte model)`

const page_size = (document.documentElement.outerHTML.length)
const emissions_swd_page_size = swd.perByte(page_size, true)
co2_page.innerHTML = `This page is ${page_size} bytes, the amount of CO2 is: <span>${emissions_swd_page_size.toFixed(6)} </span>gCO2 per kWh (swd model)`

const domain = window.location.hostname
const hosting_domain = hosting.check(domain)
let result = await hosting_domain;
hosting_green.innerHTML = `Are we '${domain}' hosting on green energy? <span>${result}</span>`

const { NLD } = data;
average_nld.innerHTML = `The average CO2 emissions of the NLD is <span>${ NLD }</span> gCO2 per kWh`