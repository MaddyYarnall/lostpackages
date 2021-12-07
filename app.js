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
