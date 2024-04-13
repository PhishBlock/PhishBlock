import cossim from "./cossim.js"
import { readpixels } from "./loadimage.js";
import ssim from "ssim.js";
import { Canvas, createImageData } from "canvas";
import { Image } from "canvas";
import pixelmatch from "pixelmatch";

import { Blob } from "buffer";
globalThis.Blob = Blob;

/*
TODO

*1. Фетч изображений - fetch
2. Установка локально - fs
3. Загрузка матрицы - readpixels
*4. Сравнение - ssim | pixelmatch | other...
5. Удаление установленных изображений - fs

*/


(async () => {
    var img1 = new Image();
    var mat;
    img1.src = "http://localhost:8000/img1.gif";
    console.log(img1.complete);
    console.log(img1.height);
    console.log(img1.width);
    if (img1.complete) {
        var canvas = new Canvas();
        var ctx = canvas.getContext("2d");
        console.log('1');
        console.log(img1.height);
        console.log(img1.width);
        ctx.drawImage(img1, 0, 0, img1.width, img1.height);
        mat = ctx.getImageData(0, 0, img1.width, img1.height);
        console.log(mat.width);
        // let img2 = readpixels("https://www.google.com/s2/favicons?domain=apple.com", 16);
        // img1 = new Uint8Array(await img1.arrayBuffer());
        // img1 = await img1.text()

        // let img2 = await fetch('http://localhost:8000/img2.gif');
        // img2 = new Uint8Array(await img2.arrayBuffer());
        // img2 = await img2.text()
        console.log("FETCHED");
        console.log(pixelmatch(im1g, img1))
        console.log(ssim.ssim(mat, mat));
    } else {
        img1.onload = () => {
            var canvas = new Canvas();
            var ctx = canvas.getContext("2d");
            console.log('2');
            ctx.drawImage(img1, 0, 0, 32, 32);
            mat = ctx.getImageData(0, 0, 32, 32);
            console.log(mat.width);
            // let img2 = readpixels("https://www.google.com/s2/favicons?domain=apple.com", 16);
            // img1 = new Uint8Array(await img1.arrayBuffer());
            // img1 = await img1.text()

            // let img2 = await fetch('http://localhost:8000/img2.gif');
            // img2 = new Uint8Array(await img2.arrayBuffer());
            // img2 = await img2.text()
            console.log("FETCHED");
            console.log(pixelmatch(im1g, img1))
            console.log(ssim.ssim(mat, mat));
        };
    }
})()
