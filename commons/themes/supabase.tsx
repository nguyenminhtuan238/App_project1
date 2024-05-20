import { AppState } from 'react-native';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { supabaseANONKEY, supabaseURL } from './global';
// const supabaseUrl = "https://uxsqmupweuojuoefwqad.supabase.co"
// const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV4c3FtdXB3ZXVvanVvZWZ3cWFkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ0NDg3NDgsImV4cCI6MjAzMDAyNDc0OH0.I_Db5dCc85iGE_KxDQ-zPhEGqivCiMApIiv9W_oWRd0"

export const supabase = createClient(supabaseURL, supabaseANONKEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Tells Supabase Auth to continuously refresh the session automatically
// if the app is in the foreground. When this is added, you will continue
// to receive `onAuthStateChange` events with the `TOKEN_REFRESHED` or
// `SIGNED_OUT` event if the user's session is terminated. This should
// only be registered once.
AppState.addEventListener('change', (state) => {
  if (state === 'active') {
    supabase.auth.startAutoRefresh();
  } else {
    supabase.auth.stopAutoRefresh();
  }
});
