
const { PublicKey, Connection, clusterApiUrl } = solanaWeb3;
//const { encodeURL, createQR } = solanaPay;

export function test1(){

   // Your wallet address (where funds will be sent)
   const recipient = new PublicKey('YOUR_SOLANA_WALLET_ADDRESS');
   console.log(recipient);
   // Payment details
   const amount = 0.5; // in SOL
   const reference = new PublicKey('REFERENCE_PUBLIC_KEY'); // optional, for tracking
   console.log(reference);
   const label = 'Roger’s Store';
   const message = 'Thanks for your purchase!';

   // Encode payment URL
   const url = encodeURL({
     recipient,
     amount,
     reference,
     label,
     message
   });
   console.log(url);
}
