from fastapi import FastAPI, Form
from fastapi.responses import StreamingResponse, HTMLResponse
import qrcode
import io
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# allow requests from your frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # or restrict to my Codespaces frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/generate")
async def generate_qr(url: str = Form(...)):
    qr = qrcode.make(url)
    buffer = io.BytesIO()
    qr.save(buffer, format="PNG")
    buffer.seek(0)
    return StreamingResponse(buffer, media_type="image/png")


@app.get("/", response_class=HTMLResponse)
async def read_root():
    return """
    <h1>QR Code Generator Test</h1>
    <form action="/generate" method="post">
        <input name="url" type="text" placeholder="Enter a URL" />
        <button type="submit">Generate</button>
    </form>
    """