import path from 'path';
import {mkdir, copyFile, cp} from 'fs/promises';

// create a deploy folder
// copy . to deploy
// copy ./backend to deploy
// copy ./frontend/dist to deploy
try {
    await mkdir('deploy');

    // await chmod('deploy', 666 );

    await copyFile('package.json', 'deploy/package.json');

    await mkdir('deploy/backend');

    await cp('backend', 'deploy/backend', {recursive: true});

    await cp('node_modules', 'deploy/node_modules', {recursive: true});

    await cp('frontend/dist', 'deploy/frontend/dist', {recursive: true});


    // await chmod('deploy/backend', 666 );
    // await copyFile('backend', 'deploy/backend');

    // await copyFile ('frontend/dist', 'deploy/frontend/dist');
    
} catch (err){
    console.error(err);
}