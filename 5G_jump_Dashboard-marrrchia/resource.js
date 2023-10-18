const AMFnode = document.getElementById("AMF_node");
const AMFCpuUsage = document.getElementById("AMF_cpu_usage");
const AMFMemoryUsage = document.getElementById("AMF_memory_usage");
const AMFLog = document.getElementById("AMF_Log");

const SMFnode = document.getElementById("SMF_node");
const SMFCpuUsage = document.getElementById("SMF_cpu_usage");
const SMFMemoryUsage = document.getElementById("SMF_memory_usage");
const SMFLog = document.getElementById("SMF_Log");

const NSSFnode = document.getElementById("NSSF_node");
const NSSFCpuUsage = document.getElementById("NSSF_cpu_usage");
const NSSFMemoryUsage = document.getElementById("NSSF_memory_usage");
const NSSFLog = document.getElementById("NSSF_Log");

const UPFnode = document.getElementById("UPF_node");
const UPFCpuUsage = document.getElementById("UPF_cpu_usage");
const UPFMemoryUsage = document.getElementById("UPF_memory_usage");
const UPFLog = document.getElementById("UPF_Log");

const AUSFnode = document.getElementById("AUSF_node");
const AUSFCpuUsage = document.getElementById("AUSF_cpu_usage");
const AUSFMemoryUsage = document.getElementById("AUSF_memory_usage");
const AUSFLog = document.getElementById("AUSF_Log");

const PCFnode = document.getElementById("PCF_node");
const PCFCpuUsage = document.getElementById("PCF_cpu_usage");
const PCFMemoryUsage = document.getElementById("PCF_memory_usage");
const PCFLog = document.getElementById("PCF_Log");

const UDMnode = document.getElementById("UDM_node");
const UDMCpuUsage = document.getElementById("UDM_cpu_usage");
const UDMMemoryUsage = document.getElementById("UDM_memory_usage");
const UDMLog = document.getElementById("UDM_Log");

const NRFnode = document.getElementById("NRF_node");
const NRFCpuUsage = document.getElementById("NRF_cpu_usage");
const NRFMemoryUsage = document.getElementById("NRF_memory_usage");
const NRFLog = document.getElementById("NRF_Log");

const RU_CPU = document.getElementById("RU_CPU");
const RU_RAM = document.getElementById("RU_RAM");
const RU_Disk = document.getElementById("RU_Disk");

initial();
function initial() {
    fetch("http://140.118.121.109:5678/nfs/resource", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            list(source);
        });
}

setInterval(function () {
    fetch("http://140.118.121.109:5678/nfs/resource", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            list(source);
        });
}, 5000);

function list(source) {
    // console.log(source[0].s_nf);
    for (i = 0; i <= 10; i++) {
        let s_nf = source[i].s_nf;
        let s_source = source[i];
        switch (s_nf) {
            case "webui":
                // console.log(s_nf);
                break;
            case "amf":
                AMFnode.innerHTML = s_source.s_containerid;
                AMFCpuUsage.innerHTML =
                    '</span><span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                AMFMemoryUsage.innerHTML =
                    '<span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // AMFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var amflogs = FetchAMFLog();
                // console.log(amflogs);
                AMFLog.innerHTML = "1. " + amflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    AMFLog.innerHTML += "<br>" + (k + 1) + ". " + amflogs[k].s_log;
                }

                break;
            case "smf":
                // console.log(s_nf);
                SMFnode.innerHTML = s_source.s_containerid;
                SMFCpuUsage.innerHTML =
                    '</span><span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                SMFMemoryUsage.innerHTML =
                    '<span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // SMFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var smflogs = FetchSMFLog();
                // console.log(amflogs);
                SMFLog.innerHTML = "1. " + smflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    if (smflogs[k] == null) {
                        break;
                    }
                    SMFLog.innerHTML += "<br>" + (k + 1) + ". " + smflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "nssf":
                NSSFnode.innerHTML = s_source.s_containerid;
                NSSFCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                NSSFMemoryUsage.innerHTML =
                '<span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // NSSFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var nssflogs = FetchNSSFLog();
                // console.log(amflogs);
                NSSFLog.innerHTML = "1. " + nssflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    if (nssflogs[k] == null) {
                        break;
                    }
                    NSSFLog.innerHTML += "<br>" + (k + 1) + ". " + nssflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "pcf":
                PCFnode.innerHTML = s_source.s_containerid;
                PCFCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                PCFMemoryUsage.innerHTML =
                    '</span><span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // PCFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var pcflogs = FetchPCFLog();
                // console.log(amflogs);
                PCFLog.innerHTML = "1. " + pcflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    if (pcflogs[k] == null) {
                        break;
                    }
                    PCFLog.innerHTML += "<br>" + (k + 1) + ". " + pcflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "nrf":
                NRFnode.innerHTML = s_source.s_containerid;
                NRFCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                NRFMemoryUsage.innerHTML =
                    '</span><span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // NRFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var nrflogs = FetchNRFLog();
                // console.log(amflogs);
                NRFLog.innerHTML = "1. " + nrflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    NRFLog.innerHTML += "<br>" + (k + 1) + ". " + nrflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "ausf":
                AUSFnode.innerHTML = s_source.s_containerid;
                AUSFCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                AUSFMemoryUsage.innerHTML =
                   '</span><span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // AUSFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var ausflogs = FetchAUSFLog();
                // console.log(ausflogs[0].s_log);
                // console.log(amflogs);
                AUSFLog.innerHTML = "1. " + ausflogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    AUSFLog.innerHTML += "<br>" + (k + 1) + ". " + ausflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "udm":
                UDMnode.innerHTML = s_source.s_containerid;
                UDMCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                UDMMemoryUsage.innerHTML =
                    '</span><span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                //UDMNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var udmlogs = FetchAUSFLog();
                // console.log(amflogs);
                UDMLog.innerHTML = "1. " + udmlogs[0].s_log;
                for (k = 1; k <= 19; k++) {
                    UDMLog.innerHTML += "<br>" + (k + 1) + ". " + udmlogs[k].s_log;
                }
                // console.log(s_nf);
                break;
            case "VM":
                RU_CPU.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 32 CPU(s)</span>";
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                RU_RAM.innerHTML =
                '</span><span class="label">' +
                s_source.s_memory +
                " ( " +
                arrayOfStrings[0] +
                " of " +
                arrayOfStrings[1] +
                " )</span>";


                    
                break;
            case "udr":
                // console.log(s_nf);
                break;
            case "upf":
                UPFnode.innerHTML = s_source.s_containerid;
                UPFCpuUsage.innerHTML =
                    '<span class="label">' + s_source.s_cpu + " of 4 CPU(s)</span>";
                // console.log(s_source.s_memorylimit);
                var memorylimit = s_source.s_memorylimit;
                var re = "/";
                var arrayOfStrings = memorylimit.split(re);
                UPFMemoryUsage.innerHTML =
                    '</span><span class="label">' +
                    s_source.s_memory +
                    " ( " +
                    arrayOfStrings[1] +
                    " of " +
                    arrayOfStrings[0] +
                    " )</span>";
                // UPFNetworkUsage.innerHTML = '<span class="progress" data-value="40%"></span><span class="label">50% (4.0 GiB of 8.0 GiB)</span>';
                var upflogs = FetchUPFLog();
                // console.log(upflogs);
                UPFLog.innerHTML = "1. " + upflogs[1].s_log;
                for (k = 1; k <= 19; k++) {
                    if (pcflogs[k] == null) {
                        break;
                    }
                    UPFLog.innerHTML += "<br>" + (k + 1) + ". " + upflogs[k].s_log;
                }
                // console.log(s_nf);
                break;
        }
    }
}

var amflogs;
var smflogs;
var nssflogs;
var upflogs;
var ausflogs;
var pcflogs;
var udmlogs;
var nrflogs;
function FetchAMFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=amf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            amflogs = source;
        });
    return amflogs;
}

function FetchSMFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=smf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            smflogs = source;
        });
    return smflogs;
}

function FetchNSSFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=nssf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            nssflogs = source;
            // console.log(nssflogs);
        });
    return nssflogs;
}

function FetchUPFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=upf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            upflogs = source;
            // console.log(upflogs);
        });
    return upflogs;
}

function FetchAUSFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=ausf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            ausflogs = source;
            // console.log(ausflogs);
        });
    return ausflogs;
}

function FetchPCFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=pcf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            pcflogs = source;
            // console.log(pcflogs);
        });
    return pcflogs;
}

function FetchUDMLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=udm", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            udmlogs = source;
            // console.log(udmlogs);
        });
    return udmlogs;
}

function FetchNRFLog() {
    fetch("http://140.118.121.109:5678/nfs/log?s_nf=nrf", {
        method: "GET",
        headers: {
            Accept: "application/json, text/plain",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            return response.json();
        })
        .then((source) => {
            nrflogs = source;
            // console.log(nrflogs);
        });
    return nrflogs;
}
