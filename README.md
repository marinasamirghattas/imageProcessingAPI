# imageProcessingAPI

- Resize any jpg images with desired width and height as parameters in your current URL.
- If an image with the width and height chosen has already been created, the server responds with the existing image and will not process it again.
- used technologies node.js,express,ts,jasmine for testing and sharp .


## Content

- the project has two routers :
    - /image/:imageName  handles getting specific image from local (in => /assets/fullSize) 
       - add image name instead of (:imageName) => /image/cat
    -  /image/:imageName/:imageHeight/:imageWidth   handles resizing specific image and creating a resized copy (in => /assets/resized).
       - add the image name,height and width instead of (:imageName),(:imageHeight) and (:imageWidth) =>/image/cat/600/500
       
       
## install and run
 - clone the project
 - install :
 ```node
 npm i
 ```
 - build :
 ```node
 npm run build
 ```
 - test :
 ```node
 npm run test
 ```
 - lint :
 ```node
 npm run lint
 ```
 - prettier :
 ```node
 npm run prettier
 ```
 - start :
 ```node
 npm run start
 ```
 
