require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000


const githubData={
    "login": "kxprem29",
    "id": 147337576,
    "node_id": "U_kgDOCMgxaA",
    "avatar_url": "https://avatars.githubusercontent.com/u/147337576?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/kxprem29",
    "html_url": "https://github.com/kxprem29",
    "followers_url": "https://api.github.com/users/kxprem29/followers",
    "following_url": "https://api.github.com/users/kxprem29/following{/other_user}",
    "gists_url": "https://api.github.com/users/kxprem29/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/kxprem29/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/kxprem29/subscriptions",
    "organizations_url": "https://api.github.com/users/kxprem29/orgs",
    "repos_url": "https://api.github.com/users/kxprem29/repos",
    "events_url": "https://api.github.com/users/kxprem29/events{/privacy}",
    "received_events_url": "https://api.github.com/users/kxprem29/received_events",
    "type": "User",
    "site_admin": false,
    "name": "PREMANSHU KASHYAP",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "undergrad at nit-A",
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 4,
    "following": 3,
    "created_at": "2023-10-08T17:14:06Z",
    "updated_at": "2024-05-25T09:42:21Z"
  }
app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('<a href="https://x.com/amused_kxp">amused_kxp</a>')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Prem</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>Chai n Code</h2>")
})

app.get('/premanshu',(req,res)=>{
    res.send("<h2>Premanshu is a legend.</h2>")
})
app.get('/github',(req,res)=>{
    res.json(githubData);
})
app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})