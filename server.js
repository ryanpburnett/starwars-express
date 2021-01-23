const express = require('express')
const app = express()
const PORT = 3000

const characters = [
    {
        name: 'Yoda',
        role: 'Jedi Master',
        forcePoints: 100000,
        age: 900,
        avatar: 'https://static.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png/revision/latest/top-crop/width/360/height/450?cb=20150206140125',
        routeName: 'yoda',
    },
    {
        name: 'Luke',
        role: 'Jedi Master',
        forcePoints: 10000,
        age: 40,
        avatar: 'https://darksiderconfessions.files.wordpress.com/2020/02/lukeskywalkeredit02.png?w=900',
        routeName: 'lukeskywalker',
    },
    {
        name: 'Princess Leia',
        role: 'General Princess',
        forcePoints: 100,
        age: 40,
        avatar: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Princess_Leia%27s_characteristic_hairstyle.jpg',
        routeName: 'princessleia',
    }, 
]

app.get('/', (req, res) => {
    res.send('May the force be with you!')
})

// /api/characters - show all character data
app.get('/api/characters', (req, res) => {
    res.json(characters)
})
// /api/characters/:routeName
app.get('/api/characters/:routeName', (req, res) => {
    console.log(req.params)
    const targetCharacter = req.params.routeName
    const character = characters.find(character => {
        return character.routeName === targetCharacter
    })
    res.json(character)
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})