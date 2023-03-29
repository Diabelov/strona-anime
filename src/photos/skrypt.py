from PIL import Image
import os

folder_path = "H:\strona_anime_V2\strona\src\photos"

for filename in os.listdir(folder_path):
    if filename.endswith(".jpg") or filename.endswith(".png"): 
        image_path = os.path.join(folder_path, filename)
        img = Image.open(image_path)

        resized_img = img.resize((189, 267))


        resized_img.save(image_path)