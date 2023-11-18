import fs  from 'fs';

export async function createPastUploads(diretorio: string) {
  if (!fs.existsSync(diretorio)){
    console.log(diretorio)
    fs.mkdirSync(diretorio);
    console.log(`Diretório ${diretorio} criado com sucesso!`);
  }
}
