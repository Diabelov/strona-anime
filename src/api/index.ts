// zdjecia w E:/images
import express, { Request, Response, response } from "express";
import cors from "cors";
import { config } from "dotenv";
import axios from "axios";
import fs from 'fs'
config();

const port = process.env.PORT || 8080;

const app = express();

app.use(
  cors()
);

app.get("/api/v1/picture/anime/:title", async (req: Request, res: Response) => {
    // https://api.jikan.moe/v4/anime?q=naruto
    // https://api.jikan.moe/v4/anime/${id}/pictures

    let { title } = req.params;

    if (!title) return res.send("No title provided");

    title = decodeURI(title)

    try {
        const animeSearch = (await axios(`https://api.jikan.moe/v4/anime?q=${title}`)).data

        const id = animeSearch.data[0].mal_id;

        const animePictures = (await axios(`https://api.jikan.moe/v4/anime/${id}/pictures`)).data.data[0].jpg;

        try {
            if (!fs.existsSync(`E:/images/${title}`)) {
                for (let link in animePictures) {
                    let value = animePictures[link]
    
                    const response = await axios(value, {
                        responseType: "stream"
                    })
    
                    if (!response.data) return res.status(404).send({
                        success: false,
                        data: {
                            message: "No images found with the specified anime title",
                            code: 404
                        }
                    });
    
                    if (!fs.existsSync(`E:/images/${title}`)) fs.mkdirSync(`E:/images/${title}`);
    
                    response.data.pipe(fs.createWriteStream(`E:/images/${title}/${value.split("/")[(value.split("/")).length - 1]}`));
                }
            }
    
            const files = fs.readdirSync(`E:/images/${title}`);
            const names = [];
    
            for (let name in files) names.push(files[name]);

            res.send({
                success: true,
                data: {
                    message: "Images found with the specified anime title",
                    names: names,
                    code: 200
                }
            })
        } catch (err) {
            console.error(err);
            return res.status(500).send({
                success: false,
                data: {
                    message: "Server error",
                    code: 500
                }
            })
        }
    } catch (err) {
        return res.status(404).send({
            success: false,
            data: {
                message: "No anime found with that title",
                code: 400
            }
        });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

process.on("uncaughtException", (e: Error) => {
    console.error(e);
    process.exit(1);
})
