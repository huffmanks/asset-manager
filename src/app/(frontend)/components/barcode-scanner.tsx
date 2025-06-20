"use client";

import { useRef } from "react";

import { useField } from "@payloadcms/ui";
import { BrowserMultiFormatReader } from "@zxing/browser";

export default function BarcodeScanner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { value, setValue } = useField<{ type: string; data: string; timestamp: string }>();

  const codeReader = useRef(new BrowserMultiFormatReader());

  async function handleStartScan() {
    let stopStream: () => void;

    try {
      const devices = await BrowserMultiFormatReader.listVideoInputDevices();
      const selectedDeviceId = devices?.[0]?.deviceId;

      if (!selectedDeviceId || !videoRef.current) return;

      const controls = await codeReader.current.decodeFromVideoDevice(
        selectedDeviceId,
        videoRef.current,
        (result) => {
          if (result) {
            const payload = {
              type: result.getBarcodeFormat(),
              data: result.getText(),
              timestamp: new Date().toISOString(),
            };
            console.log("Scanned result:", payload);
            setValue(payload);
            controls.stop();
          }
        }
      );

      stopStream = controls.stop;
    } catch (err) {
      console.error("Scanner error:", err);
    }
  }
  return (
    <div>
      <button
        type="button"
        onClick={handleStartScan}>
        Start Scanning
      </button>
      <video
        ref={videoRef}
        id="barcode-video"
        className="w-72 border border-gray-400"
        width="288"
      />
      {value && (
        <div className="mt-4">
          <p>
            <strong>Type:</strong> {value.type}
          </p>
          <p>
            <strong>Data:</strong> {value.data}
          </p>
          <p>
            <strong>Scanned:</strong> {value.timestamp}
          </p>
        </div>
      )}
    </div>
  );
}
