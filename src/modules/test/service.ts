import { Injectable } from '@nestjs/common';
import { createResData } from '../../utils/common';
import * as path from 'path';
import * as fs from 'fs';
import * as mineType from 'mime-types';

@Injectable()
export class TestServer {
  public async getHello() {
    return createResData('hello world');
  }

  public async testPost(data) {
    return createResData(data);
  }

  public async readFile() {
    const filePath = path.resolve('src/images');
    const files = await new Promise((resolve, reject) => {
      fs.readdir(filePath, (error, file) => {
        if (error) {
          reject(error);
          return;
        }
        if (file && file.length > 0) {
          const cacheFiles = fs.readdirSync('src/imagesBase64');
          if (cacheFiles.length > 0) {
            cacheFiles.forEach((item) => {
              const curPath = 'src/imagesBase64/' + item;
              fs.unlinkSync(curPath);
            });
          }
          file = file.map((item) => {
            const dataS = fs.readFileSync(filePath + '/' + item);
            const data = new Buffer(dataS).toString('base64');
            const base64 =
              'data:' +
              mineType.lookup(filePath + '/' + item) +
              ';base64,' +
              data;
            fs.writeFileSync(
              path.resolve(`src/imagesBase64/${Math.random()}.png`),
              base64,
            );
            return base64;
          });
          resolve(file);
        }
      });
    });
    return createResData(files);
  }
}
