import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend Vite application
app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

const DATA_DIR = path.join(__dirname, 'data');
const FILE_PATH = path.join(DATA_DIR, 'inquiries.json');

// Ensure database directory and file exist on server startup
if (!fs.existsSync(DATA_DIR)) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(FILE_PATH)) {
  fs.writeFileSync(FILE_PATH, JSON.stringify([], null, 2), 'utf-8');
}

// Helper to read database
const readInquiries = () => {
  try {
    const data = fs.readFileSync(FILE_PATH, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading inquiries database:', err);
    return [];
  }
};

// Helper to write to database
const writeInquiries = (data) => {
  try {
    fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    console.error('Error writing to inquiries database:', err);
    return false;
  }
};

// API Route: Submit new contact inquiry
app.post('/api/inquiry', (req, res) => {
  const {
    fullName,
    phone,
    email,
    companyName,
    city,
    pincode,
    serviceRequired,
    message
  } = req.body;

  const errors = {};

  // Server-side Validations
  if (!fullName || !fullName.trim()) {
    errors.fullName = 'Full Name is required';
  }
  
  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phone || !phone.trim()) {
    errors.phone = 'Phone number is required';
  } else if (!phoneRegex.test(phone.trim())) {
    errors.phone = 'Please enter a valid 10-digit phone number';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !email.trim()) {
    errors.email = 'Email address is required';
  } else if (!emailRegex.test(email.trim())) {
    errors.email = 'Please enter a valid email address';
  }

  if (!city || !city.trim()) {
    errors.city = 'City is required';
  }

  const pincodeRegex = /^\d{6}$/;
  if (!pincode || !pincode.trim()) {
    errors.pincode = 'Pincode is required';
  } else if (!pincodeRegex.test(pincode.trim())) {
    errors.pincode = 'Please enter a valid 6-digit pincode';
  }

  if (!serviceRequired) {
    errors.serviceRequired = 'Please select a service';
  }

  if (!message || !message.trim()) {
    errors.message = 'Message is required';
  }

  // Check if there are validation errors
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ success: false, errors });
  }

  // Create new inquiry record
  const newInquiry = {
    id: Date.now(),
    submittedAt: new Date().toISOString(),
    fullName: fullName.trim(),
    phone: phone.trim(),
    email: email.trim(),
    companyName: companyName ? companyName.trim() : '',
    city: city.trim(),
    pincode: pincode.trim(),
    serviceRequired,
    message: message.trim()
  };

  const inquiries = readInquiries();
  inquiries.push(newInquiry);

  if (writeInquiries(inquiries)) {
    return res.status(201).json({
      success: true,
      message: 'Thank you! We have received your inquiry.'
    });
  } else {
    return res.status(500).json({
      success: false,
      message: 'Internal server error: Failed to save the inquiry.'
    });
  }
});

// API Route: Fetch all inquiries (administrative review)
app.get('/api/inquiries', (req, res) => {
  const inquiries = readInquiries();
  res.json({ success: true, count: inquiries.length, data: inquiries });
});

// API Root welcome route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Virat Kohli Electrical & Automation Solutions API",
    status: "Healthy",
    endpoints: {
      health: "/api/health",
      inquiry: "/api/inquiry (POST)",
      inquiries: "/api/inquiries (GET)"
    }
  });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date() });
});

// Start the server
app.listen(PORT, () => {
  console.log(`[Server] Virat Kohli Solutions Backend running on port ${PORT}`);
});
