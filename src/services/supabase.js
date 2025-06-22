import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://dmdghyhxchtkmmtprevl.supabase.cos";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRtZGdoeWh4Y2h0a21tdHByZXZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA1MDI2MzcsImV4cCI6MjA2NjA3ODYzN30.bP9Lu_QwBg9QuHUphiQx6otAOoiJubUHN23rlpzTWjY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
