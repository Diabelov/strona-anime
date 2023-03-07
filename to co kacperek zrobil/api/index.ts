import express, { Request, Response } from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: "*"
}))

app.use(express.json())

let users: any[] = [
    {
        username: "overflow odc1",
        link: "https://ebd.cda.pl/620x368/7176868bc"
    }, 
    {
        username: "overflow odc 5",
        link: "https://www.bing.com/ck/a?!&&p=f77448d649f0428aJmltdHM9MTY3NzcxNTIwMCZpZ3VpZD0zZDBmZjAyYi1lOGNhLTY3YWEtM2E2OC1lMjVmZTlkODY2OTgmaW5zaWQ9NTE3Ng&ptn=3&hsh=3&fclid=3d0ff02b-e8ca-67aa-3a68-e25fe9d86698&psq=overflow+cda&u=a1aHR0cHM6Ly93d3cuY2RhLnBsL3ZpZGVvLzEyNDM5ODc1Zjk&ntb=1"
    }
];

app.get("/api/get", (req: Request, res: Response) => {
    res.send({
        success: true,
        users: users
    })
})

app.post("/api/add", (req: Request, res: Response) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).send({
            success: false,
            message: "No data"
        })
    }

    const newUser = { username, password }

    users.push(newUser)

    res.send({
        success: true,
        message: "added",
        users: users
    })
})

app.get("/api/get/:username", (req: Request, res: Response) => {
    const username = req.params.username;

    if (!username) {
        return res.status(400).send({
            success: false,
            message: "No username"
        })  
    }

    let user: { username: string; password: string }[] = [];

    users.forEach((o, i) => {
        if(o.username.toLowerCase().includes(username.toLowerCase())) {
            user.push(users[i])
        }
    })

    if (!user) {
        return res.status(404).send({
            success: false,
            data: "no user"
        })
    }

    res.send({
        success: true,
        user: user
    })

})

app.listen(8080, () => {
    console.log("app listening on port 8080")
})