import { spawn } from 'child_process';
import path from 'path';
import fs from 'fs';
import ffmpegPath from 'ffmpeg-static';

const publicVideosDir = path.resolve('public/videos');
const backupVideo = path.join(publicVideosDir, 'zelenz_hero_video_orig.mp4');
const outputMp4 = path.join(publicVideosDir, 'zelenz_hero_video.mp4');
const outputPoster = path.join(publicVideosDir, 'zelenz_hero_poster.jpg');
const outputPosterWebp = path.join(publicVideosDir, 'zelenz_hero_poster.webp');

async function runCommand(cmd, args) {
  return new Promise((resolve, reject) => {
    console.log(`Running ffmpeg...`);
    const proc = spawn(cmd, args, { stdio: 'inherit' });
    proc.on('close', (code) => {
      if (code === 0) resolve();
      else reject(new Error(`Command failed with code ${code}`));
    });
  });
}

async function main() {
  if (!fs.existsSync(backupVideo)) {
    console.error('Backup video zelenz_hero_video_orig.mp4 not found!');
    process.exit(1);
  }

  // 1. Poster Image (WebP & JPG)
  console.log('Generating video poster frame...');
  const tempPoster = path.join(publicVideosDir, 'temp_poster.png');
  await runCommand(ffmpegPath, [
    '-y',
    '-ss', '00:00:00.500',
    '-i', backupVideo,
    '-vframes', '1',
    '-vf', 'scale=1280:-2',
    tempPoster
  ]);

  await runCommand(ffmpegPath, [
    '-y',
    '-i', tempPoster,
    '-c:v', 'libwebp',
    '-quality', '75',
    outputPosterWebp
  ]);

  await runCommand(ffmpegPath, [
    '-y',
    '-i', tempPoster,
    '-q:v', '4',
    outputPoster
  ]);

  if (fs.existsSync(tempPoster)) fs.unlinkSync(tempPoster);

  // 2. High performance background video stream (Target ~2.5 MB)
  console.log('Compressing hero background video...');
  const tempMp4 = path.join(publicVideosDir, 'temp_hero_fast.mp4');
  await runCommand(ffmpegPath, [
    '-y',
    '-i', backupVideo,
    '-vf', 'scale=1280:-2,fps=24',
    '-c:v', 'libx264',
    '-crf', '27',
    '-preset', 'fast',
    '-an', // remove audio track completely
    '-movflags', '+faststart', // Web streaming ready
    tempMp4
  ]);

  if (fs.existsSync(outputMp4)) fs.unlinkSync(outputMp4);
  fs.renameSync(tempMp4, outputMp4);

  console.log('--- Video Optimization Complete ---');
  console.log(`Original Video: ${(fs.statSync(backupVideo).size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Optimized Video: ${(fs.statSync(outputMp4).size / (1024 * 1024)).toFixed(2)} MB`);
  console.log(`Poster WebP: ${(fs.statSync(outputPosterWebp).size / 1024).toFixed(2)} KB`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
