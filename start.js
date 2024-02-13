import { spawn } from 'child_process';

export const runDevCommand = async (projectName) => {
  const install = spawn(`cd ${projectName} && code . && pnpm dev`, { shell: true });

  install.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  install.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  install.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });

  await new Promise((resolve) => {
    install.on('close', resolve);
  });
};
