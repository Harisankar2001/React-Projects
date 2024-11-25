import { useState } from "react"

const QRCode = () => {
    const [img,setImg] = useState("")
    const [loading, setLoading] = useState(false);
    const [qrData, setQrData] = useState("https://geeksforgeeks.org")
    const [qrSize, setQrSize] = useState("150")
    console.log(useState(false))

    async function generateQR(){
        setLoading(true);

        try{
            const url = `https://api.qrserver.com/v1/create-qr-code/?size=${qrSize}x${qrSize}&data=${encodeURIComponent(qrData)}`;
            setImg(url);
        }catch(err){
            console.error("Error generating QR Code", err);
        }finally{
            setLoading(false);
        }
    }

    function downloadQR(name){
        fetch(img).then((response)=>response.blob())
        .then((blob)=>{
            const link = document.createElement("a");
            link.href=URL.createObjectURL(blob);
            link.download="qr.png";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }).catch((error)=>{
            console.error("Error downloading QR Code",error);
        })
    }
  return (
    <div className="app-container">
        <h1>QR CODE GENERATOR</h1>
        {loading && <p>Please Wait....</p>}
        {img && <img src={img} className="input-label"/>}
        <div>
            <label htmlFor="dataInput" className="input-label">
                Data for QR Code
            </label>
            <input type="text" value={qrData} id="datainput" placeholder="Enter the data for QR Code"/>
            <label htmlFor="dataInput" className="input-label" onChange={(e)=>setQrData(e.target.value)}>
                Image size (e.g., 150);
            </label>
            <input type="text" id="szieInput" value={qrSize} onChange={(e)=>setQrSize(e.target.value)} placeholder="Enter Image Size"/>
            <button className="generate-button" disabled={loading} onClick={generateQR}>Generate QR Code</button>
            <button className="download-button" onClick={downloadQR}>Download QR Code</button>
        </div>
        <p className="footer">Designed By Hari</p>
    </div>
  )
}

export default QRCode
