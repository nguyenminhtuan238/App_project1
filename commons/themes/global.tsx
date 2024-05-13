const envTOKEN: string = process.env.EXPO_PUBLIC_TOKEN!;
const envREFRESHTOKEN: string = process.env.EXPO_PUBLIC_REFRESHTOKEN!;
const envUser: string = process.env.EXPO_PUBLIC_USER!;
const supabaseURL: string = process.env.EXPO_PUBLIC_URLSUPABASE!;
const supabaseANONKEY: string = process.env.EXPO_PUBLIC_ANON_KEY!;
const apiKey: string = process.env.EXPO_PUBLIC_APIKEY!;
const authDomain: string = process.env.EXPO_PUBLIC_AUTHDOMAIN!;
const projectId: string = process.env.EXPO_PUBLIC_PROJECTID!;
const storageBucket: string = process.env.EXPO_PUBLIC_STORAGEBUCKET!;
const messagingSenderId: string = process.env.EXPO_PUBLIC_MESSAGINGSENDERID!;
const appId: string = process.env.EXPO_PUBLIC_APPID!;
const measurementId: string = process.env.EXPO_PUBLIC_MEASUREMENTID!;
const webClientId: string = process.env.EXPO_PUBLIC_WEBCLIENTID!;
export {
  envTOKEN,
  envREFRESHTOKEN,
  supabaseURL,
  supabaseANONKEY,
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  measurementId,
  messagingSenderId,
  appId,
  webClientId,
  envUser,
};
