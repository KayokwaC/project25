import QRCode from "react-qr-code";
import { useState } from "react";
export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  const [input, setInput] = useState("");

  function handleGenerateQrCode() {
    setQrCode(input);
    setInput("");
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter text to generate QR code"
          name="qr-code"
          value={input}
        />
        <button disabled={input?.trim() !== ""?false:true} onClick={handleGenerateQrCode}>
          Generate QR Code
        </button>
      </div>
      <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="white" />
    </div>
  );
}
