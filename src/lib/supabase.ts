import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://cnmhvzimqivjvrhuajnk.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNubWh2emltcWl2anZyaHVham5rIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgyMjI1MTcsImV4cCI6MjA2Mzc5ODUxN30.rK1WbXB8VKFSYtbGMgYGCpIu4M6yWVcHR5Nu8kTzd7A";

export const supabase = createClient(supabaseUrl, supabaseKey);