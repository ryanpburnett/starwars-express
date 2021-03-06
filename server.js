const path = require('path')
const express = require('express')
const app = express()
const PORT = 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

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

/**
 * HTML ROUTES
 */
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/add', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/add.html'))
})

/**
 * API ROUTES
 */

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

app.post('/api/characters/add', (req, res) => {
    const newCharacter = req.body
    newCharacter.routeName = newCharacter.name.replace(/ /g, '').toLowerCase()
    characters.push(newCharacter)
    res.status(200).send()
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
