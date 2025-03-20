// old code


// const QRCode = require('qrcode');

// exports.formatData = (data) => {
// 	const qrCodeText = `Product ID: ${data.id}, Price: $${data.price}`;
// 	return qrCodeText;
// };

// exports.generateQRCode = async (qrCodeText) => {
// 	const options = {
// 		errorCorrectionLevel: 'M',
// 		type: 'image/png',
// 		margin: 1
// 	};

// 	const qrCodeBuffer = await QRCode.toBuffer(qrCodeText, options);
// 	return qrCodeBuffer;
// };

//new code
const QRCode = require('qrcode');

exports.formatData = (data) => {
	// Convert object fields to string (e.g., "Name: John, Age: 25")
	return Object.entries(data).map(([key, value]) => `${key}: ${value}`).join(', ');
};

exports.generateQRCode = async (qrCodeText) => {
	const options = {
		errorCorrectionLevel: 'M',
		type: 'image/png',
		margin: 1
	};

	return await QRCode.toBuffer(qrCodeText, options);
};
