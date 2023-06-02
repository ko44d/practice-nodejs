//const fs = require('fs');
//
//const writeFile = (i) => {
//    if(i >= 100) {
//        return;
//    }
//    const text = `write: ${i}`;
//
//    fs.writeFile('./data.txt', text, (err) => {
//        if (err) {
//            console.error(err);
//            return;
//        }
//        console.log(text);
//        writeFile(i + 1);
//    })
//}
//
//writeFile(0);


//const promiseA = new Promise((resolve, reject) => {
//    resolve('return data');
//})
//
//promiseA.then((data) => console.log(data));
//
//const promiseB = new Promise((resolve, reject) => {
//    reject(new Error('return error'));
//})
//
//promiseB.catch((err) => console.error(err));
//
//console.log('done');

//const promiseX = (x) => {
//  return new Promise((resolve, reject) => {
//      if (typeof x === 'number') {
//          resolve(x);
//      } else {
//          reject(new Error('return error'));
//      }
//  })
//};
//
//const logAndDouble = (num) => {
//    console.log(num);
//    return num * 2;
//};
//
//promiseX(1)
//    .then((data) => logAndDouble(data))
//    .then((data) => logAndDouble(data))
//    .catch(console.log(data))

//const {readFile, writeFile, chmod} = require(`fs`);
//
//const readFileAsync = (path) => {
//    return new Promise((resolve, reject) => {
//        readFile(path, (err, data) => {
//            if(err) {
//                reject(err);
//                return;
//            }
//            resolve(data);
//        });
//    });
//};
//
//const writeFileAsync = (path, data) => {
//    return new Promise((resolve, reject) => {
//        writeFile(path, data, (err)=>{
//            if (err) {
//                reject(err);
//                return;
//            }
//            resolve();
//        });
//    });
//};
//
//const chmodAsync = (path, mode) => {
//    return new Promise((resolve, reject) => {
//        chmod(backupFile, mode, (err) => {
//            if (err) {
//                reject(err);
//                return;
//            }
//            resolve();
//        });
//    });
//};
//
//const backupFile = `${__filename}-${Date.now()}`;
//
//readFileAsync(__filename)
//    .then((data) => {
//    return writeFileAsync(backupFile, data);
//    })
//    .then(() => {
//        return chmodAsync(backupFile, 0o400);
//    })
//    .catch((err) => {
//        console.error(err);
//    })

//const { promisify } = require('util');
//const { readFile, writeFile, chmod } = require('fs');
//
//const readFileAsync = promisify(readFile);
//const writeFileAsync = promisify(writeFile);
//const chmodAsync = promisify(chmod);
//
//const backupFile = `${__filename}-${Date.now()}`;
//readFileAsync(__filename)
//    .then((data) => {
//    return writeFileAsync(backupFile, data);
//    })
//    .then(() => {
//        return chmodAsync(backupFile, 0o400);
//    })
//    .catch((err) => {
//        console.error(err);
//    })

//const {readFile, writeFile, chmod} = require('fs/promises');

//const main = async() => {
//    const backupFile = `${__filename}-${Date.now()}`;
//
//    const data = await readFile(__filename);
//
//    await writeFile(backupFile, data);
//
//    await chmod(backupFile, 0o004);
//
//    return 'done';
//}
//
//main().then((data) => {
//    console.log(data);
//}).catch((err)=>{
//    console.log(err);
//})

//const { request } = require('undici');
//const main = async() => {
//    const resArray = await Promise.all([
//        request('https://www.yahoo.co.jp'),
//        request('https://shopping.yahoo.co.jp'),
//        request('https://auctions.yahoo.co.jp'),
//    ]);
//
//    for (const res of resArray) {
//        const body = await res.body.text();
//        const title = body.match(/<title>(.*)<\/title>/g);
//        console.log(title);
//    }
//
//    return 'done';
//}
//
//main()
//    .then((data) => console.log(data))
//    .catch((err)=>console.error(err))