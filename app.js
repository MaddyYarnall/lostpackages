const packages = [
  {
heavy: true,
priority: false,
fragile: false,
to: 'Harrison',
trackingNumber: '1234kjs'
},
  {
  heavy: false,
  priority: true,
  fragile: true,
  to: 'Mark',
  trackingNumber: '1325sdk'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Mick',
  trackingNumber: 'jffd147'
},
{
  heavy: false,
  priority: false,
  fragile: false,
  to: 'Jake',
  trackingNumber: 'acdc145'
},
{
  heavy: true,
  priority: true,
  fragile: true,
  to: 'Brittany',
  trackingNumber: 'gsd481'
},
{
  heavy: false,
  priority: true,
  fragile: false,
  to: 'Jonsey',
  trackingNumber: '8081baz'
},
{
  heavy: true,
  priority: false,
  fragile: true,
  to: 'Justin',
  trackingNumber: 'suz2367'
}
]

function draw() {
  let template = ''
  for (let i = 0; i < packages.length; i++){
    let package = packages[i];
    template += `<li>${package.heavy}: ${package.priority}: ${package.fragile}: ${package.to}: ${package.trackingNumber}</li>`
  }
  document.getElementById('packages').innerHTML = template
}

draw()

function missingPackage(){
  let packageIndex = Math.floor(Math.random() * packages.length)
  return packages[packageIndex] 
}

// missingPackage()
console.log(missingPackage())


function filterHeavy(){
  let heavyPackage = packages.filter(package => package.heavy)
  let template = ''
  for (let i = 0; i < heavyPackage.length; i++){
    const package = heavyPackage[i];
    template += `<li>${package.heavy}</li>`
  }
  document.getElementById('packages'). innerHTML= template
  console.log('helloworld')
}

function filterPriority(){
  let priorityPackage = packages.filter(package => package.priority)
  let template = ''
  for(let i = 0; i < priorityPackage.length; i++){
    const package = priorityPackage[i];
    template += `<li>${package.priority}</li>`
  }
  document.getElementById('packages').innerHTML = template
}

function filterFragile(){
  let fragilePackage = packages.filter(package => package.fragile)
  let template = ''
  for(let i = 0; i < fragilePackage.length; i++){
    const package = fragilePackage[i];
    template += `<li>${package.fragile}</li>`
  }
  document.getElementById('packages').innerHTML = template
}

function filterPerson(){
  let personPackage = packages.filter(package => package.to)
  let template = ''
  for(let i = 0; i < personPackage.length; i++){
    const package = personPackage[i];
    template += `<li>${package.to}</li>`
  }
  document.getElementById('packages').innerHTML = template
}

function filterNumber(){
  let numberPackage = packages.filter(package => package.trackingNumber)
  let template = ''
  for(let i = 0; i < numberPackage.length; i++){
    const package = numberPackage[i];
    template += `<li>${package.trackingNumber}</li>`
  }
  document.getElementById('packages').innerHTML = template
}
