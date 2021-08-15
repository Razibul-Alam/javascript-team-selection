const players=[
    {id:1,name:'Tamim',salary:40000, position:'batsman',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:2,name:'Shakib',salary:50000, position:'All-rounder',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:3,name:'Musfiq',salary:40000, position:'batsman',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:4,name:'Mahmud',salary:40000, position:'bowler',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:5,name:'Mostafiz',salary:40000, position:'All-Rounder',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:6,name:'Taskin',salary:30000, position:'bowler',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
    {id:7,name:'Afif',salary:30000, position:'batsman',img:'https://th.bing.com/th/id/R.30f3c9c44cce7fe2e0064ea301ae4be5?rik=%2bfpqY56sliOrIA&pid=ImgRaw&r=0'},
]

const playerContainer=document.getElementById('player-container')

players.map(player=>{
    const{name,salary,img,id}=player;
    const playerDiv=document.createElement('div');
    playerDiv.classList.add('col-lg-4')
    playerDiv.innerHTML=`
    <div class="card text-center" style="width: 18rem;">
  <img src="${img}" class="card-img-top" alt="...">
  <h4>${name}</h4>
  <div class="card-body">
    <p class="card-text">${salary}</p>
    <button onclick={selectedPlayer(${id})} id="btn">Select</button>
  </div>
</div>`
    
    playerContainer.appendChild(playerDiv)
        
    
})
const selectedPlayers=[]
let index=1
let sum=0
const selectedPlayer=(id)=>{
const allPlayers=players.filter(player=>player.id==id)
const singlePlayer=allPlayers[0]
const {name,salary,position}=singlePlayer
selectedPlayers.push(singlePlayer)
const selectedPlayersNumber=document.getElementById('selected-player').innerText=`${selectedPlayers.length}`
const tableBody=document.getElementById('table-body')
  const tr=document.createElement('tr')
  tr.innerHTML=`
  <th scope="row">${index++}</th>
      <td>${name}</td>
      <td>${salary}</td>
      <td>${position}</td>
`

  tableBody.appendChild(tr)
  const totalCost=document.getElementById('total-cost')
 const totalSum=allPlayers.map(player=>parseInt(player.salary)+sum)
 sum=totalSum[0]
 totalCost.innerText=`${sum}`
 const table=document.getElementById('table')
  if (sum>0) {
    table.style.display="block"
  }
}


