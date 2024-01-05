import { spawn } from 'child_process';

export const runInstallCommnad = async (projectName) => {
  const install = spawn('pnpm install', { cwd: projectName, shell: true });

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
}