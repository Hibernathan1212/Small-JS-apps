Tone.start()
const synth = new Tone.Synth().toDestination()


function playNote(note) {
    synth.triggerAttackRelease(`${note}4`, '8n')
    document.getElementById(note).style.background = '#33d6a6'
    setTimeout(() => {
        document.getElementById(note).style.background = 'white'
      }, 200)
}

document.onkeydown = function (e) {
    e = e || window.event
    var key = e.which || e.keyCode

    switch (key) {
        case 65:
            playNote('C')
            break
        case 87:    
            playNote('C#')
            break
        case 83:
            playNote('D')
            break
        case 69:
            playNote('D#')
            break
        case 68:
            playNote('E')
            break
        case 70:
            playNote('F')
            break
        case 84:
            playNote('F#')
            break
        case 71:
            playNote('G')
            break
        case 89:
            playNote('G#')
            break
        case 72:
            playNote('A')
            break
        case 85:
            playNote('A#')
            break
        case 74:
            playNote('B')
            break
        case 75:
            playNote('C')
            break
        default:
            break;
    }
}