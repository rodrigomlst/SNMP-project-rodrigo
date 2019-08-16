// TODO
const chartMemory = document.querySelector('#memory-chart')
const ctx = document.querySelector('#cpu-chart')
const elementoInfo = document.querySelector('#info')
const elementNetwork =document.querySelector('#network')
const elementCpu = document.querySelector('#cpu'  )
const elementoMemoria = document.querySelector('#memory')
fetch('data/cpu.json')
  .then(res => res.json())
  .then(json => carregaCpu(json))

fetch('data/info.json')
  .then(res => res.json())
  .then(json => carregaInfo(json))

  fetch('data/memory.json')
  .then(res => res.json())
  .then(json => carregaMemory(json))

  fetch('data/network.json')
  .then(res => res.json())
  .then(json => carregaNetwork(json))

  
function carregaInfo(card){

        const view= `<tr>
        <td colspan="3">
          ${card.cpu}
        </td>
      </tr>
      <tr>
        <td>CPU</td>
        <td class="w-75 align-middle">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: ${card.usage.cpu}%;"
            ></div>
          </div>
        </td>
        <td>${card.usage.cpu}%</td>
      </tr>
      <tr>
        <td>MEM</td>
        <td class="w-75 align-middle">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: ${card.usage.mem}%;"
            ></div>
          </div>
        </td>
        <td>${card.usage.mem}%</td>
      </tr>
      <tr>
        <td>SWAP</td>
        <td class="w-75 align-middle">
          <div class="progress">
            <div
              class="progress-bar"
              role="progressbar"
              aria-valuenow="0"
              aria-valuemin="0"
              aria-valuemax="100"
              style="width: ${card.usage.swap}%;"
            ></div>
          </div>
        </td>
        <td>${card.usage.swap}%</td>
      </tr>`
        elementoInfo.insertAdjacentHTML('beforeend', view)}

function carregaNetwork(card){
    view =`
        <tr>
          <td>${card[0].network}</td>
          <td>${card[0].rx}</td>
          <td>${card[0].tx}</td>
        </tr>
        <tr>
        <td>${card[1].network}</td>
        <td>${card[1].rx}</td>
        <td>${card[1].tx}</td>
        </tr>
        <tr>
        <td>${card[2].network}</td>
        <td>${card[2].rx}</td>
        <td>${card[2].tx}</td>
        </tr>
        <tr>
        <td>${card[3].network}</td>
        <td>${card[3].rx}</td>
        <td>${card[3].tx}</td>
        </tr>
      </tbody>`
elementNetwork.insertAdjacentHTML('beforeend', view)}

function carregaCpu(card){
    view= `<tr>
            <td>CPU</td>
            <td>${card.cpu}</td>
            <td>nice:</td>
            <td>${card.nice}</td>
            <td>ctx_sw:</td>
            <td>647</td>
          </tr>
          <tr>
            <td>user:</td>
            <td>7.7%</td>
            <td>irq:</td>
            <td>0.0%</td>
            <td>inter:</td>
            <td>312</td>
          </tr>
          <tr>
            <td>system:</td>
            <td>4.8%</td>
            <td>iowait:</td>
            <td>0.0%</td>
            <td>sw_int:</td>
            <td>193</td>
          </tr>
          <tr>
            <td>idle:</td>
            <td>87.5%</td>
            <td>steal:</td>
            <td>0.0%</td>
          </tr>`
    elementCpu.insertAdjacentHTML('afterbegin', view)
    var str1 = card.user
    var str2 = card.system
    var str3 = card.idle
    var res1 = str1.replace("%", "")
    var res2 = str2.replace("%", "")
    var res3 = str3.replace("%", "")
    
    var chart = new Chart (ctx, {
     // The type of chart we want to create
        type: 'pie',
     // The data for our dataset
        data: {
            labels: ['user', 'sistem', 'idle'],
            datasets: [{
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'],
                borderColor:  [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)'],
                data: [res1,res2, res3]
            }]
        },

            // Configuration options go here
            options: {}
    });
}
function carregaMemory(card){
    const view= `<tr>
          <td>MEM</td>
          <td>25.7%</td>
          <td>active:</td>
          <td>373M</td>
        </tr>
        <tr>
          <td>total:</td>
          <td>1.95G</td>
          <td>inactive:</td>
          <td>1.32G</td>
        </tr>
        <tr>
          <td>used:</td>
          <td>514M</td>
          <td>buffers:</td>
          <td>31.6M</td>
        </tr>
        <tr>
          <td>free:</td>
          <td>1.45G</td>
          <td>cached:</td>
          <td>1.46G</td>
        </tr>`
    elementoMemoria.insertAdjacentHTML('afterbegin', view)
    var str1 = card.used
    var str2 = card.free
    var res1 = str1.replace("G", "")
    var res2 = str2.replace("G", "")
  
    var chart = new Chart(chartMemory, {
        // The type of chart we want to create
        type: 'pie',
        // The data for our dataset
        data: {
            labels: ['used', 'free'],
            datasets: [{
               backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'],
               borderColor:  [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'],
               data: [res1,res2]
           }]
       },
       // Configuration options go here
       options: {}
    });
 }