import {mkdir, copyFile, cp} from 'fs/promises';

try {
    await mkdir('deploy');

    await copyFile('package.json', 'deploy/package.json');

    await mkdir('deploy/backend');

    await cp('backend', 'deploy/backend', {recursive: true});

    await cp('node_modules', 'deploy/node_modules', {recursive: true});

    await cp('frontend/dist', 'deploy/frontend/dist', {recursive: true});
    
} catch (err){
    console.error(err);
}