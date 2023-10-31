import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://rdueqetfzxtowqpwlfbb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkdWVxZXRmenh0b3dxcHdsZmJiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTg2MDY2NjMsImV4cCI6MjAxNDE4MjY2M30.ZuSVjEuz8E4nmaJtvCtiyds_NZubvAUtGiWp9Y-hLPE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
