"use client";

import { toast } from "sonner";

let audioCtx: AudioContext | null = null;
let noiseNode: AudioBufferSourceNode | null = null;
let gainNode: GainNode | null = null;
let isNoisePlaying = false;

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === "suspended") {
    audioCtx.resume();
  }
  return audioCtx;
}

export function startWhiteNoise(volume = 0.04) {
  if (isNoisePlaying) return;

  try {
    const ctx = getAudioContext();
    const bufferSize = ctx.sampleRate * 2;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);

    let b0 = 0,
      b1 = 0,
      b2 = 0,
      b3 = 0,
      b4 = 0,
      b5 = 0,
      b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.969 * b2 + white * 0.153852;
      b3 = 0.8665 * b3 + white * 0.3104856;
      b4 = 0.55 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.016898;
      data[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362;
      data[i] *= 0.11;
      b6 = white * 0.115926;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = buffer;
    noiseSource.loop = true;

    gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(volume, ctx.currentTime);

    noiseSource.connect(gainNode);
    gainNode.connect(ctx.destination);

    noiseSource.start();
    noiseNode = noiseSource;
    isNoisePlaying = true;
  } catch {
    toast.error("화이트 노이즈 오디오 생성에 실패했습니다.");
  }
}

export function stopWhiteNoise() {
  if (!isNoisePlaying) return;

  if (gainNode && audioCtx && noiseNode) {
    const currentGain = gainNode;
    const currentSource = noiseNode;

    currentGain.gain.exponentialRampToValueAtTime(
      0.0001,
      audioCtx.currentTime + 0.2,
    );
    setTimeout(() => {
      try {
        currentSource.stop();
        currentSource.disconnect();
      } catch {}
    }, 200);
  }

  noiseNode = null;
  gainNode = null;
  isNoisePlaying = false;
}

export function playCompletionSound() {
  try {
    const ctx = getAudioContext();
    const now = ctx.currentTime;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = "sine";
    osc.frequency.setValueAtTime(523.25, now);
    osc.frequency.setValueAtTime(659.25, now + 0.15);
    osc.frequency.setValueAtTime(783.99, now + 0.3);

    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now);
    osc.stop(now + 0.8);
  } catch {
    toast.error("알림음 재생에 실패했습니다.");
  }
}

export function triggerNotification(title: string, body: string) {
  if (typeof window === "undefined" || !("Notification" in window)) return;

  if (Notification.permission === "granted") {
    try {
      const notification = new Notification(title, {
        body,
        icon: "/favicon.ico",
      });
      setTimeout(() => notification.close(), 5000);
    } catch (e) {
      console.error("Notification trigger error:", e);
    }
  }
}

export async function requestNotificationPermission(): Promise<boolean> {
  if (typeof window === "undefined" || !("Notification" in window))
    return false;
  const permission = await Notification.requestPermission();
  return permission === "granted";
}
