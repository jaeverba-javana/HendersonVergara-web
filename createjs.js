import fs from "node:fs/promises";
import sharp from "sharp";
import path from "node:path";
import {getRawAsset} from "node:sea";

let js = []
let directoryPath = "./public/galery"

let resddirResult = await fs.readdir(directoryPath)

/**
 * Reads the metadata of an image to determine its orientation based on its dimensions.
 *
 * @param {string} imagePath - The path to the image file to be analyzed.
 * @return {Promise<boolean>} A promise that resolves to `true` if the image is in landscape orientation
 * (width greater than height), or `false` otherwise.
 */
async function isOrientationHorizontal(imagePath) {
    console.log(imagePath)

    let s = sharp(imagePath)

    let metadata = await s.metadata()
    // s.metadata()
        // .then(metadata => {
        //     console.log(metadata.width)
        //     console.log(metadata.height)
            return (metadata.width > metadata.height)
        // })
        // .catch(err => {
        //     console.error("error")
        // })


}

resddirResult.forEach(async (imagePath, index, arr) => {
    let orientation = await isOrientationHorizontal(path.join(directoryPath, imagePath))

    js.push({path: imagePath, orientation: orientation? "h":"v"})

    if(resddirResult.length === index+1)
        await fs.writeFile("src/galery.json", JSON.stringify(js), (err) => {})
})