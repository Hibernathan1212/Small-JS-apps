const ws = new Zdog.Illustration({
    element: '.hackclub',
    resize: 'fullscreen',
    dragRotate: true
})

new Zdog.Box({
    addTo: ws,
    width: 100,
    height: 100,
    color: '#ec3750',
    stroke: 20,
    translate: { z: -18 },
})

new Zdog.Box({
    addTo: ws,
    depth: 20,
    width: 20,
    height: 80,
    color: '#fff',
    translate: { z: 18, x: -20 },
})

new Zdog.Box({
    addTo: ws,
    depth: 20,
    width: 20,
    height: 40,
    color: '#fff',
    translate: { z: 18, y: 20, x: 20 },
})

new Zdog.Box({
    addTo: ws,
    depth: 20,
    width: 40,
    height: 20,
    color: '#fff',
    translate: { z: 18, x: 10 },
})

ws.updateRenderGraph()

function animateModel() {
    ws.rotate.y += 0.01
    ws.updateRenderGraph()
    requestAnimationFrame(animateModel)
}
  
animateModel()