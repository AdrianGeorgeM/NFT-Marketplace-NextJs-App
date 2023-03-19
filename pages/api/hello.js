// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// This function is called when you visit /api/hello on your website and returns a JSON object with your name and alchemy key to be used in the frontend
export default function handler(req, res) {
	res.status(200).json({
		name: 'ADD_CONTRACT_OWNER_WALLET_PRIVATE_KEY', // This is the private key of the wallet that will be used to sign the transactions
		alchemykey: 'ADD_ALCHEMY_API_KEY', // This is the API key for Alchemy
	});
}
